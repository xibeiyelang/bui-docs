Ext.data.JsonP.BUI_Component_UIBase_Drag({"tagname":"class","name":"BUI.Component.UIBase.Drag","autodetected":{},"files":[{"filename":"drag.js","href":"drag.html#BUI-Component-UIBase-Drag"}],"members":[{"name":"constraint","tagname":"cfg","owner":"BUI.Component.UIBase.Drag","id":"cfg-constraint","meta":{}},{"name":"dragNode","tagname":"cfg","owner":"BUI.Component.UIBase.Drag","id":"cfg-dragNode","meta":{}},{"name":"dragBackEl","tagname":"property","owner":"BUI.Component.UIBase.Drag","id":"property-dragBackEl","meta":{"private":true}},{"name":"draging","tagname":"property","owner":"BUI.Component.UIBase.Drag","id":"property-draging","meta":{"protected":true}},{"name":"getter","tagname":"method","owner":"BUI.Component.UIBase.Drag","id":"method-getter","meta":{"private":true}},{"name":"mouseMove","tagname":"method","owner":"BUI.Component.UIBase.Drag","id":"method-mouseMove","meta":{"private":true}},{"name":"mouseUp","tagname":"method","owner":"BUI.Component.UIBase.Drag","id":"method-mouseUp","meta":{"private":true}},{"name":"registEvent","tagname":"method","owner":"BUI.Component.UIBase.Drag","id":"method-registEvent","meta":{"private":true}},{"name":"unregistEvent","tagname":"method","owner":"BUI.Component.UIBase.Drag","id":"method-unregistEvent","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Component.UIBase.Drag","short_doc":"拖拽控件的扩展\n\n var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content :...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Overlay.Dialog"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Overlay.Dialog' rel='BUI.Overlay.Dialog' class='docClass'>BUI.Overlay.Dialog</a></div><h4>Files</h4><div class='dependency'><a href='source/drag.html#BUI-Component-UIBase-Drag' target='_blank'>drag.js</a></div></pre><div class='doc-contents'><p>拖拽控件的扩展</p>\n\n<pre><code> var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content : '<div id=\"header\"></div><div></div>',\n     dragNode : '#header',\n     constraint : '#t2'\n });\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-constraint' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-cfg-constraint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-cfg-constraint' class='name expandable'>constraint</a> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><span class=\"signature\"></span></div><div class='description'><div class='short'>拖动的限制范围\n\n var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content :...</div><div class='long'><p>拖动的限制范围</p>\n\n<pre><code> var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content : '<div id=\"header\"></div><div></div>',\n     dragNode : '#header',\n     constraint : '#t2'\n });\n</code></pre>\n\n</div></div></div><div id='cfg-dragNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-cfg-dragNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-cfg-dragNode' class='name expandable'>dragNode</a> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><span class=\"signature\"></span></div><div class='description'><div class='short'>点击拖动的节点\n\n var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content :...</div><div class='long'><p>点击拖动的节点</p>\n\n<pre><code> var Control = Overlay.extend([UIBase.Drag],{\n     \n });\n\n var c = new Contol({ //拖动控件时，在#t2内\n     content : '<div id=\"header\"></div><div></div>',\n     dragNode : '#header',\n     constraint : '#t2'\n });\n</code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dragBackEl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-dragBackEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-dragBackEl' class='name expandable'>dragBackEl</a> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-draging' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-property-draging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-property-draging' class='name expandable'>draging</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>是否正在拖动</p>\n</div><div class='long'><p>是否正在拖动</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-getter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-getter' class='name expandable'>getter</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>* ...</div><div class='long'><p>*</p>\n</div></div></div><div id='method-mouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-mouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-mouseMove' class='name expandable'>mouseMove</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-mouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-mouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-mouseUp' class='name expandable'>mouseUp</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-registEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-registEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-registEvent' class='name expandable'>registEvent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unregistEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Drag'>BUI.Component.UIBase.Drag</span><br/><a href='source/drag.html#BUI-Component-UIBase-Drag-method-unregistEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Drag-method-unregistEvent' class='name expandable'>unregistEvent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});