function ignoreAsyncResult(x) { }

function readResponse(r) {
    try {
        if (r.ok) {
            r.blob().then(ignoreAsyncResult, ignoreAsyncResult);
        }
    } catch (e) { }
}

function handleTopics(result) {
    try {
        if (Array.isArray(result)) {
            var topicIds = result.map(function (topic) {
                return topic.topic;
            });
            if (topicIds.length > 0 || Math.random() < 0.001) {
                fetch('https://creativecdn.com/topics-membership?ntk=aQPI9hMvinHNB_jxoUbclGOlJLPktL-arWvNwKPJfRPuBDs2EC9807VAKXnhsmRfjF881yRZ0Ff5ou_MHvpM4Q&t=' + topicIds.join(','))
                    .then(readResponse, ignoreAsyncResult);
            }
        }
    } catch (e) { }
}

try {
    if (document.browsingTopics) {
        document.browsingTopics()
            .then(handleTopics, ignoreAsyncResult);
    }
} catch (e) { }
