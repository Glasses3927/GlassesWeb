(function(window, document) {
    const toc = document.getElementById('toc');
    const selector = document.querySelector('.post-body'); // 処理対象セレクタ
    if (!toc || !selector) {
        return
    }
    const list = document.createElement('ul');
    list.className = 'toc-container';
    toc.appendChild(list);
  
    const headings = selector.querySelectorAll('h2, h3'); // 対象見出しタグ
    const order = [];
    const stack = [{level: 1, element: list}];
  
    // 事前処理
    headings.forEach((heading) => {
        const level = parseInt(heading.tagName.substring(1))
        order.push(level);
    });
  
    headings.forEach((heading, i) => {
        const level = parseInt(heading.tagName.substring(1));
        const next = order[i + 1];
        const li = document.createElement('li');
        const a = document.createElement('a');
        const id = 'toc-' + (i + 1);
        const ul = document.createElement('ul');
    
        // 目次要素の生成
        a.textContent = heading.textContent;
        a.href = `#${id}`;
        li.appendChild(a);
        if (level < next) {
            li.appendChild(ul);
        }
    
        // リンク先の生成
        heading.id = id;
    
        // 階層構造の生成
        let parent;
        do {
            parent = stack.pop();
        } while (parent.level >= level);
        parent.element.appendChild(li);
        stack.push(parent);
        stack.push({level: level, element: ul});
    });
}(window, document));