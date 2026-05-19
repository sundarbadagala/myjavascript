async function errorhandler(res) {
    try {
      const data = await res.json();
      return {
        status: res.status,
        statusText: res.statusText,
        data: data,
      };
    } catch (error) {
      return {
        status: res.status,
        statusText: res.statusText,
      };
    }
  }