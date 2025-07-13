
        document.getElementById('add-todo').addEventListener('click', function() {
            const input = document.getElementById('todo-input');
            const value = input.value.trim();
            if (value) {
                const li = document.createElement('li');
                li.textContent = value;
                const btn = document.createElement('button');
                btn.textContent = 'Remove';
                btn.className = 'remove-btn';
                btn.onclick = function() {
                    li.remove();
                };
                li.appendChild(btn);
                document.getElementById('todo-list').appendChild(li);
                input.value = '';
            }
        });
        document.getElementById('todo-input').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('add-todo').click();
            }
        });