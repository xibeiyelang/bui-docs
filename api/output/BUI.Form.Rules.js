Ext.data.JsonP.BUI_Form_Rules({"tagname":"class","name":"BUI.Form.Rules","autodetected":{},"files":[{"filename":"rules.js","href":"rules.html#BUI-Form-Rules"}],"singleton":true,"members":[{"name":"checkRange","tagname":"property","owner":"BUI.Form.Rules","id":"property-checkRange","meta":{}},{"name":"date","tagname":"property","owner":"BUI.Form.Rules","id":"property-date","meta":{}},{"name":"dateRange","tagname":"property","owner":"BUI.Form.Rules","id":"property-dateRange","meta":{}},{"name":"email","tagname":"property","owner":"BUI.Form.Rules","id":"property-email","meta":{}},{"name":"equalTo","tagname":"property","owner":"BUI.Form.Rules","id":"property-equalTo","meta":{}},{"name":"length","tagname":"property","owner":"BUI.Form.Rules","id":"property-length","meta":{}},{"name":"max","tagname":"property","owner":"BUI.Form.Rules","id":"property-max","meta":{}},{"name":"maxDate","tagname":"property","owner":"BUI.Form.Rules","id":"property-maxDate","meta":{}},{"name":"maxlength","tagname":"property","owner":"BUI.Form.Rules","id":"property-maxlength","meta":{}},{"name":"min","tagname":"property","owner":"BUI.Form.Rules","id":"property-min","meta":{}},{"name":"minDate","tagname":"property","owner":"BUI.Form.Rules","id":"property-minDate","meta":{}},{"name":"minlength","tagname":"property","owner":"BUI.Form.Rules","id":"property-minlength","meta":{}},{"name":"mobile","tagname":"property","owner":"BUI.Form.Rules","id":"property-mobile","meta":{}},{"name":"number","tagname":"property","owner":"BUI.Form.Rules","id":"property-number","meta":{}},{"name":"numberRange","tagname":"property","owner":"BUI.Form.Rules","id":"property-numberRange","meta":{}},{"name":"regexp","tagname":"property","owner":"BUI.Form.Rules","id":"property-regexp","meta":{}},{"name":"required","tagname":"property","owner":"BUI.Form.Rules","id":"property-required","meta":{}},{"name":"add","tagname":"method","owner":"BUI.Form.Rules","id":"method-add","meta":{}},{"name":"get","tagname":"method","owner":"BUI.Form.Rules","id":"method-get","meta":{}},{"name":"isValid","tagname":"method","owner":"BUI.Form.Rules","id":"method-isValid","meta":{}},{"name":"remove","tagname":"method","owner":"BUI.Form.Rules","id":"method-remove","meta":{}},{"name":"valid","tagname":"method","owner":"BUI.Form.Rules","id":"method-valid","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Form.Rules","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/rules.html#BUI-Form-Rules' target='_blank'>rules.js</a></div></pre><div class='doc-contents'><p>表单验证的验证规则管理器</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-checkRange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-checkRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-checkRange' class='name expandable'>checkRange</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>勾选的范围\n\n\n name: checkRange\n msg: 必须选中{0}项！\n checkRange: 勾选的项范围\n\n\n\n    //至少勾选一项\n    {\n      checkRange : 1\n    }\n    //...</div><div class='long'><p>勾选的范围</p>\n\n<ol>\n <li>name: checkRange</li>\n <li>msg: 必须选中{0}项！</li>\n <li>checkRange: 勾选的项范围</li>\n</ol>\n\n\n<pre><code>    //至少勾选一项\n    {\n      checkRange : 1\n    }\n    //只能勾选两项\n    {\n      checkRange : [2,2]\n    }\n    //可以勾选2-4项\n    {\n      checkRange : [2,4\n      ]\n    }\n</code></pre>\n</div></div></div><div id='property-date' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-date' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-date' class='name expandable'>date</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>日期验证，会对值去除空格，无数据不进行校验，\n如果传入的值不是字符串，而是数字，则认为是有效值</p>\n\n<ol>\n <li>name: date</li>\n <li>msg: 不是有效的日期！</li>\n</ol>\n\n</div><div class='long'><p>日期验证，会对值去除空格，无数据不进行校验，\n如果传入的值不是字符串，而是数字，则认为是有效值</p>\n\n<ol>\n <li>name: date</li>\n <li>msg: 不是有效的日期！</li>\n</ol>\n\n</div></div></div><div id='property-dateRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-dateRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-dateRange' class='name expandable'>dateRange</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>起始结束日期验证，前面的日期不能大于后面的日期\n\n\n name: dateRange\n msg: 起始日期不能大于结束日期！\n dateRange: 可以使true或者{equals : fasle}，标示是否允许相等\n\n\n\n    ...</div><div class='long'><p>起始结束日期验证，前面的日期不能大于后面的日期</p>\n\n<ol>\n <li>name: dateRange</li>\n <li>msg: 起始日期不能大于结束日期！</li>\n <li>dateRange: 可以使true或者{equals : fasle}，标示是否允许相等</li>\n</ol>\n\n\n<pre><code>    {\n      dateRange : true\n    }\n    {\n      dateRange : {equals : false}\n    }\n</code></pre>\n</div></div></div><div id='property-email' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-email' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-email' class='name expandable'>email</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>邮箱验证,会对值去除空格，无数据不进行校验</p>\n\n<ol>\n <li>name: email</li>\n <li>msg: 不是有效的邮箱地址！</li>\n</ol>\n\n</div><div class='long'><p>邮箱验证,会对值去除空格，无数据不进行校验</p>\n\n<ol>\n <li>name: email</li>\n <li>msg: 不是有效的邮箱地址！</li>\n</ol>\n\n</div></div></div><div id='property-equalTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-equalTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-equalTo' class='name expandable'>equalTo</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>相等验证\n\n\n name: equalTo\n msg: 两次输入不一致！\n equalTo: 一个字符串，id（#id_name) 或者 name\n\n\n\n    {\n      equalTo : '#password'\n    }\n...</div><div class='long'><p>相等验证</p>\n\n<ol>\n <li>name: equalTo</li>\n <li>msg: 两次输入不一致！</li>\n <li>equalTo: 一个字符串，id（#id_name) 或者 name</li>\n</ol>\n\n\n<pre><code>    {\n      equalTo : '#password'\n    }\n    //或者\n    {\n      equalTo : 'password'\n    }\n</code></pre>\n</div></div></div><div id='property-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-length' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-length' class='name expandable'>length</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>输入长度验证，必须是指定的长度</p>\n\n<ol>\n <li>name: length</li>\n <li>msg: 输入值长度为{0}！</li>\n <li>length: 数字</li>\n</ol>\n\n</div><div class='long'><p>输入长度验证，必须是指定的长度</p>\n\n<ol>\n <li>name: length</li>\n <li>msg: 输入值长度为{0}！</li>\n <li>length: 数字</li>\n</ol>\n\n</div></div></div><div id='property-max' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-max' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-max' class='name expandable'>max</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不小于验证,用于数值比较\n\n\n name: max\n msg: 输入值不能大于{0}！\n max: 数字、字符串\n\n\n\n    {\n      max : 100\n    }\n    //字符串\n    {\n      max : '...</div><div class='long'><p>不小于验证,用于数值比较</p>\n\n<ol>\n <li>name: max</li>\n <li>msg: 输入值不能大于{0}！</li>\n <li>max: 数字、字符串</li>\n</ol>\n\n\n<pre><code>    {\n      max : 100\n    }\n    //字符串\n    {\n      max : '100'\n    }\n</code></pre>\n</div></div></div><div id='property-maxDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-maxDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-maxDate' class='name expandable'>maxDate</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不小于验证,用于数值比较\n\n\n name: maxDate\n msg: 输入值不能大于{0}！\n maxDate: 日期、字符串\n\n\n\n    {\n      maxDate : '2001-01-01';\n    }\n    //或...</div><div class='long'><p>不小于验证,用于数值比较</p>\n\n<ol>\n <li>name: maxDate</li>\n <li>msg: 输入值不能大于{0}！</li>\n <li>maxDate: 日期、字符串</li>\n</ol>\n\n\n<pre><code>    {\n      maxDate : '2001-01-01';\n    }\n    //或日期\n    {\n      maxDate : new Date('2001-01-01');\n    }\n</code></pre>\n</div></div></div><div id='property-maxlength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-maxlength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-maxlength' class='name expandable'>maxlength</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>最短长度验证,会对值去除空格</p>\n\n<ol>\n <li>name: maxlength</li>\n <li>msg: 输入值长度不大于{0}！</li>\n <li>maxlength: 数字</li>\n</ol>\n\n\n<pre><code>    {\n      maxlength : 10\n    }\n</code></pre>\n</div><div class='long'><p>最短长度验证,会对值去除空格</p>\n\n<ol>\n <li>name: maxlength</li>\n <li>msg: 输入值长度不大于{0}！</li>\n <li>maxlength: 数字</li>\n</ol>\n\n\n<pre><code>    {\n      maxlength : 10\n    }\n</code></pre>\n</div></div></div><div id='property-min' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-min' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-min' class='name expandable'>min</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>不小于验证</p>\n\n<ol>\n <li>name: min</li>\n <li>msg: 输入值不能小于{0}！</li>\n <li>min: 数字，字符串</li>\n</ol>\n\n\n<pre><code>    {\n      min : 5\n    }\n    //字符串\n</code></pre>\n</div><div class='long'><p>不小于验证</p>\n\n<ol>\n <li>name: min</li>\n <li>msg: 输入值不能小于{0}！</li>\n <li>min: 数字，字符串</li>\n</ol>\n\n\n<pre><code>    {\n      min : 5\n    }\n    //字符串\n</code></pre>\n</div></div></div><div id='property-minDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-minDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-minDate' class='name expandable'>minDate</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>不小于验证</p>\n\n<ol>\n <li>name: minDate</li>\n <li>msg: 输入日期不能小于{0}！</li>\n <li>minDate: 日期，字符串</li>\n</ol>\n\n\n<pre><code>    {\n      minDate : '2001-01-01';\n    }\n    //字符串\n</code></pre>\n</div><div class='long'><p>不小于验证</p>\n\n<ol>\n <li>name: minDate</li>\n <li>msg: 输入日期不能小于{0}！</li>\n <li>minDate: 日期，字符串</li>\n</ol>\n\n\n<pre><code>    {\n      minDate : '2001-01-01';\n    }\n    //字符串\n</code></pre>\n</div></div></div><div id='property-minlength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-minlength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-minlength' class='name expandable'>minlength</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>最短长度验证,会对值去除空格</p>\n\n<ol>\n <li>name: minlength</li>\n <li>msg: 输入值长度不小于{0}！</li>\n <li>minlength: 数字</li>\n</ol>\n\n\n<pre><code>    {\n      minlength : 5\n    }\n</code></pre>\n</div><div class='long'><p>最短长度验证,会对值去除空格</p>\n\n<ol>\n <li>name: minlength</li>\n <li>msg: 输入值长度不小于{0}！</li>\n <li>minlength: 数字</li>\n</ol>\n\n\n<pre><code>    {\n      minlength : 5\n    }\n</code></pre>\n</div></div></div><div id='property-mobile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-mobile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-mobile' class='name expandable'>mobile</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>数字验证，会对值去除空格，无数据不进行校验\n允许千分符，例如： 12,000,000的格式</p>\n\n<ol>\n <li>name: mobile</li>\n <li>msg: 不是有效的手机号码！</li>\n</ol>\n\n</div><div class='long'><p>数字验证，会对值去除空格，无数据不进行校验\n允许千分符，例如： 12,000,000的格式</p>\n\n<ol>\n <li>name: mobile</li>\n <li>msg: 不是有效的手机号码！</li>\n</ol>\n\n</div></div></div><div id='property-number' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-number' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-number' class='name expandable'>number</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>数字验证，会对值去除空格，无数据不进行校验\n允许千分符，例如： 12,000,000的格式</p>\n\n<ol>\n <li>name: number</li>\n <li>msg: 不是有效的数字！</li>\n</ol>\n\n</div><div class='long'><p>数字验证，会对值去除空格，无数据不进行校验\n允许千分符，例如： 12,000,000的格式</p>\n\n<ol>\n <li>name: number</li>\n <li>msg: 不是有效的数字！</li>\n</ol>\n\n</div></div></div><div id='property-numberRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-numberRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-numberRange' class='name expandable'>numberRange</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>数字范围\n\n\n name: numberRange\n msg: 起始数字不能大于结束数字！\n numberRange: 可以使true或者{equals : fasle}，标示是否允许相等\n\n\n\n    {\n      numberR...</div><div class='long'><p>数字范围</p>\n\n<ol>\n <li>name: numberRange</li>\n <li>msg: 起始数字不能大于结束数字！</li>\n <li>numberRange: 可以使true或者{equals : fasle}，标示是否允许相等</li>\n</ol>\n\n\n<pre><code>    {\n      numberRange : true\n    }\n    {\n      numberRange : {equals : false}\n    }\n</code></pre>\n</div></div></div><div id='property-regexp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-regexp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-regexp' class='name expandable'>regexp</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>正则表达式验证,如果正则表达式为空，则不进行校验</p>\n\n<ol>\n <li>name: regexp</li>\n <li>msg: 输入值不符合{0}！</li>\n <li>regexp: 正则表达式</li>\n</ol>\n\n</div><div class='long'><p>正则表达式验证,如果正则表达式为空，则不进行校验</p>\n\n<ol>\n <li>name: regexp</li>\n <li>msg: 输入值不符合{0}！</li>\n <li>regexp: 正则表达式</li>\n</ol>\n\n</div></div></div><div id='property-required' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-property-required' class='name expandable'>required</a> : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>非空验证,会对值去除空格</p>\n\n<ol>\n <li>name: required</li>\n <li>msg: 不能为空！</li>\n <li>required: boolean 类型</li>\n</ol>\n\n</div><div class='long'><p>非空验证,会对值去除空格</p>\n\n<ol>\n <li>name: required</li>\n <li>msg: 不能为空！</li>\n <li>required: boolean 类型</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-method-add' class='name expandable'>add</a>( <span class='pre'>rule, name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加验证规则 ...</div><div class='long'><p>添加验证规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rule</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><div class='sub-desc'><p>验证规则配置项或者验证规则对象</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>规则名称</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取验证规则 ...</div><div class='long'><p>获取验证规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>规则名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Form.Rule\" rel=\"BUI.Form.Rule\" class=\"docClass\">BUI.Form.Rule</a></span><div class='sub-desc'><p>验证规则</p>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-method-isValid' class='name expandable'>isValid</a>( <span class='pre'>name, values, [baseValue], [control]</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>验证指定的规则 ...</div><div class='long'><p>验证指定的规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>规则类型</p>\n</div></li><li><span class='pre'>values</span> : *<div class='sub-desc'><p>验证值</p>\n</div></li><li><span class='pre'>baseValue</span> : * (optional)<div class='sub-desc'><p>用于验证的基础值</p>\n</div></li><li><span class='pre'>control</span> : <a href=\"#!/api/BUI.Form.Field\" rel=\"BUI.Form.Field\" class=\"docClass\">BUI.Form.Field</a>|<a href=\"#!/api/BUI.Form.Group\" rel=\"BUI.Form.Group\" class=\"docClass\">BUI.Form.Group</a> (optional)<div class='sub-desc'><p>显示错误的模板</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否通过验证</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-method-remove' class='name expandable'>remove</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>删除验证规则 ...</div><div class='long'><p>删除验证规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>规则名称</p>\n</div></li></ul></div></div></div><div id='method-valid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Form.Rules'>BUI.Form.Rules</span><br/><a href='source/rules.html#BUI-Form-Rules-method-valid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Form.Rules-method-valid' class='name expandable'>valid</a>( <span class='pre'>name, value, [baseValue], [msg], [control]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>验证指定的规则 ...</div><div class='long'><p>验证指定的规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>规则类型</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>验证值</p>\n</div></li><li><span class='pre'>baseValue</span> : * (optional)<div class='sub-desc'><p>用于验证的基础值</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>显示错误的模板</p>\n</div></li><li><span class='pre'>control</span> : <a href=\"#!/api/BUI.Form.Field\" rel=\"BUI.Form.Field\" class=\"docClass\">BUI.Form.Field</a>|<a href=\"#!/api/BUI.Form.Group\" rel=\"BUI.Form.Group\" class=\"docClass\">BUI.Form.Group</a> (optional)<div class='sub-desc'><p>显示错误的模板</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>通过验证返回 null,否则返回错误信息</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});