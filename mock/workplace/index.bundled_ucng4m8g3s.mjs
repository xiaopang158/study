// mock/workplace/index.ts
import { config } from "@/config/axios/config";
var { result_code } = config;
var timeout = 1e3;
var workplace_default = [
  // 获取统计
  {
    url: "/workplace/total",
    method: "get",
    timeout,
    response: () => {
      return {
        code: result_code,
        data: {
          project: 40,
          access: 2340,
          todo: 10
        }
      };
    }
  },
  // 获取项目
  {
    url: "/workplace/project",
    method: "get",
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          {
            name: "Github",
            icon: "akar-icons:github-fill",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          },
          {
            name: "Vue",
            icon: "logos:vue",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          },
          {
            name: "Angular",
            icon: "logos:angular-icon",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          },
          {
            name: "React",
            icon: "logos:react",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          },
          {
            name: "Webpack",
            icon: "logos:webpack",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          },
          {
            name: "Vite",
            icon: "vscode-icons:file-type-vite",
            message: "workplace.introduction",
            personal: "Archer",
            time: /* @__PURE__ */ new Date()
          }
        ]
      };
    }
  },
  // 获取动态
  {
    url: "/workplace/dynamic",
    method: "get",
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          },
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          },
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          },
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          },
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          },
          {
            keys: ["workplace.push", "Github"],
            time: /* @__PURE__ */ new Date()
          }
        ]
      };
    }
  },
  // 获取团队信息
  {
    url: "/workplace/team",
    method: "get",
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          {
            name: "Github",
            icon: "akar-icons:github-fill"
          },
          {
            name: "Vue",
            icon: "logos:vue"
          },
          {
            name: "Angular",
            icon: "logos:angular-icon"
          },
          {
            name: "React",
            icon: "logos:react"
          },
          {
            name: "Webpack",
            icon: "logos:webpack"
          },
          {
            name: "Vite",
            icon: "vscode-icons:file-type-vite"
          }
        ]
      };
    }
  },
  // 获取指数
  {
    url: "/workplace/radar",
    method: "get",
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          { name: "workplace.quote", max: 65, personal: 42, team: 50 },
          { name: "workplace.contribution", max: 160, personal: 30, team: 140 },
          { name: "workplace.hot", max: 300, personal: 20, team: 28 },
          { name: "workplace.yield", max: 130, personal: 35, team: 35 },
          { name: "workplace.follow", max: 100, personal: 80, team: 90 }
        ]
      };
    }
  }
];
export {
  workplace_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay93b3JrcGxhY2UvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcYVx1NUI2Nlx1NEU2MFxcXFwxLlx1NUI2Nlx1NEU2MFx1OTg3OVx1NzZFRVxcXFw0Llx1NUI2Nlx1NEU2MFx1OEJCMFx1NUY1NVxcXFxtb2NrXFxcXHdvcmtwbGFjZVxcXFxpbmRleC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJEOlxcXFxhXHU1QjY2XHU0RTYwXFxcXDEuXHU1QjY2XHU0RTYwXHU5ODc5XHU3NkVFXFxcXDQuXHU1QjY2XHU0RTYwXHU4QkIwXHU1RjU1XFxcXG1vY2tcXFxcd29ya3BsYWNlXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9hJUU1JUFEJUE2JUU0JUI5JUEwLzEuJUU1JUFEJUE2JUU0JUI5JUEwJUU5JUExJUI5JUU3JTlCJUFFLzQuJUU1JUFEJUE2JUU0JUI5JUEwJUU4JUFFJUIwJUU1JUJEJTk1L21vY2svd29ya3BsYWNlL2luZGV4LnRzXCI7aW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQC9jb25maWcvYXhpb3MvY29uZmlnJ1xyXG5pbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcclxuXHJcbmNvbnN0IHsgcmVzdWx0X2NvZGUgfSA9IGNvbmZpZ1xyXG5cclxuY29uc3QgdGltZW91dCA9IDEwMDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAvLyBcdTgzQjdcdTUzRDZcdTdFREZcdThCQTFcclxuICB7XHJcbiAgICB1cmw6ICcvd29ya3BsYWNlL3RvdGFsJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB0aW1lb3V0LFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiByZXN1bHRfY29kZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm9qZWN0OiA0MCxcclxuICAgICAgICAgIGFjY2VzczogMjM0MCxcclxuICAgICAgICAgIHRvZG86IDEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBcdTgzQjdcdTUzRDZcdTk4NzlcdTc2RUVcclxuICB7XHJcbiAgICB1cmw6ICcvd29ya3BsYWNlL3Byb2plY3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHRpbWVvdXQsXHJcbiAgICByZXNwb25zZTogKCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IHJlc3VsdF9jb2RlLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0dpdGh1YicsXHJcbiAgICAgICAgICAgIGljb246ICdha2FyLWljb25zOmdpdGh1Yi1maWxsJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ3dvcmtwbGFjZS5pbnRyb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICBwZXJzb25hbDogJ0FyY2hlcicsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdWdWUnLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9nb3M6dnVlJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ3dvcmtwbGFjZS5pbnRyb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICBwZXJzb25hbDogJ0FyY2hlcicsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmd1bGFyJyxcclxuICAgICAgICAgICAgaWNvbjogJ2xvZ29zOmFuZ3VsYXItaWNvbicsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICd3b3JrcGxhY2UuaW50cm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgcGVyc29uYWw6ICdBcmNoZXInLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUmVhY3QnLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9nb3M6cmVhY3QnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnd29ya3BsYWNlLmludHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgIHBlcnNvbmFsOiAnQXJjaGVyJyxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1dlYnBhY2snLFxyXG4gICAgICAgICAgICBpY29uOiAnbG9nb3M6d2VicGFjaycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICd3b3JrcGxhY2UuaW50cm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgcGVyc29uYWw6ICdBcmNoZXInLFxyXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVml0ZScsXHJcbiAgICAgICAgICAgIGljb246ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXZpdGUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnd29ya3BsYWNlLmludHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgIHBlcnNvbmFsOiAnQXJjaGVyJyxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU1MkE4XHU2MDAxXHJcbiAge1xyXG4gICAgdXJsOiAnL3dvcmtwbGFjZS9keW5hbWljJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB0aW1lb3V0LFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiByZXN1bHRfY29kZSxcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleXM6IFsnd29ya3BsYWNlLnB1c2gnLCAnR2l0aHViJ10sXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIC8vIFx1ODNCN1x1NTNENlx1NTZFMlx1OTYxRlx1NEZFMVx1NjA2RlxyXG4gIHtcclxuICAgIHVybDogJy93b3JrcGxhY2UvdGVhbScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgdGltZW91dCxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogcmVzdWx0X2NvZGUsXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR2l0aHViJyxcclxuICAgICAgICAgICAgaWNvbjogJ2FrYXItaWNvbnM6Z2l0aHViLWZpbGwnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVnVlJyxcclxuICAgICAgICAgICAgaWNvbjogJ2xvZ29zOnZ1ZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBbmd1bGFyJyxcclxuICAgICAgICAgICAgaWNvbjogJ2xvZ29zOmFuZ3VsYXItaWNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgICAgICAgIGljb246ICdsb2dvczpyZWFjdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdXZWJwYWNrJyxcclxuICAgICAgICAgICAgaWNvbjogJ2xvZ29zOndlYnBhY2snXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVml0ZScsXHJcbiAgICAgICAgICAgIGljb246ICd2c2NvZGUtaWNvbnM6ZmlsZS10eXBlLXZpdGUnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBcdTgzQjdcdTUzRDZcdTYzMDdcdTY1NzBcclxuICB7XHJcbiAgICB1cmw6ICcvd29ya3BsYWNlL3JhZGFyJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB0aW1lb3V0LFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiByZXN1bHRfY29kZSxcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICB7IG5hbWU6ICd3b3JrcGxhY2UucXVvdGUnLCBtYXg6IDY1LCBwZXJzb25hbDogNDIsIHRlYW06IDUwIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICd3b3JrcGxhY2UuY29udHJpYnV0aW9uJywgbWF4OiAxNjAsIHBlcnNvbmFsOiAzMCwgdGVhbTogMTQwIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICd3b3JrcGxhY2UuaG90JywgbWF4OiAzMDAsIHBlcnNvbmFsOiAyMCwgdGVhbTogMjggfSxcclxuICAgICAgICAgIHsgbmFtZTogJ3dvcmtwbGFjZS55aWVsZCcsIG1heDogMTMwLCBwZXJzb25hbDogMzUsIHRlYW06IDM1IH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICd3b3JrcGxhY2UuZm9sbG93JywgbWF4OiAxMDAsIHBlcnNvbmFsOiA4MCwgdGVhbTogOTAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXSBhcyBNb2NrTWV0aG9kW11cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VSxTQUFTLGNBQWM7QUFHOVYsSUFBTSxFQUFFLFlBQVksSUFBSTtBQUV4QixJQUFNLFVBQVU7QUFFaEIsSUFBTyxvQkFBUTtBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUjtB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
