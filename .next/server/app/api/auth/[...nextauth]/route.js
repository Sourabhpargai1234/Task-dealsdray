"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sourabh_Desktop_internship_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/sourabh/Desktop/internship/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_sourabh_Desktop_internship_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc291cmFiaCUyRkRlc2t0b3AlMkZpbnRlcm5zaGlwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGc291cmFiaCUyRkRlc2t0b3AlMkZpbnRlcm5zaGlwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVybnNoaXAvP2I3NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvc291cmFiaC9EZXNrdG9wL2ludGVybnNoaXAvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc291cmFiaC9EZXNrdG9wL2ludGVybnNoaXAvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/auth */ \"(rsc)/./libs/auth.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_libs_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNUO0FBRWpDLE1BQU1FLFVBQVVELGdEQUFRQSxDQUFDRCxtREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVybnNoaXAvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGlicy9hdXRoXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiTmV4dEF1dGgiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/auth.ts":
/*!**********************!*\
  !*** ./libs/auth.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongodb */ \"(rsc)/./libs/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n                console.log(\"Credentials on backend\", credentials);\n                if (!credentials) {\n                    throw new Error(\"No credentials provided\");\n                }\n                const { username, password } = credentials;\n                // Find the user in the database\n                const userFound = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n                    username\n                }).select(\"+password\");\n                if (!userFound) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                // Compare the password\n                const passwordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, userFound.password);\n                if (!passwordMatch) {\n                    throw new Error(\"Invalid password\");\n                }\n                // Create a plain object that aligns with NextAuth's expected user type\n                const user = {\n                    id: userFound._id.toString(),\n                    username: userFound.username,\n                    createdAt: userFound.createdAt,\n                    updatedAt: userFound.updatedAt\n                };\n                return user; // Assert the type to be compatible with NextAuth\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user, session, trigger }) {\n            // Keep your existing jwt logic\n            if (trigger === \"update\" && session?.name) {\n                token.name = session.name;\n            }\n            if (trigger === \"update\" && session?.email) {\n                token.email = session.email;\n            }\n            if (user) {\n                const u = user;\n                console.log(\"User profilePicture in jwt:\", u.profilePicture);\n                return {\n                    ...token,\n                    id: u.id,\n                    username: u.username\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    username: token.username\n                }\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ047QUFFNkI7QUFDcEM7QUFJdkIsTUFBTUksY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEgsMkVBQW1CQSxDQUFDO1lBQ2xCSSxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtnQkFBTztnQkFDNUNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixNQUFNUix3REFBU0E7Z0JBQ2ZjLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJQO2dCQUN0QyxJQUFJLENBQUNBLGFBQWE7b0JBQ2hCLE1BQU0sSUFBSVEsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTSxFQUFFUCxRQUFRLEVBQUVHLFFBQVEsRUFBRSxHQUFHSjtnQkFDL0IsZ0NBQWdDO2dCQUNoQyxNQUFNUyxZQUFZLE1BQU1oQiw4Q0FBSUEsQ0FBQ2lCLE9BQU8sQ0FBQztvQkFBRVQ7Z0JBQVMsR0FBR1UsTUFBTSxDQUFDO2dCQUMxRCxJQUFJLENBQUNGLFdBQVc7b0JBQ2QsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFDQSx1QkFBdUI7Z0JBQ3ZCLE1BQU1JLGdCQUFnQixNQUFNakIsdURBQWMsQ0FBQ1MsVUFBVUssVUFBVUwsUUFBUTtnQkFDdkUsSUFBSSxDQUFDUSxlQUFlO29CQUNsQixNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUNBLHVFQUF1RTtnQkFDdkUsTUFBTU0sT0FBTztvQkFDWGYsSUFBSVUsVUFBVU0sR0FBRyxDQUFDQyxRQUFRO29CQUMxQmYsVUFBVVEsVUFBVVIsUUFBUTtvQkFDNUJnQixXQUFXUixVQUFVUSxTQUFTO29CQUM5QkMsV0FBV1QsVUFBVVMsU0FBUztnQkFDaEM7Z0JBQ0EsT0FBT0osTUFBYSxpREFBaUQ7WUFDdkU7UUFDRjtLQUNEO0lBQ0RLLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVgsSUFBSSxFQUFFTyxPQUFPLEVBQUVLLE9BQU8sRUFBRTtZQUN6QywrQkFBK0I7WUFDL0IsSUFBSUEsWUFBWSxZQUFZTCxTQUFTdkIsTUFBTTtnQkFDekMyQixNQUFNM0IsSUFBSSxHQUFHdUIsUUFBUXZCLElBQUk7WUFDM0I7WUFFQSxJQUFJNEIsWUFBWSxZQUFZTCxTQUFTTSxPQUFPO2dCQUMxQ0YsTUFBTUUsS0FBSyxHQUFHTixRQUFRTSxLQUFLO1lBQzdCO1lBRUEsSUFBSWIsTUFBTTtnQkFDUixNQUFNYyxJQUFFZDtnQkFDUlIsUUFBUUMsR0FBRyxDQUFDLCtCQUErQnFCLEVBQUVDLGNBQWM7Z0JBQzNELE9BQU87b0JBQ0wsR0FBR0osS0FBSztvQkFDUjFCLElBQUk2QixFQUFFN0IsRUFBRTtvQkFDUkUsVUFBVTJCLEVBQUUzQixRQUFRO2dCQUN0QjtZQUNGO1lBQ0EsT0FBT3dCO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFvQztZQUNoRSxPQUFPO2dCQUNMLEdBQUdKLE9BQU87Z0JBQ1ZQLE1BQU07b0JBQ0osR0FBR08sUUFBUVAsSUFBSTtvQkFDZmYsSUFBSTBCLE1BQU0xQixFQUFFO29CQUNaRSxVQUFVd0IsTUFBTXhCLFFBQVE7Z0JBQzFCO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVybnNoaXAvLi9saWJzL2F1dGgudHM/ZTAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWJzL21vbmdvZGJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBKV1QgfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwidXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWRlbnRpYWxzIG9uIGJhY2tlbmRcIiwgY3JlZGVudGlhbHMpXG4gICAgICAgIGlmICghY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjcmVkZW50aWFscyBwcm92aWRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG4gICAgICAgIC8vIEZpbmQgdGhlIHVzZXIgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IHVzZXJGb3VuZCA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKTtcbiAgICAgICAgaWYgKCF1c2VyRm91bmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbXBhcmUgdGhlIHBhc3N3b3JkXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlckZvdW5kLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFwYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXNzd29yZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgYSBwbGFpbiBvYmplY3QgdGhhdCBhbGlnbnMgd2l0aCBOZXh0QXV0aCdzIGV4cGVjdGVkIHVzZXIgdHlwZVxuICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgIGlkOiB1c2VyRm91bmQuX2lkLnRvU3RyaW5nKCksIC8vIGNvbnZlcnQgT2JqZWN0SWQgdG8gc3RyaW5nXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJGb3VuZC51c2VybmFtZSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXJGb3VuZC5jcmVhdGVkQXQsXG4gICAgICAgICAgdXBkYXRlZEF0OiB1c2VyRm91bmQudXBkYXRlZEF0LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlciBhcyBhbnk7IC8vIEFzc2VydCB0aGUgdHlwZSB0byBiZSBjb21wYXRpYmxlIHdpdGggTmV4dEF1dGhcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBzZXNzaW9uLCB0cmlnZ2VyIH0pIHtcbiAgICAgIC8vIEtlZXAgeW91ciBleGlzdGluZyBqd3QgbG9naWNcbiAgICAgIGlmICh0cmlnZ2VyID09PSBcInVwZGF0ZVwiICYmIHNlc3Npb24/Lm5hbWUpIHtcbiAgICAgICAgdG9rZW4ubmFtZSA9IHNlc3Npb24ubmFtZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAodHJpZ2dlciA9PT0gXCJ1cGRhdGVcIiAmJiBzZXNzaW9uPy5lbWFpbCkge1xuICAgICAgICB0b2tlbi5lbWFpbCA9IHNlc3Npb24uZW1haWw7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc3QgdT11c2VyIGFzIHVua25vd24gYXMgYW55O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgcHJvZmlsZVBpY3R1cmUgaW4gand0OlwiLCB1LnByb2ZpbGVQaWN0dXJlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi50b2tlbixcbiAgICAgICAgICBpZDogdS5pZCxcbiAgICAgICAgICB1c2VybmFtZTogdS51c2VybmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiB7IHNlc3Npb246IFNlc3Npb247IHRva2VuOiBKV1QgfSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgICBpZDogdG9rZW4uaWQgYXMgc3RyaW5nLCAvLyBBc3NlcnQgYXMgc3RyaW5nXG4gICAgICAgICAgdXNlcm5hbWU6IHRva2VuLnVzZXJuYW1lIGFzIHN0cmluZywgLy8gQXNzZXJ0IGFzIHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTsiXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJpZCIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInVzZXJGb3VuZCIsImZpbmRPbmUiLCJzZWxlY3QiLCJwYXNzd29yZE1hdGNoIiwiY29tcGFyZSIsInVzZXIiLCJfaWQiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwiZW1haWwiLCJ1IiwicHJvZmlsZVBpY3R1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/auth.ts\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.ts":
/*!*************************!*\
  !*** ./libs/mongodb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"MONGODB_URI must be defined\");\n}\nconst connectDB = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState !== 1) {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n            console.log(\"MongoDB Connected\");\n        }\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection); // Return the connection object\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsWUFBWTtJQUN2QixJQUFJO1FBQ0YsSUFBSUwsNERBQW1CLENBQUNPLFVBQVUsS0FBSyxHQUFHO1lBQ3hDLE1BQU1QLHVEQUFnQixDQUFDQztZQUN2QlEsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFDQSxPQUFPViw0REFBbUIsRUFBRSwrQkFBK0I7SUFDN0QsRUFBRSxPQUFPVyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJuc2hpcC8uL2xpYnMvbW9uZ29kYi50cz80YjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBtdXN0IGJlIGRlZmluZWRcIik7XG59XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSAhPT0gMSkge1xuICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSk7XG4gICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjsgLy8gUmV0dXJuIHRoZSBjb25uZWN0aW9uIG9iamVjdFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n//User Schema and it's type\n\n// Interface for the User model\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true,\n        select: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyQkFBMkI7QUFFMkI7QUFRdEQsK0JBQStCO0FBQy9CLE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQVE7SUFDbkNFLFVBQVU7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDQyxVQUFVO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFNO0FBQzFELEdBQUc7SUFDREMsWUFBWTtBQUNkO0FBRU8sTUFBTUMsT0FBT1Ysd0RBQWUsQ0FBQ1UsSUFBSSxJQUFJVixxREFBYyxDQUFRLFFBQVFFLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcm5zaGlwLy4vbW9kZWxzL1VzZXIudHM/NmRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1VzZXIgU2NoZW1hIGFuZCBpdCdzIHR5cGVcblxuaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuXG4vLyBJbnRlcmZhY2UgZm9yIHRoZSBVc2VyIG1vZGVsXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYTxJVXNlcj4oe1xuICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcbn0sIHtcbiAgdGltZXN0YW1wczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsPElVc2VyPihcIlVzZXJcIiwgVXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJzZWxlY3QiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsourabh%2FDesktop%2Finternship&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();