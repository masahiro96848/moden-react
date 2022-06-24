const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する。
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = ""

    // div生成
    const div = document.createElement('div');
    div.className = 'list-row';

    // liタグを生成
    const li = document.createElement('li');
    li.innerText = inputText;

    // button(完了)タグを生成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        alert('完了');
    })
    
    // button(削除)タグを生成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        alert('削除');
    })



    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    
    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(div);
    
}

// タスクを追加する処理
document.getElementById('add-button').addEventListener("click", () => onClickAdd());