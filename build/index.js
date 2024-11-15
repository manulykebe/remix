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

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ASWEX6PD.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// app/components/Calendar.tsx
import { format as format2, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// app/components/EventModal.tsx
import { Form } from "@remix-run/react";
import { X } from "lucide-react";
import { format } from "date-fns";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function EventModal({ date, onClose, user, existingEvent }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg p-6 w-full max-w-md", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-semibold", children: format(date, "MMMM d, yyyy") }, void 0, !1, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("button", { onClick: onClose, className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ jsxDEV3(X, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/EventModal.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "date", value: date.toISOString() }, void 0, !1, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { children: [
        /* @__PURE__ */ jsxDEV3("label", { className: "block text-sm font-medium text-gray-700", children: "Event Type" }, void 0, !1, {
          fileName: "app/components/EventModal.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "select",
          {
            name: "type",
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
            defaultValue: existingEvent?.type || "",
            children: [
              /* @__PURE__ */ jsxDEV3("option", { value: "UNAVAILABLE", children: "Unavailable" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 38,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("option", { value: "PREFER_NOT", children: "Prefer Not" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("option", { value: "HOLIDAY_REQUEST", children: "Holiday Request" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 40,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("option", { value: "PREFERRED", children: "Preferred" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/EventModal.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      existingEvent && user.role === "ADMIN" && /* @__PURE__ */ jsxDEV3("div", { children: [
        /* @__PURE__ */ jsxDEV3("label", { className: "block text-sm font-medium text-gray-700", children: "Status" }, void 0, !1, {
          fileName: "app/components/EventModal.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "select",
          {
            name: "status",
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
            defaultValue: existingEvent.status,
            children: [
              /* @__PURE__ */ jsxDEV3("option", { value: "PENDING", children: "Pending" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("option", { value: "APPROVED", children: "Approved" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 56,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("option", { value: "REJECTED", children: "Rejected" }, void 0, !1, {
                fileName: "app/components/EventModal.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/EventModal.tsx",
            lineNumber: 50,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-end gap-3", children: [
        existingEvent && /* @__PURE__ */ jsxDEV3(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "delete",
            className: "px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200",
            children: "Delete"
          },
          void 0,
          !1,
          {
            fileName: "app/components/EventModal.tsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          "button",
          {
            type: "submit",
            name: "_action",
            value: existingEvent ? "update" : "create",
            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
            children: [
              existingEvent ? "Update" : "Create",
              " Event"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/EventModal.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/EventModal.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/EventModal.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EventModal.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/EventModal.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/Calendar.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Calendar({ events, user }) {
  let [currentDate, setCurrentDate] = useState(/* @__PURE__ */ new Date()), [selectedDate, setSelectedDate] = useState(null), days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  }), getEventForDate = (date) => events.find(
    (event) => format2(new Date(event.date), "yyyy-MM-dd") === format2(date, "yyyy-MM-dd")
  ), getEventColor = (type) => ({
    UNAVAILABLE: "bg-red-200",
    PREFER_NOT: "bg-yellow-200",
    HOLIDAY_REQUEST: "bg-blue-200",
    PREFERRED: "bg-green-200"
  })[type] || "bg-gray-200";
  return /* @__PURE__ */ jsxDEV4("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxDEV4("h2", { className: "text-2xl font-semibold text-gray-900", children: format2(currentDate, "MMMM yyyy") }, void 0, !1, {
        fileName: "app/components/Calendar.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxDEV4(
          "button",
          {
            onClick: () => setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)),
            className: "p-2 hover:bg-gray-100 rounded-full",
            children: /* @__PURE__ */ jsxDEV4(ChevronLeft, { className: "w-5 h-5" }, void 0, !1, {
              fileName: "app/components/Calendar.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Calendar.tsx",
            lineNumber: 43,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          "button",
          {
            onClick: () => setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)),
            className: "p-2 hover:bg-gray-100 rounded-full",
            children: /* @__PURE__ */ jsxDEV4(ChevronRight, { className: "w-5 h-5" }, void 0, !1, {
              fileName: "app/components/Calendar.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Calendar.tsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Calendar.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Calendar.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-7 gap-px bg-gray-200", children: [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => /* @__PURE__ */ jsxDEV4("div", { className: "bg-gray-50 p-4 text-center text-sm font-semibold", children: day }, day, !1, {
        fileName: "app/components/Calendar.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)),
      days.map((day) => {
        let event = getEventForDate(day);
        return /* @__PURE__ */ jsxDEV4(
          "div",
          {
            onClick: () => setSelectedDate(day),
            className: `
                bg-white p-4 min-h-[100px] cursor-pointer
                hover:bg-gray-50 transition-colors
                ${event ? getEventColor(event.type) : ""}
              `,
            children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "text-sm font-medium", children: format2(day, "d") }, void 0, !1, {
                fileName: "app/components/Calendar.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this),
              event && /* @__PURE__ */ jsxDEV4("div", { className: "mt-1 text-xs", children: event.type.toLowerCase().replace("_", " ") }, void 0, !1, {
                fileName: "app/components/Calendar.tsx",
                lineNumber: 81,
                columnNumber: 17
              }, this)
            ]
          },
          day.toISOString(),
          !0,
          {
            fileName: "app/components/Calendar.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "app/components/Calendar.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    selectedDate && /* @__PURE__ */ jsxDEV4(
      EventModal,
      {
        date: selectedDate,
        onClose: () => setSelectedDate(null),
        user,
        existingEvent: getEventForDate(selectedDate)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Calendar.tsx",
        lineNumber: 91,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Calendar.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/utils/auth.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
global.__db || (global.__db = new PrismaClient()), db = global.__db;

// app/utils/auth.server.ts
var sessionSecret = process.env.SESSION_SECRET || "default-secret", storage = createCookieSessionStorage({
  cookie: {
    name: "calendar_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    // 30 days
    httpOnly: !0
  }
});
async function requireUser(request) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId)
    throw redirect("/login");
  let user = await db.user.findUnique({ where: { id: userId } });
  if (!user)
    throw redirect("/login");
  return user;
}
async function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}

// app/utils/calendar.server.ts
import { startOfMonth as startOfMonth2, endOfMonth as endOfMonth2 } from "date-fns";
async function getMonthEvents(date = /* @__PURE__ */ new Date()) {
  return db.event.findMany({
    where: {
      date: {
        gte: startOfMonth2(date),
        lte: endOfMonth2(date)
      }
    },
    include: {
      user: {
        select: {
          name: !0,
          email: !0
        }
      }
    }
  });
}

// app/components/Layout.tsx
import { Form as Form2 } from "@remix-run/react";
import { Calendar as Calendar2, LogOut, User } from "lucide-react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Layout({ user, children }) {
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen flex", children: [
    /* @__PURE__ */ jsxDEV5("aside", { className: "w-64 bg-white border-r", children: /* @__PURE__ */ jsxDEV5("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxDEV5(Calendar2, { className: "w-6 h-6 text-blue-600" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "text-xl font-semibold", children: "Team Calendar" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV5(User, { className: "w-5 h-5 text-gray-500" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { children: [
            /* @__PURE__ */ jsxDEV5("p", { className: "font-medium", children: user.name }, void 0, !1, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 24,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-gray-500", children: user.role }, void 0, !1, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 25,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5(Form2, { action: "/logout", method: "post", children: /* @__PURE__ */ jsxDEV5("button", { className: "flex items-center gap-2 text-gray-600 hover:text-gray-900", children: [
          /* @__PURE__ */ jsxDEV5(LogOut, { className: "w-5 h-5" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { children: "Logout" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 32,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { className: "flex-1 overflow-auto", children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  let user = await requireUser(request), events = await getMonthEvents();
  return json({ user, events });
}
function Index() {
  let { user, events } = useLoaderData();
  return /* @__PURE__ */ jsxDEV6(Layout, { user, children: /* @__PURE__ */ jsxDEV6(Calendar, { events, user }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3TIMUYTV.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-REC52AW4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UZE7NDBG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-62ELELYA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SEIWDWXH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "a05195db", hmr: { runtime: "/build/_shared\\chunk-UZE7NDBG.js", timestamp: 1731680212615 }, url: "/build/manifest-A05195DB.js" };

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
