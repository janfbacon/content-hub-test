function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // If the URI doesn't have a file extension, it's a folder or subpage
    if (!uri.includes('.')) {
        if (uri.endsWith('/')) {
            request.uri += 'index.html';
        } else {
            request.uri += '/index.html';
        }
    }
    
    return request;
}