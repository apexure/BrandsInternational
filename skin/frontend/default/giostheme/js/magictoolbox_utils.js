MagicToolbox_options = [];
MagicToolbox_links = [];

function MagicToolbox_clickElement(el) {
    var event;
    if (document.createEvent) {
        event = document.createEvent('MouseEvents');
        event.initEvent(MagicToolbox_click, true, true);
        el.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventType = 'MouseEvents';
        el.fireEvent('on' + MagicToolbox_click, event);
    }
    return event;
}

function MagicToolbox_arrayContains(a, obj) {
    for(var i = 0, l = a.length; i < l; i++) {
        if(a[i] == obj){
            return true;
        }
    }
    return false;
}

function MagicToolbox_findOption(opt_name) {
    opt_name = (opt_name || '').split(',');
    var i, l, selects = document.getElementsByTagName('select'),
        container = document.getElementById('MagicToolboxSelectorsContainer'),
        inputs = document.getElementsByTagName('input');

    if(!container) { return; }

    MagicToolbox_links = container.getElementsByTagName('a');

    for(i = 0, l = selects.length; i < l; i++) {
        if(MagicToolbox_arrayContains(opt_name, selects[i].getAttribute('optitle'))) {
            MagicToolbox_options.push(selects[i]);
            $mjs(selects[i]).je1('change', function(e) {


                var e = e || window.event, s = e.target || e.srcElement, v = s.value, t;
                for(var i = 0, l = s.options.length; i < l; i++) {
                    if(s.options[i].value == v) {
                        t = s.options[i].text.replace(/\s(\+|\-) ?\$ ?[0-9]+(\.[0-9]+)?$/g, '').toLowerCase();
                        break;
                    }
                }
                for(var i = 0, l = MagicToolbox_links.length; i < l; i++) {
                    if(MagicToolbox_links[i].firstChild.getAttribute('alt').toLowerCase() == t) {
                        MagicToolbox_clickElement(MagicToolbox_links[i]);
                        break;
                    }
                }
            });
        }
    }
    for(i = 0, l = inputs.length; i < l; i++) {
        if(inputs[i].getAttribute('type') == 'radio') {
            if(MagicToolbox_arrayContains(opt_name, inputs[i].getAttribute('optitle'))) {
                MagicToolbox_options.push(inputs[i]);
                $mjs(inputs[i]).je1('change', function(e) {


                    var e = e || window.event, s = e.target || e.srcElement, v = s.value, t, id = s.id;
                    var labels = document.getElementsByTagName('label');
                    for(var i = 0, l = labels.length; i < l; i++) {
                        if(labels[i].getAttribute('for') == id) {
                            t = labels[i].innerHTML.replace(/\s<span class="price-notice">(\+|\-) ?<span class="price"> ?\$[0-9]+(\.[0-9]+)?<\/span><\/span>/g, '').replace(/(^\s+)|(\s+$)/g, "").replace(/"/g, "'").toLowerCase();
                            break;
                        }
                    }
                    for(var i = 0, l = MagicToolbox_links.length; i < l; i++) {
                        if(MagicToolbox_links[i].firstChild.getAttribute('alt').replace(/(^\s+)|(\s+$)/g, "").replace(/"/g, "'").toLowerCase() == t) {
                            MagicToolbox_clickElement(MagicToolbox_links[i]);
                            break;
                        }
                    }
                });
            }
        }
    }
}

function MagicToolbox_changeOption(a) {
    var i, j, k, l = MagicToolbox_options.length, txt = a.firstChild.getAttribute('alt').toLowerCase();
    var checkedName = null;
    var notFound = true;
    if(l == 0) {
        return;
    }
    for(i = 0; i < l; i++) {
        if(MagicToolbox_options[i].options) {
            for(j = 0, k = MagicToolbox_options[i].options.length; j < k; j++) {
                var t = MagicToolbox_options[i].options[j].text.replace(/\s(\+|\-)\$[0-9]+(\.[0-9]+)?$/g, '').toLowerCase();
                if(t == txt) {
                    if(MagicToolbox_options[i].value != MagicToolbox_options[i].options[j].value) {
                        MagicToolbox_options[i].value = MagicToolbox_options[i].options[j].value;
                        MagicToolbox_options[i].selectedIndex = j;
                        var onchange_ev;
                        if (document.createEvent) {
                            onchange_ev = document.createEvent('Event');
                            onchange_ev.initEvent('change', true, true);
                            MagicToolbox_options[i].dispatchEvent(onchange_ev);
                        } else {
                            onchange_ev = document.createEventObject();
                            onchange_ev.eventType = 'Event';
                            MagicToolbox_options[i].fireEvent('onchange', onchange_ev);
                        }
                    }
                }
            }
        } else {
            if(!checkedName) {
                var labels = document.getElementsByTagName('label');
                for(var j = 0, len = labels.length; j < len; j++) {
                    if(labels[j].getAttribute('for') == MagicToolbox_options[i].id) {
                        var t = labels[j].innerHTML.replace(/\s<span class="price-notice">(\+|\-) ?<span class="price"> ?\$[0-9]+(\.[0-9]+)?<\/span><\/span>/g, '').replace(/(^\s+)|(\s+$)/g, "").replace(/"/g, "'").toLowerCase();
                        if(t == txt.replace(/(^\s+)|(\s+$)/g, "").replace(/"/g, "'")) {
                            if(!MagicToolbox_options[i].checked) {
                                checkedName = MagicToolbox_options[i].getAttribute('name');
                                for(var ii = 0; ii < l; ii++) {
                                    if(!MagicToolbox_options[ii].options) {
                                        if(MagicToolbox_options[ii].getAttribute('name') == checkedName)
                                            //if(MagicToolbox_options[ii].id != MagicToolbox_options[i].id)
                                            MagicToolbox_options[ii].checked =false;
                                    }
                                }
                                MagicToolbox_options[i].checked = true;
                                var onclick_ev;
                                if (document.createEvent) {
                                    onclick_ev = document.createEvent('Event');
                                    onclick_ev.initEvent('click', true, true);
                                    MagicToolbox_options[i].dispatchEvent(onclick_ev);
                                } else {
                                    onclick_ev = document.createEventObject();
                                    onclick_ev.eventType = 'Event';
                                    MagicToolbox_options[i].fireEvent('onclick', onclick_ev);
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
    if(notFound) {
        //selector not from option
        //maybe need some update
    }
}
