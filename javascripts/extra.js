// 通过 class 设置不翻译的元素
translate.ignore.class.push('md-select','document-dates-plugin');
// 自定义术语库，纠正翻译结果（每行一个规则，前后用等号分割）
translate.nomenclature.append('chinese_simplified','english',`
    亮色模式=Light mode
    暗色模式=Dark mode
    自动模式 - 随系统主题色=Auto mode - system preference    
    前往仓库=Go to repo
    Markdown 技巧=Markdown tricks
    MkDocs 技巧=MkDocs tricks
    友情链接=Friendly link
    快讯=Newsflash
    仓库=repo
    邮箱=email
    特色=Feature
    添加i18n多语言=add i18n multilingual
`);
// translate.lifecycle.changeLanguage.push(function(to){
//     alert(to);
// });
// translate.listener.start();   // 开启动态内容监控，对变化部分自动翻译
translate.language.setLocal('chinese_simplified'); // 设置本地语种（如果不设置，会自动识别当前网页的文本语种）
translate.setAutoDiscriminateLocalLanguage();   // 设置首次使用时自动识别语种进行切换
translate.selectLanguageTag.show = false;       // 不显示 select 语言选择框
translate.service.use('client.edge');           // 设置机器翻译服务通道
translate.visual.webPageLoadTranslateBeforeHiddenText();
translate.execute();



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.md-select__link').forEach(link => {
        link.addEventListener('click', function(event) {
            // 阻止默认跳转或 href 执行
            event.preventDefault();

            // 取消当前元素的焦点
            this.blur();

            // 获取选中的语言
            const langCode = this.getAttribute('hreflang');
            const targetLang = translate.util.browserLanguage[langCode];
            if (!targetLang) {
                console.warn('不支持语言码:', langCode);
                return;
            }

            // 更新自定义语言部分：文档日期和提示内容
            if (window.ddPlugin && typeof ddPlugin.updateLanguage === 'function') {
                ddPlugin.updateLanguage(langCode);
            }

            // 更新翻译
            if (window.translate && typeof translate.changeLanguage === 'function') {
                translate.changeLanguage(targetLang);
            }
        });
    });
});