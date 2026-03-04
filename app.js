let mode = 'js';

function toggleSidebar() {
    let sb = document.getElementById( 'sb-' + mode );
    if ( sb ) sb.classList.toggle( 'hidden' );
}

function switchTab( m, btn ) {
    mode = m;
    let tabs = document.querySelectorAll( '.main-tab' );
    for ( let i = 0; i < tabs.length; i++ ) {
        tabs[ i ].className = 'main-tab';
    }
    btn.className = 'main-tab act-' + m;
    document.getElementById( 'sb-js' ).style.display = 'none';
    document.getElementById( 'sb-ts' ).style.display = 'none';
    document.getElementById( 'sb-ex' ).style.display = 'none';
    if ( m === 'js' ) {
        document.getElementById( 'sb-js' ).style.display = 'block';
        show( 'arr-bas', document.querySelector( '#sb-js .s-item' ) );
    } else if ( m === 'ts' ) {
        document.getElementById( 'sb-ts' ).style.display = 'block';
        show( 'ts-types', document.querySelector( '#sb-ts .s-item' ) );
    } else {
        document.getElementById( 'sb-ex' ).style.display = 'block';
        showEx( 'ex-js', document.querySelector( '#sb-ex .s-item' ) );
    }
}

function show( id, el ) {
    let secs = document.querySelectorAll( '.sec' );
    for ( let i = 0; i < secs.length; i++ ) secs[ i ].classList.remove( 'active' );
    let t = document.getElementById( id );
    if ( t ) t.classList.add( 'active' );
    let sbId = 'sb-' + mode;
    let items = document.querySelectorAll( '#' + sbId + ' .s-item' );
    for ( let i = 0; i < items.length; i++ ) items[ i ].classList.remove( 'active' );
    if ( el ) {
        el.classList.add( 'active' );
        if ( mode === 'ts' ) el.classList.add( 'tsm' );
        if ( mode === 'ex' ) el.classList.add( 'exm' );
    }
    window.scrollTo( 0, 0 );
}

function showEx( id, el ) {
    let secs = document.querySelectorAll( '.sec' );
    for ( let i = 0; i < secs.length; i++ ) secs[ i ].classList.remove( 'active' );
    let t = document.getElementById( id );
    if ( t ) t.classList.add( 'active' );
    let items = document.querySelectorAll( '#sb-ex .s-item' );
    for ( let i = 0; i < items.length; i++ ) items[ i ].classList.remove( 'active', 'exm' );
    if ( el ) { el.classList.add( 'active' ); el.classList.add( 'exm' ); }
    window.scrollTo( 0, 0 );
}

function togglePanel( btn, id ) {
    let panel = document.getElementById( id );
    if ( !panel ) return;
    let isOpen = panel.classList.contains( 'open' );
    panel.classList.toggle( 'open' );
    let isSol = id.indexOf( 'sol-' ) === 0;
    if ( isOpen ) {
        btn.classList.remove( isSol ? 'open-sol' : 'open-exp' );
    } else {
        btn.classList.add( isSol ? 'open-sol' : 'open-exp' );
    }
}

function filterEx( level, btn ) {
    let section = document.querySelector( '.sec.active' );
    if ( !section ) return;
    let cards = section.querySelectorAll( '.ex-card' );
    for ( let i = 0; i < cards.length; i++ ) {
        if ( level === 'all' || cards[ i ].getAttribute( 'data-level' ) === level ) {
            cards[ i ].style.display = 'block';
        } else {
            cards[ i ].style.display = 'none';
        }
    }
    let btns = btn.parentNode.querySelectorAll( '.ex-filter-btn' );
    for ( let i = 0; i < btns.length; i++ ) {
        btns[ i ].className = 'ex-filter-btn';
    }
    btn.className = 'ex-filter-btn on-' + level;
}

function cp( btn ) {
    let block = btn.parentNode.parentNode;
    let pre = block.querySelector( 'pre' );
    if ( !pre ) return;
    let text = pre.textContent || pre.innerText;
    if ( navigator.clipboard && navigator.clipboard.writeText ) {
        navigator.clipboard.writeText( text ).then( function () {
            btn.textContent = '✓ ok';
            btn.className = 'cp-btn ok';
            setTimeout( function () { btn.textContent = 'copiar'; btn.className = 'cp-btn'; }, 2000 );
        } );
    } else {
        let ta = document.createElement( 'textarea' );
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

