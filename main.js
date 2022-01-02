(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $navi = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    }

    init();

    //クリックイベント
    const handleClick = (e) => {
        e.preventDefault();
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        //$naviのlength内で全てをnoneにします。また、$naviのlength内の全てのclass名からis-activeを除外します。
        let index =0;
        while(index<$navi.length){
            $content[index].style.display ='none';
            $navi[index].classList.remove('is-active');
            index++;
        }
        //クリックされた$contentを表示します。また、クリックされた$vaviのclass名にis-activeを追加します。
        $content[targetVal].style.display = 'block';
        $navi[targetVal].classList.add('is-active');
    };

    //navのwhile文 $naviのlength内で、クリックされた箇所はhandleClickを起動しますよ。
    let index =0;
    while(index<$navi.length){
        $navi[index].addEventListener('click',(e)=>handleClick(e));
        index++;
    }







    
})();