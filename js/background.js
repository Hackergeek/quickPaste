/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */

function copyToClip(content, ) {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}


function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}


chrome.contextMenus.create({
    title: '快速替换github.com',
    contexts: ['selection', 'link'],
    onclick: function(params) {
        // 注意不能使用location.href，因为location是属于background的window对象
        if (!isEmpty(params.selectionText)) {
            params.selectionText = "git clone " + params.selectionText;
            copyToClip(params.selectionText.replace("github.com", "github.com.cnpmjs.org"));
        }
        if (!isEmpty(params.linkUrl)) {
            params.linkUrl = "git clone " + params.linkUrl;
            copyToClip(params.linkUrl.replace("github.com", "github.com.cnpmjs.org"));
        }

    }
});
