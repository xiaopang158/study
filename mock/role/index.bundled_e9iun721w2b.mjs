// mock/role/index.ts
import { config } from "@/config/axios/config";
var { result_code } = config;
var timeout = 1e3;
var adminList = [
  {
    path: "/dashboard",
    component: "#",
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "router.dashboard",
      icon: "ant-design:dashboard-filled",
      alwaysShow: true
    },
    children: [
      {
        path: "analysis",
        component: "views/Dashboard/Analysis",
        name: "Analysis",
        meta: {
          title: "router.analysis",
          noCache: true
        }
      },
      {
        path: "workplace",
        component: "views/Dashboard/Workplace",
        name: "Workplace",
        meta: {
          title: "router.workplace",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/external-link",
    component: "#",
    meta: {},
    name: "ExternalLink",
    children: [
      {
        path: "https://element-plus-admin-doc.cn/",
        name: "DocumentLink",
        meta: {
          title: "router.document",
          icon: "clarity:document-solid"
        }
      }
    ]
  },
  {
    path: "/guide",
    component: "#",
    name: "Guide",
    meta: {},
    children: [
      {
        path: "index",
        component: "views/Guide/Guide",
        name: "GuideDemo",
        meta: {
          title: "router.guide",
          icon: "cib:telegram-plane"
        }
      }
    ]
  },
  {
    path: "/components",
    component: "#",
    redirect: "/components/form/default-form",
    name: "ComponentsDemo",
    meta: {
      title: "router.component",
      icon: "bx:bxs-component",
      alwaysShow: true
    },
    children: [
      {
        path: "form",
        component: "##",
        name: "Form",
        meta: {
          title: "router.form",
          alwaysShow: true
        },
        children: [
          {
            path: "default-form",
            component: "views/Components/Form/DefaultForm",
            name: "DefaultForm",
            meta: {
              title: "router.defaultForm"
            }
          },
          {
            path: "use-form",
            component: "views/Components/Form/UseFormDemo",
            name: "UseForm",
            meta: {
              title: "UseForm"
            }
          },
          {
            path: "ref-form",
            component: "views/Components/Form/RefForm",
            name: "RefForm",
            meta: {
              title: "RefForm"
            }
          }
        ]
      },
      {
        path: "table",
        component: "##",
        redirect: "/components/table/default-table",
        name: "TableDemo",
        meta: {
          title: "router.table",
          alwaysShow: true
        },
        children: [
          {
            path: "default-table",
            component: "views/Components/Table/DefaultTable",
            name: "DefaultTable",
            meta: {
              title: "router.defaultTable"
            }
          },
          {
            path: "use-table",
            component: "views/Components/Table/UseTableDemo",
            name: "UseTable",
            meta: {
              title: "UseTable"
            }
          },
          {
            path: "ref-table",
            component: "views/Components/Table/RefTable",
            name: "RefTable",
            meta: {
              title: "RefTable"
            }
          }
        ]
      },
      {
        path: "editor-demo",
        component: "##",
        redirect: "/components/editor-demo/editor",
        name: "EditorDemo",
        meta: {
          title: "router.editor",
          alwaysShow: true
        },
        children: [
          {
            path: "editor",
            component: "views/Components/Editor/Editor",
            name: "Editor",
            meta: {
              title: "router.richText"
            }
          }
        ]
      },
      {
        path: "search",
        component: "views/Components/Search",
        name: "Search",
        meta: {
          title: "router.search"
        }
      },
      {
        path: "descriptions",
        component: "views/Components/Descriptions",
        name: "Descriptions",
        meta: {
          title: "router.descriptions"
        }
      },
      {
        path: "image-viewer",
        component: "views/Components/ImageViewer",
        name: "ImageViewer",
        meta: {
          title: "router.imageViewer"
        }
      },
      {
        path: "dialog",
        component: "views/Components/Dialog",
        name: "Dialog",
        meta: {
          title: "router.dialog"
        }
      },
      {
        path: "icon",
        component: "views/Components/Icon",
        name: "Icon",
        meta: {
          title: "router.icon"
        }
      },
      {
        path: "echart",
        component: "views/Components/Echart",
        name: "Echart",
        meta: {
          title: "router.echart"
        }
      },
      {
        path: "count-to",
        component: "views/Components/CountTo",
        name: "CountTo",
        meta: {
          title: "router.countTo"
        }
      },
      {
        path: "qrcode",
        component: "views/Components/Qrcode",
        name: "Qrcode",
        meta: {
          title: "router.qrcode"
        }
      },
      {
        path: "highlight",
        component: "views/Components/Highlight",
        name: "Highlight",
        meta: {
          title: "router.highlight"
        }
      },
      {
        path: "infotip",
        component: "views/Components/Infotip",
        name: "Infotip",
        meta: {
          title: "router.infotip"
        }
      },
      {
        path: "input-password",
        component: "views/Components/InputPassword",
        name: "InputPassword",
        meta: {
          title: "router.inputPassword"
        }
      },
      {
        path: "sticky",
        component: "views/Components/Sticky",
        name: "Sticky",
        meta: {
          title: "router.sticky"
        }
      }
    ]
  },
  {
    path: "/hooks",
    component: "#",
    redirect: "/hooks/useWatermark",
    name: "Hooks",
    meta: {
      title: "hooks",
      icon: "ic:outline-webhook",
      alwaysShow: true
    },
    children: [
      {
        path: "useWatermark",
        component: "views/hooks/useWatermark",
        name: "UseWatermark",
        meta: {
          title: "useWatermark"
        }
      },
      {
        path: "useCrudSchemas",
        component: "views/hooks/useCrudSchemas",
        name: "UseCrudSchemas",
        meta: {
          title: "useCrudSchemas"
        }
      }
    ]
  },
  {
    path: "/level",
    component: "#",
    redirect: "/level/menu1/menu1-1/menu1-1-1",
    name: "Level",
    meta: {
      title: "router.level",
      icon: "carbon:skill-level-advanced"
    },
    children: [
      {
        path: "menu1",
        name: "Menu1",
        component: "##",
        redirect: "/level/menu1/menu1-1/menu1-1-1",
        meta: {
          title: "router.menu1"
        },
        children: [
          {
            path: "menu1-1",
            name: "Menu11",
            component: "##",
            redirect: "/level/menu1/menu1-1/menu1-1-1",
            meta: {
              title: "router.menu11",
              alwaysShow: true
            },
            children: [
              {
                path: "menu1-1-1",
                name: "Menu111",
                component: "views/Level/Menu111",
                meta: {
                  title: "router.menu111"
                }
              }
            ]
          },
          {
            path: "menu1-2",
            name: "Menu12",
            component: "views/Level/Menu12",
            meta: {
              title: "router.menu12"
            }
          }
        ]
      },
      {
        path: "menu2",
        name: "Menu2Demo",
        component: "views/Level/Menu2",
        meta: {
          title: "router.menu2"
        }
      }
    ]
  },
  {
    path: "/example",
    component: "#",
    redirect: "/example/example-dialog",
    name: "Example",
    meta: {
      title: "router.example",
      icon: "ep:management",
      alwaysShow: true
    },
    children: [
      {
        path: "example-dialog",
        component: "views/Example/Dialog/ExampleDialog",
        name: "ExampleDialog",
        meta: {
          title: "router.exampleDialog"
        }
      },
      {
        path: "example-page",
        component: "views/Example/Page/ExamplePage",
        name: "ExamplePage",
        meta: {
          title: "router.examplePage"
        }
      },
      {
        path: "example-add",
        component: "views/Example/Page/ExampleAdd",
        name: "ExampleAdd",
        meta: {
          title: "router.exampleAdd",
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: "/example/example-page"
        }
      },
      {
        path: "example-edit",
        component: "views/Example/Page/ExampleEdit",
        name: "ExampleEdit",
        meta: {
          title: "router.exampleEdit",
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: "/example/example-page"
        }
      },
      {
        path: "example-detail",
        component: "views/Example/Page/ExampleDetail",
        name: "ExampleDetail",
        meta: {
          title: "router.exampleDetail",
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: "/example/example-page"
        }
      }
    ]
  },
  {
    path: "/error",
    component: "#",
    redirect: "/error/404",
    name: "Error",
    meta: {
      title: "router.errorPage",
      icon: "ci:error",
      alwaysShow: true
    },
    children: [
      {
        path: "404-demo",
        component: "views/Error/404",
        name: "404Demo",
        meta: {
          title: "404"
        }
      },
      {
        path: "403-demo",
        component: "views/Error/403",
        name: "403Demo",
        meta: {
          title: "403"
        }
      },
      {
        path: "500-demo",
        component: "views/Error/500",
        name: "500Demo",
        meta: {
          title: "500"
        }
      }
    ]
  }
];
var testList = [
  "/dashboard",
  "/dashboard/analysis",
  "/dashboard/workplace",
  "external-link",
  "https://element-plus-admin-doc.cn/",
  "/guide",
  "/guide/index",
  "/components",
  "/components/form",
  "/components/form/default-form",
  "/components/form/use-form",
  "/components/form/ref-form",
  "/components/table",
  "/components/table/default-table",
  "/components/table/use-table",
  "/components/table/ref-table",
  "/components/editor-demo",
  "/components/editor-demo/editor",
  "/components/search",
  "/components/descriptions",
  "/components/image-viewer",
  "/components/dialog",
  "/components/icon",
  "/components/echart",
  "/components/count-to",
  "/components/qrcode",
  "/components/highlight",
  "/components/infotip",
  "/Components/InputPassword",
  "/Components/Sticky",
  "/hooks",
  "/hooks/useWatermark",
  "/hooks/useCrudSchemas",
  "/level",
  "/level/menu1",
  "/level/menu1/menu1-1",
  "/level/menu1/menu1-1/menu1-1-1",
  "/level/menu1/menu1-2",
  "/level/menu2",
  "/example",
  "/example/example-dialog",
  "/example/example-page",
  "/example/example-add",
  "/example/example-edit",
  "/example/example-detail",
  "/error",
  "/error/404-demo",
  "/error/403-demo",
  "/error/500-demo"
];
var role_default = [
  // 列表接口
  {
    url: "/role/list",
    method: "get",
    timeout,
    response: ({ query }) => {
      const { roleName } = query;
      return {
        code: result_code,
        data: roleName === "admin" ? adminList : testList
      };
    }
  }
];
export {
  role_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9yb2xlL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkQ6XFxcXGFcdTVCNjZcdTRFNjBcXFxcMS5cdTVCNjZcdTRFNjBcdTk4NzlcdTc2RUVcXFxcNC5cdTVCNjZcdTRFNjBcdThCQjBcdTVGNTVcXFxcbW9ja1xcXFxyb2xlXFxcXGluZGV4LnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXGFcdTVCNjZcdTRFNjBcXFxcMS5cdTVCNjZcdTRFNjBcdTk4NzlcdTc2RUVcXFxcNC5cdTVCNjZcdTRFNjBcdThCQjBcdTVGNTVcXFxcbW9ja1xcXFxyb2xlXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9hJUU1JUFEJUE2JUU0JUI5JUEwLzEuJUU1JUFEJUE2JUU0JUI5JUEwJUU5JUExJUI5JUU3JTlCJUFFLzQuJUU1JUFEJUE2JUU0JUI5JUEwJUU4JUFFJUIwJUU1JUJEJTk1L21vY2svcm9sZS9pbmRleC50c1wiO2ltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0AvY29uZmlnL2F4aW9zL2NvbmZpZydcclxuaW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcblxyXG5jb25zdCB7IHJlc3VsdF9jb2RlIH0gPSBjb25maWdcclxuXHJcbmNvbnN0IHRpbWVvdXQgPSAxMDAwXHJcblxyXG5jb25zdCBhZG1pbkxpc3QgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy9kYXNoYm9hcmQnLFxyXG4gICAgY29tcG9uZW50OiAnIycsXHJcbiAgICByZWRpcmVjdDogJy9kYXNoYm9hcmQvYW5hbHlzaXMnLFxyXG4gICAgbmFtZTogJ0Rhc2hib2FyZCcsXHJcbiAgICBtZXRhOiB7XHJcbiAgICAgIHRpdGxlOiAncm91dGVyLmRhc2hib2FyZCcsXHJcbiAgICAgIGljb246ICdhbnQtZGVzaWduOmRhc2hib2FyZC1maWxsZWQnLFxyXG4gICAgICBhbHdheXNTaG93OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdhbmFseXNpcycsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRGFzaGJvYXJkL0FuYWx5c2lzJyxcclxuICAgICAgICBuYW1lOiAnQW5hbHlzaXMnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmFuYWx5c2lzJyxcclxuICAgICAgICAgIG5vQ2FjaGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnd29ya3BsYWNlJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9EYXNoYm9hcmQvV29ya3BsYWNlJyxcclxuICAgICAgICBuYW1lOiAnV29ya3BsYWNlJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci53b3JrcGxhY2UnLFxyXG4gICAgICAgICAgbm9DYWNoZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9leHRlcm5hbC1saW5rJyxcclxuICAgIGNvbXBvbmVudDogJyMnLFxyXG4gICAgbWV0YToge30sXHJcbiAgICBuYW1lOiAnRXh0ZXJuYWxMaW5rJyxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9lbGVtZW50LXBsdXMtYWRtaW4tZG9jLmNuLycsXHJcbiAgICAgICAgbmFtZTogJ0RvY3VtZW50TGluaycsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICdyb3V0ZXIuZG9jdW1lbnQnLFxyXG4gICAgICAgICAgaWNvbjogJ2NsYXJpdHk6ZG9jdW1lbnQtc29saWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2d1aWRlJyxcclxuICAgIGNvbXBvbmVudDogJyMnLFxyXG4gICAgbmFtZTogJ0d1aWRlJyxcclxuICAgIG1ldGE6IHt9LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdpbmRleCcsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvR3VpZGUvR3VpZGUnLFxyXG4gICAgICAgIG5hbWU6ICdHdWlkZURlbW8nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmd1aWRlJyxcclxuICAgICAgICAgIGljb246ICdjaWI6dGVsZWdyYW0tcGxhbmUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2NvbXBvbmVudHMnLFxyXG4gICAgY29tcG9uZW50OiAnIycsXHJcbiAgICByZWRpcmVjdDogJy9jb21wb25lbnRzL2Zvcm0vZGVmYXVsdC1mb3JtJyxcclxuICAgIG5hbWU6ICdDb21wb25lbnRzRGVtbycsXHJcbiAgICBtZXRhOiB7XHJcbiAgICAgIHRpdGxlOiAncm91dGVyLmNvbXBvbmVudCcsXHJcbiAgICAgIGljb246ICdieDpieHMtY29tcG9uZW50JyxcclxuICAgICAgYWx3YXlzU2hvdzogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZm9ybScsXHJcbiAgICAgICAgY29tcG9uZW50OiAnIyMnLFxyXG4gICAgICAgIG5hbWU6ICdGb3JtJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5mb3JtJyxcclxuICAgICAgICAgIGFsd2F5c1Nob3c6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdkZWZhdWx0LWZvcm0nLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL0Zvcm0vRGVmYXVsdEZvcm0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVmYXVsdEZvcm0nLFxyXG4gICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdyb3V0ZXIuZGVmYXVsdEZvcm0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICd1c2UtZm9ybScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvRm9ybS9Vc2VGb3JtRGVtbycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdVc2VGb3JtJyxcclxuICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVXNlRm9ybSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3JlZi1mb3JtJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9Gb3JtL1JlZkZvcm0nLFxyXG4gICAgICAgICAgICBuYW1lOiAnUmVmRm9ybScsXHJcbiAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ1JlZkZvcm0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGFibGUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogJyMjJyxcclxuICAgICAgICByZWRpcmVjdDogJy9jb21wb25lbnRzL3RhYmxlL2RlZmF1bHQtdGFibGUnLFxyXG4gICAgICAgIG5hbWU6ICdUYWJsZURlbW8nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLnRhYmxlJyxcclxuICAgICAgICAgIGFsd2F5c1Nob3c6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdkZWZhdWx0LXRhYmxlJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9UYWJsZS9EZWZhdWx0VGFibGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnRGVmYXVsdFRhYmxlJyxcclxuICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAncm91dGVyLmRlZmF1bHRUYWJsZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3VzZS10YWJsZScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvVGFibGUvVXNlVGFibGVEZW1vJyxcclxuICAgICAgICAgICAgbmFtZTogJ1VzZVRhYmxlJyxcclxuICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVXNlVGFibGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdyZWYtdGFibGUnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL1RhYmxlL1JlZlRhYmxlJyxcclxuICAgICAgICAgICAgbmFtZTogJ1JlZlRhYmxlJyxcclxuICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnUmVmVGFibGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZWRpdG9yLWRlbW8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJyMjJyxcclxuICAgICAgICByZWRpcmVjdDogJy9jb21wb25lbnRzL2VkaXRvci1kZW1vL2VkaXRvcicsXHJcbiAgICAgICAgbmFtZTogJ0VkaXRvckRlbW8nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmVkaXRvcicsXHJcbiAgICAgICAgICBhbHdheXNTaG93OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnZWRpdG9yJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9FZGl0b3IvRWRpdG9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ0VkaXRvcicsXHJcbiAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ3JvdXRlci5yaWNoVGV4dCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdzZWFyY2gnLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvU2VhcmNoJyxcclxuICAgICAgICBuYW1lOiAnU2VhcmNoJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5zZWFyY2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2Rlc2NyaXB0aW9ucycsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9EZXNjcmlwdGlvbnMnLFxyXG4gICAgICAgIG5hbWU6ICdEZXNjcmlwdGlvbnMnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmRlc2NyaXB0aW9ucydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaW1hZ2Utdmlld2VyJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL0ltYWdlVmlld2VyJyxcclxuICAgICAgICBuYW1lOiAnSW1hZ2VWaWV3ZXInLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmltYWdlVmlld2VyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkaWFsb2cnLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvRGlhbG9nJyxcclxuICAgICAgICBuYW1lOiAnRGlhbG9nJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5kaWFsb2cnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2ljb24nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvSWNvbicsXHJcbiAgICAgICAgbmFtZTogJ0ljb24nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmljb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2VjaGFydCcsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9FY2hhcnQnLFxyXG4gICAgICAgIG5hbWU6ICdFY2hhcnQnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmVjaGFydCdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY291bnQtdG8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0NvbXBvbmVudHMvQ291bnRUbycsXHJcbiAgICAgICAgbmFtZTogJ0NvdW50VG8nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmNvdW50VG8nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3FyY29kZScsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9RcmNvZGUnLFxyXG4gICAgICAgIG5hbWU6ICdRcmNvZGUnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLnFyY29kZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaGlnaGxpZ2h0JyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL0hpZ2hsaWdodCcsXHJcbiAgICAgICAgbmFtZTogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICdyb3V0ZXIuaGlnaGxpZ2h0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdpbmZvdGlwJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL0luZm90aXAnLFxyXG4gICAgICAgIG5hbWU6ICdJbmZvdGlwJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5pbmZvdGlwJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdpbnB1dC1wYXNzd29yZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvQ29tcG9uZW50cy9JbnB1dFBhc3N3b3JkJyxcclxuICAgICAgICBuYW1lOiAnSW5wdXRQYXNzd29yZCcsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICdyb3V0ZXIuaW5wdXRQYXNzd29yZCdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnc3RpY2t5JyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9Db21wb25lbnRzL1N0aWNreScsXHJcbiAgICAgICAgbmFtZTogJ1N0aWNreScsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICdyb3V0ZXIuc3RpY2t5J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9ob29rcycsXHJcbiAgICBjb21wb25lbnQ6ICcjJyxcclxuICAgIHJlZGlyZWN0OiAnL2hvb2tzL3VzZVdhdGVybWFyaycsXHJcbiAgICBuYW1lOiAnSG9va3MnLFxyXG4gICAgbWV0YToge1xyXG4gICAgICB0aXRsZTogJ2hvb2tzJyxcclxuICAgICAgaWNvbjogJ2ljOm91dGxpbmUtd2ViaG9vaycsXHJcbiAgICAgIGFsd2F5c1Nob3c6IHRydWVcclxuICAgIH0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3VzZVdhdGVybWFyaycsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvaG9va3MvdXNlV2F0ZXJtYXJrJyxcclxuICAgICAgICBuYW1lOiAnVXNlV2F0ZXJtYXJrJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3VzZVdhdGVybWFyaydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndXNlQ3J1ZFNjaGVtYXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL2hvb2tzL3VzZUNydWRTY2hlbWFzJyxcclxuICAgICAgICBuYW1lOiAnVXNlQ3J1ZFNjaGVtYXMnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAndXNlQ3J1ZFNjaGVtYXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2xldmVsJyxcclxuICAgIGNvbXBvbmVudDogJyMnLFxyXG4gICAgcmVkaXJlY3Q6ICcvbGV2ZWwvbWVudTEvbWVudTEtMS9tZW51MS0xLTEnLFxyXG4gICAgbmFtZTogJ0xldmVsJyxcclxuICAgIG1ldGE6IHtcclxuICAgICAgdGl0bGU6ICdyb3V0ZXIubGV2ZWwnLFxyXG4gICAgICBpY29uOiAnY2FyYm9uOnNraWxsLWxldmVsLWFkdmFuY2VkJ1xyXG4gICAgfSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWVudTEnLFxyXG4gICAgICAgIG5hbWU6ICdNZW51MScsXHJcbiAgICAgICAgY29tcG9uZW50OiAnIyMnLFxyXG4gICAgICAgIHJlZGlyZWN0OiAnL2xldmVsL21lbnUxL21lbnUxLTEvbWVudTEtMS0xJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5tZW51MSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdtZW51MS0xJyxcclxuICAgICAgICAgICAgbmFtZTogJ01lbnUxMScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJyMjJyxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6ICcvbGV2ZWwvbWVudTEvbWVudTEtMS9tZW51MS0xLTEnLFxyXG4gICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdyb3V0ZXIubWVudTExJyxcclxuICAgICAgICAgICAgICBhbHdheXNTaG93OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ21lbnUxLTEtMScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWVudTExMScsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9MZXZlbC9NZW51MTExJyxcclxuICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdyb3V0ZXIubWVudTExMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdtZW51MS0yJyxcclxuICAgICAgICAgICAgbmFtZTogJ01lbnUxMicsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0xldmVsL01lbnUxMicsXHJcbiAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ3JvdXRlci5tZW51MTInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWVudTInLFxyXG4gICAgICAgIG5hbWU6ICdNZW51MkRlbW8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0xldmVsL01lbnUyJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5tZW51MidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZXhhbXBsZScsXHJcbiAgICBjb21wb25lbnQ6ICcjJyxcclxuICAgIHJlZGlyZWN0OiAnL2V4YW1wbGUvZXhhbXBsZS1kaWFsb2cnLFxyXG4gICAgbmFtZTogJ0V4YW1wbGUnLFxyXG4gICAgbWV0YToge1xyXG4gICAgICB0aXRsZTogJ3JvdXRlci5leGFtcGxlJyxcclxuICAgICAgaWNvbjogJ2VwOm1hbmFnZW1lbnQnLFxyXG4gICAgICBhbHdheXNTaG93OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdleGFtcGxlLWRpYWxvZycsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRXhhbXBsZS9EaWFsb2cvRXhhbXBsZURpYWxvZycsXHJcbiAgICAgICAgbmFtZTogJ0V4YW1wbGVEaWFsb2cnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmV4YW1wbGVEaWFsb2cnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2V4YW1wbGUtcGFnZScsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRXhhbXBsZS9QYWdlL0V4YW1wbGVQYWdlJyxcclxuICAgICAgICBuYW1lOiAnRXhhbXBsZVBhZ2UnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmV4YW1wbGVQYWdlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdleGFtcGxlLWFkZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRXhhbXBsZS9QYWdlL0V4YW1wbGVBZGQnLFxyXG4gICAgICAgIG5hbWU6ICdFeGFtcGxlQWRkJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ3JvdXRlci5leGFtcGxlQWRkJyxcclxuICAgICAgICAgIG5vVGFnc1ZpZXc6IHRydWUsXHJcbiAgICAgICAgICBub0NhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgc2hvd01haW5Sb3V0ZTogdHJ1ZSxcclxuICAgICAgICAgIGFjdGl2ZU1lbnU6ICcvZXhhbXBsZS9leGFtcGxlLXBhZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2V4YW1wbGUtZWRpdCcsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRXhhbXBsZS9QYWdlL0V4YW1wbGVFZGl0JyxcclxuICAgICAgICBuYW1lOiAnRXhhbXBsZUVkaXQnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmV4YW1wbGVFZGl0JyxcclxuICAgICAgICAgIG5vVGFnc1ZpZXc6IHRydWUsXHJcbiAgICAgICAgICBub0NhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgc2hvd01haW5Sb3V0ZTogdHJ1ZSxcclxuICAgICAgICAgIGFjdGl2ZU1lbnU6ICcvZXhhbXBsZS9leGFtcGxlLXBhZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2V4YW1wbGUtZGV0YWlsJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9FeGFtcGxlL1BhZ2UvRXhhbXBsZURldGFpbCcsXHJcbiAgICAgICAgbmFtZTogJ0V4YW1wbGVEZXRhaWwnLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAncm91dGVyLmV4YW1wbGVEZXRhaWwnLFxyXG4gICAgICAgICAgbm9UYWdzVmlldzogdHJ1ZSxcclxuICAgICAgICAgIG5vQ2FjaGU6IHRydWUsXHJcbiAgICAgICAgICBoaWRkZW46IHRydWUsXHJcbiAgICAgICAgICBzaG93TWFpblJvdXRlOiB0cnVlLFxyXG4gICAgICAgICAgYWN0aXZlTWVudTogJy9leGFtcGxlL2V4YW1wbGUtcGFnZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZXJyb3InLFxyXG4gICAgY29tcG9uZW50OiAnIycsXHJcbiAgICByZWRpcmVjdDogJy9lcnJvci80MDQnLFxyXG4gICAgbmFtZTogJ0Vycm9yJyxcclxuICAgIG1ldGE6IHtcclxuICAgICAgdGl0bGU6ICdyb3V0ZXIuZXJyb3JQYWdlJyxcclxuICAgICAgaWNvbjogJ2NpOmVycm9yJyxcclxuICAgICAgYWx3YXlzU2hvdzogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnNDA0LWRlbW8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ3ZpZXdzL0Vycm9yLzQwNCcsXHJcbiAgICAgICAgbmFtZTogJzQwNERlbW8nLFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAnNDA0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICc0MDMtZGVtbycsXHJcbiAgICAgICAgY29tcG9uZW50OiAndmlld3MvRXJyb3IvNDAzJyxcclxuICAgICAgICBuYW1lOiAnNDAzRGVtbycsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICc0MDMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJzUwMC1kZW1vJyxcclxuICAgICAgICBjb21wb25lbnQ6ICd2aWV3cy9FcnJvci81MDAnLFxyXG4gICAgICAgIG5hbWU6ICc1MDBEZW1vJyxcclxuICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogJzUwMCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IHRlc3RMaXN0OiBzdHJpbmdbXSA9IFtcclxuICAnL2Rhc2hib2FyZCcsXHJcbiAgJy9kYXNoYm9hcmQvYW5hbHlzaXMnLFxyXG4gICcvZGFzaGJvYXJkL3dvcmtwbGFjZScsXHJcbiAgJ2V4dGVybmFsLWxpbmsnLFxyXG4gICdodHRwczovL2VsZW1lbnQtcGx1cy1hZG1pbi1kb2MuY24vJyxcclxuICAnL2d1aWRlJyxcclxuICAnL2d1aWRlL2luZGV4JyxcclxuICAnL2NvbXBvbmVudHMnLFxyXG4gICcvY29tcG9uZW50cy9mb3JtJyxcclxuICAnL2NvbXBvbmVudHMvZm9ybS9kZWZhdWx0LWZvcm0nLFxyXG4gICcvY29tcG9uZW50cy9mb3JtL3VzZS1mb3JtJyxcclxuICAnL2NvbXBvbmVudHMvZm9ybS9yZWYtZm9ybScsXHJcbiAgJy9jb21wb25lbnRzL3RhYmxlJyxcclxuICAnL2NvbXBvbmVudHMvdGFibGUvZGVmYXVsdC10YWJsZScsXHJcbiAgJy9jb21wb25lbnRzL3RhYmxlL3VzZS10YWJsZScsXHJcbiAgJy9jb21wb25lbnRzL3RhYmxlL3JlZi10YWJsZScsXHJcbiAgJy9jb21wb25lbnRzL2VkaXRvci1kZW1vJyxcclxuICAnL2NvbXBvbmVudHMvZWRpdG9yLWRlbW8vZWRpdG9yJyxcclxuICAnL2NvbXBvbmVudHMvc2VhcmNoJyxcclxuICAnL2NvbXBvbmVudHMvZGVzY3JpcHRpb25zJyxcclxuICAnL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyJyxcclxuICAnL2NvbXBvbmVudHMvZGlhbG9nJyxcclxuICAnL2NvbXBvbmVudHMvaWNvbicsXHJcbiAgJy9jb21wb25lbnRzL2VjaGFydCcsXHJcbiAgJy9jb21wb25lbnRzL2NvdW50LXRvJyxcclxuICAnL2NvbXBvbmVudHMvcXJjb2RlJyxcclxuICAnL2NvbXBvbmVudHMvaGlnaGxpZ2h0JyxcclxuICAnL2NvbXBvbmVudHMvaW5mb3RpcCcsXHJcbiAgJy9Db21wb25lbnRzL0lucHV0UGFzc3dvcmQnLFxyXG4gICcvQ29tcG9uZW50cy9TdGlja3knLFxyXG4gICcvaG9va3MnLFxyXG4gICcvaG9va3MvdXNlV2F0ZXJtYXJrJyxcclxuICAnL2hvb2tzL3VzZUNydWRTY2hlbWFzJyxcclxuICAnL2xldmVsJyxcclxuICAnL2xldmVsL21lbnUxJyxcclxuICAnL2xldmVsL21lbnUxL21lbnUxLTEnLFxyXG4gICcvbGV2ZWwvbWVudTEvbWVudTEtMS9tZW51MS0xLTEnLFxyXG4gICcvbGV2ZWwvbWVudTEvbWVudTEtMicsXHJcbiAgJy9sZXZlbC9tZW51MicsXHJcbiAgJy9leGFtcGxlJyxcclxuICAnL2V4YW1wbGUvZXhhbXBsZS1kaWFsb2cnLFxyXG4gICcvZXhhbXBsZS9leGFtcGxlLXBhZ2UnLFxyXG4gICcvZXhhbXBsZS9leGFtcGxlLWFkZCcsXHJcbiAgJy9leGFtcGxlL2V4YW1wbGUtZWRpdCcsXHJcbiAgJy9leGFtcGxlL2V4YW1wbGUtZGV0YWlsJyxcclxuICAnL2Vycm9yJyxcclxuICAnL2Vycm9yLzQwNC1kZW1vJyxcclxuICAnL2Vycm9yLzQwMy1kZW1vJyxcclxuICAnL2Vycm9yLzUwMC1kZW1vJ1xyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgLy8gXHU1MjE3XHU4ODY4XHU2M0E1XHU1M0UzXHJcbiAge1xyXG4gICAgdXJsOiAnL3JvbGUvbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgdGltZW91dCxcclxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgcm9sZU5hbWUgfSA9IHF1ZXJ5XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogcmVzdWx0X2NvZGUsXHJcbiAgICAgICAgZGF0YTogcm9sZU5hbWUgPT09ICdhZG1pbicgPyBhZG1pbkxpc3QgOiB0ZXN0TGlzdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5dIGFzIE1vY2tNZXRob2RbXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsY0FBYztBQUcvVSxJQUFNLEVBQUUsWUFBWSxJQUFJO0FBRXhCLElBQU0sVUFBVTtBQUVoQixJQUFNLFlBQVk7QUFBQSxFQUNoQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsVUFDSixPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsVUFDSixPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLE1BQU0sQ0FBQztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sTUFBTSxDQUFDO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxVQUNQLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLGNBQ0osT0FBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLGNBQ0osT0FBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLGNBQ0osT0FBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsVUFDSixPQUFPO0FBQUEsVUFDUCxZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxjQUNKLE9BQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxjQUNKLE9BQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxjQUNKLE9BQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixXQUFXO0FBQUEsWUFDWCxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsY0FDSixPQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87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LE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsZUFBZTtBQUFBLFVBQ2YsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsZUFBZTtBQUFBLFVBQ2YsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsZUFBZTtBQUFBLFVBQ2YsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFNLFdBQXFCO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUVBLElBQU8sZUFBUTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVUsQ0FBQyxFQUFFLE1BQU0sTUFBTTtBQUN2QixZQUFNLEVBQUUsU0FBUyxJQUFJO0FBQ3JCLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sYUFBYSxVQUFVLFlBQVk7QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
