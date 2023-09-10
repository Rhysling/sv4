import { readable, writable, derived, get } from "svelte/store";

let getBaseRoutes = (): Route => {

	return {
		title: "Home",
		page: "Home",
		path: "/",
		children: [
			{
				title: "Store Demo",
				page: "StoreDemo",
				navName: "Stores",
				path: "/store-demo",
				children: []
			},
			{
				title: "Axios Demo",
				page: "AxiosDemo",
				navName: "Axios",
				path: "/axios-demo",
				children: []
			},
			{
				title: "TBD",
				page: "TBD",
				path: "/tbd",
				isHidden: true,
				children: []
			}
		]
	};
};

function filterAdminRoutes(node: Route) {
	if (node.children)
		node.children = node.children.filter(a => a.isAdmin !== true).map(a => filterAdminRoutes(a));

	return node;
}



function findRoute(routeRoot: Route, path: string): Route | undefined {
	let cr: Route | undefined;

	function traverse(node: Route): Route | undefined {

		if (node.path === path)
			return node;

		if (node.hasParam && path.startsWith(node.path + "/")) {
			return { ...node, path };
		}

		let cr: Route | undefined;

		if (node.children && node.children.length) {
			for (let i = 0; i < node.children.length; i += 1) {
				cr = traverse(node.children[i]);

				if (cr)
					return cr;
			}
		}
	}

	cr = traverse(routeRoot);

	return cr;
}

// Stores

export const routes = readable(getBaseRoutes());

export const currentPath = writable("/");
export const currentParams = writable<any>({});
export const isLiveOnlineShopping = writable(false);

export const currentRoute = derived([routes, currentPath], ([$routes, $currentPath]) => {
	let r = findRoute($routes, $currentPath);
	if (r) return r;

	$currentPath = "/";
	return $routes;
});

// Param functions

let paramStringToObj = (inp: string) => {
	let entries = (new URLSearchParams(inp)).entries();
	let p: any = {};
	for (let [key, val] of entries) {
		switch (val) {
			case "true":
				p[key] = true;
				break;
			case "false":
				p[key] = false;
				break;
			default:
				p[key] = val;
		}
	}
	return p;
};

let objToParamString = (inp: any) => {
	if (!inp) return "";

	let entries = Object.entries(inp);

	if (!entries.length) return "";

	let p = new URLSearchParams();
	for (let [key, val] of entries) {
		if (val === null || val === undefined || val === "") continue;
		p.append(key, <string>val);
	}

	return "?" + p.toString();
};

// Public Functions

export const navFromUrl = function () {
	let pathName = window.location.pathname;
	let r = findRoute(get(routes), pathName);

	if (!r) {
		window.location.replace(window.location.origin);
		currentPath.set("/");
		return;
	}

	let p: any;

	if (r.hasParam) {
		const re = /.*\/([^\/]+)\/?$/;
		let match = pathName.match(re);
		if (!match) {
			window.location.replace(window.location.origin);
			return;
		}
		p = { id: match[1] };
	}
	else {
		p = paramStringToObj(window.location.search);
	}

	currentPath.set(pathName);
	currentParams.set(p);
	document.title = `${r.title}`;
};

export const paramsFromUrl = () => {
	const p = paramStringToObj(window.location.search);
	currentParams.set(p);
	return p;
};

export const navTo = function (e: MouseEvent | null, pathName: string, params?: any) {
	e && e.preventDefault();
	let url = window.location.origin + pathName;

	let r = findRoute(get(routes), pathName);
	if (!r) {
		window.location.replace(window.location.origin);
		currentPath.set("/");
		return;
	}

	if (r.hasParam) {
		const re = /.*\/([^\/]+)\/?$/;
		let match = pathName.match(re);
		if (!match) {
			window.location.replace(window.location.origin);
			return;
		}
		params = { id: match[1] };
		currentParams.set(params);
	}
	else {
		if (params) {
			url += objToParamString(params);
			currentParams.set(params);
		}
		else {
			currentParams.set({});
		}
	}

	currentPath.set(pathName);
	document.title = `${r.title}`;

	window.history.pushState({}, pathName, url);
};

// Back Button

window.onpopstate = () => {
	let pathName = window.location.pathname;
	let r = findRoute(get(routes), pathName);

	if (r) {
		currentPath.set(pathName);
	} else {
		window.location.replace(window.location.origin);
	}
};
