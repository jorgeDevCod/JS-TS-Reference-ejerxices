
var mode = 'js';

/* ── Helpers de sidebar ── */
function isMobile() { return window.innerWidth <= 768; }

function closeSidebar() {
    var ids = [ 'sb-js', 'sb-ts', 'sb-ex' ];
    for ( var i = 0; i < ids.length; i++ ) {
        var sb = document.getElementById( ids[ i ] );
        if ( sb ) sb.classList.remove( 'mobile-open' );
    }
    var ov = document.getElementById( 'sidebar-overlay' );
    if ( ov ) ov.classList.remove( 'active' );
}

function openSidebar( id ) {
    closeSidebar();
    var sb = document.getElementById( id );
    if ( !sb ) return;
    if ( isMobile() ) {
        sb.classList.add( 'mobile-open' );
        var ov = document.getElementById( 'sidebar-overlay' );
        if ( ov ) ov.classList.add( 'active' );
    }
}

function toggleSidebar() {
    var sbId = 'sb-' + mode;
    var sb = document.getElementById( sbId );
    if ( !sb ) return;
    if ( isMobile() ) {
        var isOpen = sb.classList.contains( 'mobile-open' );
        if ( isOpen ) {
            closeSidebar();
        } else {
            openSidebar( sbId );
        }
    } else {
        sb.classList.toggle( 'hidden' );
    }
}

function setActiveSidebar( id ) {
    /* En desktop muestra el sidebar correcto con display;
       en móvil lo mantiene oculto hasta que el usuario pulse ☰ */
    var ids = [ 'sb-js', 'sb-ts', 'sb-ex' ];
    for ( var i = 0; i < ids.length; i++ ) {
        var el = document.getElementById( ids[ i ] );
        if ( !el ) continue;
        if ( ids[ i ] === id ) {
            if ( !isMobile() ) {
                el.style.display = 'block'; /* desktop: visible */
                el.classList.remove( 'hidden' );
            } else {
                el.style.display = '';     /* móvil: dejar que CSS controle */
            }
        } else {
            el.style.display = 'none';
            el.classList.remove( 'mobile-open' );
        }
    }
}

function switchTab( m, btn ) {
    mode = m;
    closeSidebar();
    var tabs = document.querySelectorAll( '.main-tab' );
    for ( var i = 0; i < tabs.length; i++ ) { tabs[ i ].className = 'main-tab'; }
    btn.className = 'main-tab act-' + m;

    if ( m === 'js' ) {
        setActiveSidebar( 'sb-js' );
        show( 'arr-bas', document.querySelector( '#sb-js .s-item' ) );
    } else if ( m === 'ts' ) {
        setActiveSidebar( 'sb-ts' );
        show( 'ts-types', document.querySelector( '#sb-ts .s-item' ) );
    } else {
        setActiveSidebar( 'sb-ex' );
        showEx( 'ex-js', document.querySelector( '#sb-ex .s-item' ) );
    }
}

function show( id, el ) {
    var secs = document.querySelectorAll( '.sec' );
    for ( var i = 0; i < secs.length; i++ ) secs[ i ].classList.remove( 'active' );
    var t = document.getElementById( id );
    if ( t ) t.classList.add( 'active' );
    var sbId = 'sb-' + mode;
    var items = document.querySelectorAll( '#' + sbId + ' .s-item' );
    for ( var i = 0; i < items.length; i++ ) items[ i ].classList.remove( 'active' );
    if ( el ) {
        el.classList.add( 'active' );
        if ( mode === 'ts' ) el.classList.add( 'tsm' );
        if ( mode === 'ex' ) el.classList.add( 'exm' );
    }
    window.scrollTo( 0, 0 );
}

function showEx( id, el ) {
    var secs = document.querySelectorAll( '.sec' );
    for ( var i = 0; i < secs.length; i++ ) secs[ i ].classList.remove( 'active' );
    var t = document.getElementById( id );
    if ( t ) t.classList.add( 'active' );
    var items = document.querySelectorAll( '#sb-ex .s-item' );
    for ( var i = 0; i < items.length; i++ ) items[ i ].classList.remove( 'active', 'exm' );
    if ( el ) { el.classList.add( 'active' ); el.classList.add( 'exm' ); }
    window.scrollTo( 0, 0 );
}

function togglePanel( btn, id ) {
    var panel = document.getElementById( id );
    if ( !panel ) return;
    var isOpen = panel.classList.contains( 'open' );
    panel.classList.toggle( 'open' );
    var isSol = id.indexOf( 'sol-' ) === 0;
    if ( isOpen ) {
        btn.classList.remove( isSol ? 'open-sol' : 'open-exp' );
    } else {
        btn.classList.add( isSol ? 'open-sol' : 'open-exp' );
    }
}

function filterEx( level, btn ) {
    var section = document.querySelector( '.sec.active' );
    if ( !section ) return;
    var cards = section.querySelectorAll( '.ex-card' );
    for ( var i = 0; i < cards.length; i++ ) {
        if ( level === 'all' || cards[ i ].getAttribute( 'data-level' ) === level ) {
            cards[ i ].style.display = 'block';
        } else {
            cards[ i ].style.display = 'none';
        }
    }
    var btns = btn.parentNode.querySelectorAll( '.ex-filter-btn' );
    for ( var i = 0; i < btns.length; i++ ) {
        btns[ i ].className = 'ex-filter-btn';
    }
    btn.className = 'ex-filter-btn on-' + level;
}

function cp( btn ) {
    var block = btn.parentNode.parentNode;
    var pre = block.querySelector( 'pre' );
    if ( !pre ) return;
    var text = pre.textContent || pre.innerText;
    if ( navigator.clipboard && navigator.clipboard.writeText ) {
        navigator.clipboard.writeText( text ).then( function () {
            btn.textContent = '✓ ok';
            btn.className = 'cp-btn ok';
            setTimeout( function () { btn.textContent = 'copiar'; btn.className = 'cp-btn'; }, 2000 );
        } );
    } else {
        var ta = document.createElement( 'textarea' );
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild( ta );
        ta.select();
        document.execCommand( 'copy' );
        document.body.removeChild( ta );
        btn.textContent = '✓ ok';
        btn.className = 'cp-btn ok';
        setTimeout( function () { btn.textContent = 'copiar'; btn.className = 'cp-btn'; }, 2000 );
    }
}

