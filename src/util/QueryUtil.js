const getQueryParameter = (param, queryParameters) => {
    //Get all query parameters, result: (?breadid=004&bedtime=soon)

    if (!queryParameters.includes(param)) {
      return null;
    }

    //Trim everything before the required parameter (breadid), result: (004&bedtime=soon)
    queryParameters = queryParameters.substring(queryParameters.indexOf(param)+param.length+1);

    //Trim everything after next "&", result: (004)
    if (queryParameters.includes('&')) {
      queryParameters = queryParameters.substring(0, queryParameters.indexOf('&'))
    }
    
    return queryParameters;
}

export default {
    getQueryParameter
}