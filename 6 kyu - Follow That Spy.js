const findRoutes = (routes) => {
    const tracked = [];
    
    routes.map((group) => {
      if (!routes.find((point) => point[1] === group[0])) {
        tracked.push(group[0]);
        tracked.push(group[1]);
      }
      
    }).map(() => {
      routes.map((group) => {
        group[0] === tracked[tracked.length - 1] && tracked.push(group[1]);
      });
    });
    
    return tracked.join(', ');
  }