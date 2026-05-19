import fetch from "node-fetch";

function ApiHandler(props) {
  const { options = {}, headers = {}, customheaders = () => {} } = { ...props };
  let responseCallback;
  let requestCallback;
  function optionshandler(api, method, reqBody) {
    const allOptions = {
      method,
      ...options,
      headers: {
        ...headers,
        ...customheaders(api, reqBody, method),
      },
    };
    return method === "GET"
      ? allOptions
      : { ...allOptions, body: JSON.stringify(reqBody) };
  }
  async function requesthandler(api, method, reqBody) {
    const options = optionshandler(api, method, reqBody);
    const newOptions = requestCallback ? requestCallback(options) : options;
    return await fetch(api, newOptions);
  }
  async function errorhandler(res) {
    try {
      const resData = await res.json();
      const data = {
        status: res.status,
        statusText: res.statusText,
        data: resData,
      };
      return responseCallback ? responseCallback(data, requestDetails) : data;
    } catch (error) {
      return {
        status: res.status,
        statusText: res.statusText,
      };
    }
  }

  return {
    config: (() => {
      return {
        request(callback) {
          requestCallback = callback;
        },
        response(callback) {
          responseCallback = callback;
        },
      };
    })(),
    async get(api, params = {}) {
      try {
        const queryApi = `${api}?${new URLSearchParams(params)}`;
        const res = await requesthandler(queryApi, "GET", {});
        return await errorhandler(res);
      } catch (error) {
        console.error("Get Error", error);
      }
    },
    async post(api, reqBody) {
      try {
        const res = await requesthandler(api, "POST", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.error("Post Error", error.message);
      }
    },
    async put(api, reqBody) {
      try {
        const res = await requesthandler(api, "PUT", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.error("Put Error", error);
      }
    },
    async patch(api, reqBody) {
      try {
        const res = await requesthandler(api, "PATCH", reqBody);
        return await errorhandler(res);
      } catch (error) {
        console.log("Patch Error", error.message);
      }
    },
    async delete(api, params = {}) {
      try {
        const queryApi = `${api}?${new URLSearchParams(params)}`;
        const res = await requesthandler(queryApi, "DELETE", {});
        return await errorhandler(res);
      } catch (error) {
        console.error("Delete Error", error);
      }
    },
  };
}

export default ApiHandler;
