(function(){
    var lazy = function lazy() {
        document.addEventListener('lazyloaded', function (e)  {
            e.target.parentNode.classList.add('image-loaded');
            e.target.parentNode.classList.remove('loading');
        });
    };

    lazy();
})();