var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  // { rel: "stylesheet", href: styles },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "apple-touch-icon", href: "/icons/icon-192x192.png" }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Toaster, { position: "top-right" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  meta: () => meta
});
import { useState as useState2, useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";

// src/components/Calendar.tsx
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var statusColors = {
  unavailable: "bg-red-100 text-red-800",
  "prefer-not": "bg-yellow-100 text-yellow-800",
  "request-holiday": "bg-blue-100 text-blue-800",
  preferred: "bg-green-100 text-green-800"
};
function Calendar({ currentDate, dateRequests, onDateSelect, onMonthChange }) {
  let monthStart = startOfMonth(currentDate), monthEnd = endOfMonth(currentDate), days = eachDayOfInterval({ start: monthStart, end: monthEnd }), getDateStatus = (date) => {
    let dateStr = format(date, "yyyy-MM-dd");
    return dateRequests.find((request) => request.date === dateStr);
  };
  return /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-4", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxDEV3("h2", { className: "text-xl font-semibold", children: format(currentDate, "MMMM yyyy") }, void 0, !1, {
        fileName: "src/components/Calendar.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: () => onMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1))),
            className: "p-2 hover:bg-gray-100 rounded-full",
            children: /* @__PURE__ */ jsxDEV3(ChevronLeft, { className: "w-5 h-5" }, void 0, !1, {
              fileName: "src/components/Calendar.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "src/components/Calendar.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: () => onMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1))),
            className: "p-2 hover:bg-gray-100 rounded-full",
            children: /* @__PURE__ */ jsxDEV3(ChevronRight, { className: "w-5 h-5" }, void 0, !1, {
              fileName: "src/components/Calendar.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "src/components/Calendar.tsx",
            lineNumber: 43,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/components/Calendar.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/Calendar.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-cols-7 gap-1", children: [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => /* @__PURE__ */ jsxDEV3("div", { className: "text-center text-sm font-medium text-gray-500 py-2", children: day }, day, !1, {
        fileName: "src/components/Calendar.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)),
      days.map((day) => {
        let status = getDateStatus(day);
        return /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: () => onDateSelect(day),
            className: `
                p-2 text-sm rounded-lg hover:bg-gray-50
                ${isSameMonth(day, currentDate) ? "" : "text-gray-300"}
                ${status ? statusColors[status.status] : ""}
              `,
            children: [
              /* @__PURE__ */ jsxDEV3("span", { className: "font-medium", children: format(day, "d") }, void 0, !1, {
                fileName: "src/components/Calendar.tsx",
                lineNumber: 71,
                columnNumber: 15
              }, this),
              status && /* @__PURE__ */ jsxDEV3("div", { className: "text-xs mt-1", children: status.acknowledged ? "\u2713" : "\u2022" }, void 0, !1, {
                fileName: "src/components/Calendar.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this)
            ]
          },
          day.toString(),
          !0,
          {
            fileName: "src/components/Calendar.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "src/components/Calendar.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Calendar.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// src/components/DateRequestModal.tsx
import { format as format2 } from "date-fns";
import { X } from "lucide-react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var statusOptions = [
  { value: "unavailable", label: "Unavailable", color: "bg-red-500" },
  { value: "prefer-not", label: "Prefer Not", color: "bg-yellow-500" },
  { value: "request-holiday", label: "Request Holiday", color: "bg-blue-500" },
  { value: "preferred", label: "Preferred", color: "bg-green-500" }
];
function DateRequestModal({ date, onClose, onSubmit }) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV4("div", { className: "bg-white rounded-lg p-6 w-full max-w-md", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV4("h3", { className: "text-lg font-semibold", children: format2(date, "MMMM d, yyyy") }, void 0, !1, {
        fileName: "src/components/DateRequestModal.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ jsxDEV4(X, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "src/components/DateRequestModal.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "src/components/DateRequestModal.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/DateRequestModal.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "space-y-2", children: statusOptions.map((option) => /* @__PURE__ */ jsxDEV4(
      "button",
      {
        onClick: () => onSubmit(option.value),
        className: `
                w-full p-3 rounded-lg text-white font-medium
                transition-colors duration-200
                ${option.color} hover:opacity-90
              `,
        children: option.label
      },
      option.value,
      !1,
      {
        fileName: "src/components/DateRequestModal.tsx",
        lineNumber: 33,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "src/components/DateRequestModal.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/DateRequestModal.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/DateRequestModal.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// src/components/Login.tsx
import { useState } from "react";

// src/lib/api.ts
import axios from "axios";
var api = axios.create({
  baseURL: "http://localhost:3000/api"
});
api.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  return token && (config.headers.Authorization = `Bearer ${token}`), config;
});
var login = async (username, password) => {
  let { data } = await api.post("/auth/login", { username, password });
  return localStorage.setItem("token", data.token), data;
}, getDateRequests = async () => {
  let { data } = await api.get("/calendar/requests");
  return data;
}, createDateRequest = async (date, status) => {
  let { data } = await api.post("/calendar/requests", { date, status });
  return data;
};

// src/components/Login.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Login({ onLogin }) {
  let [username, setUsername] = useState(""), [password, setPassword] = useState(""), [error, setError] = useState("");
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Team Calendar" }, void 0, !1, {
      fileName: "src/components/Login.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "src/components/Login.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("form", { className: "mt-8 space-y-6", onSubmit: async (e) => {
      e.preventDefault();
      try {
        let data = await login(username, password);
        localStorage.setItem("user", JSON.stringify(data.user)), onLogin();
      } catch {
        setError("Invalid credentials");
      }
    }, children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
          "input",
          {
            type: "text",
            required: !0,
            value: username,
            onChange: (e) => setUsername(e.target.value),
            className: `appearance-none rounded-none relative block w-full px-3 py-2 border 
                         border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                         focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`,
            placeholder: "Username"
          },
          void 0,
          !1,
          {
            fileName: "src/components/Login.tsx",
            lineNumber: 35,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "src/components/Login.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
          "input",
          {
            type: "password",
            required: !0,
            value: password,
            onChange: (e) => setPassword(e.target.value),
            className: `appearance-none rounded-none relative block w-full px-3 py-2 border
                         border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md
                         focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`,
            placeholder: "Password"
          },
          void 0,
          !1,
          {
            fileName: "src/components/Login.tsx",
            lineNumber: 47,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "src/components/Login.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/components/Login.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ jsxDEV5("div", { className: "text-red-500 text-sm text-center", children: error }, void 0, !1, {
        fileName: "src/components/Login.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
        "button",
        {
          type: "submit",
          className: `group relative w-full flex justify-center py-2 px-4 border border-transparent 
                       text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
          children: "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "src/components/Login.tsx",
          lineNumber: 65,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "src/components/Login.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/Login.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Login.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/Login.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import toast from "react-hot-toast";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Team Calendar" },
  { name: "description", content: "Team calendar application for managing availability" }
];
async function action({ request }) {
  let formData = await request.formData(), { date, status } = Object.fromEntries(formData);
  try {
    let data = await (await fetch("http://localhost:3000/api/calendar/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ date, status })
    })).json();
    return json(data);
  } catch {
    return json({ error: "Failed to create request" }, { status: 400 });
  }
}
function Index() {
  let [isAuthenticated, setIsAuthenticated] = useState2(!1), [currentDate, setCurrentDate] = useState2(/* @__PURE__ */ new Date()), [selectedDate, setSelectedDate] = useState2(null), [dateRequests, setDateRequests] = useState2([]), navigation = useNavigation(), actionData = useActionData(), isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []), useEffect(() => {
    isAuthenticated && loadDateRequests();
  }, [isAuthenticated]);
  let loadDateRequests = async () => {
    try {
      let requests = await getDateRequests();
      setDateRequests(requests);
    } catch {
      toast.error("Failed to load date requests");
    }
  }, handleLogin = () => {
    setIsAuthenticated(!0);
  }, handleDateSelect = (date) => {
    setSelectedDate(date);
  }, handleRequestSubmit = async (status) => {
    try {
      await createDateRequest(
        selectedDate.toISOString().split("T")[0],
        status
      ), await loadDateRequests(), setSelectedDate(null), toast.success("Request created successfully");
    } catch {
      toast.error("Failed to create request");
    }
  };
  return isAuthenticated ? /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV6(
      Calendar,
      {
        currentDate,
        dateRequests,
        onDateSelect: handleDateSelect,
        onMonthChange: setCurrentDate
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 96,
        columnNumber: 9
      },
      this
    ),
    selectedDate && /* @__PURE__ */ jsxDEV6(
      DateRequestModal,
      {
        date: selectedDate,
        onClose: () => setSelectedDate(null),
        onSubmit: handleRequestSubmit
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV6(Login, { onLogin: handleLogin }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 90,
    columnNumber: 12
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QJSYZVPZ.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-MXKJ6RM5.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-5IEQTSYW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YBNUGMNV.js", imports: ["/build/_shared/chunk-KXR45AHW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZPZFQ3F4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b5f8c874", hmr: { runtime: "/build/_shared\\chunk-5IEQTSYW.js", timestamp: 1731686434965 }, url: "/build/manifest-B5F8C874.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1, unstable_routeConfig: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
