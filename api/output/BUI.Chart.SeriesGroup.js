Ext.data.JsonP.BUI_Chart_SeriesGroup({"tagname":"class","name":"BUI.Chart.SeriesGroup","autodetected":{},"files":[{"filename":"seriesgroup.js","href":"seriesgroup.html#BUI-Chart-SeriesGroup"}],"protected":true,"members":[{"name":"colors","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-colors","meta":{}},{"name":"legend","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-legend","meta":{}},{"name":"series","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-series","meta":{}},{"name":"seriesOptions","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-seriesOptions","meta":{}},{"name":"stackedData","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-stackedData","meta":{"private":true}},{"name":"symbols","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-symbols","meta":{}},{"name":"tooltip","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-tooltip","meta":{}},{"name":"xAxis","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-xAxis","meta":{}},{"name":"yAxis","tagname":"property","owner":"BUI.Chart.SeriesGroup","id":"property-yAxis","meta":{}},{"name":"","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-","meta":{"protected":true}},{"name":"addSeries","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-addSeries","meta":{}},{"name":"getSeries","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-getSeries","meta":{}},{"name":"getSeriesData","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-getSeriesData","meta":{"protected":true}},{"name":"getStackedData","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-getStackedData","meta":{"protected":true}},{"name":"getVisibleSeries","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-getVisibleSeries","meta":{}},{"name":"hideSeries","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-hideSeries","meta":{}},{"name":"showSeries","tagname":"method","owner":"BUI.Chart.SeriesGroup","id":"method-showSeries","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-BUI.Chart.SeriesGroup","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup' target='_blank'>seriesgroup.js</a></div></pre><div class='doc-contents'><p>数据序列的容器</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-colors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-colors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-colors' class='name expandable'>colors</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>存在多个序列时，线的颜色，marker的颜色 ...</div><div class='long'><p>存在多个序列时，线的颜色，marker的颜色</p>\n<p>Defaults to: <code>{value: [&#39;#2f7ed8&#39;, &#39;#0d233a&#39;, &#39;#8bbc21&#39;, &#39;#910000&#39;, &#39;#1aadce&#39;, &#39;#492970&#39;, &#39;#f28f43&#39;, &#39;#77a1e5&#39;, &#39;#c42525&#39;, &#39;#a6c96a&#39;]}</code></p></div></div></div><div id='property-legend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-legend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-legend' class='name expandable'>legend</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>图例 ...</div><div class='long'><p>图例</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-series' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-series' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-series' class='name expandable'>series</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>数据图形序列的配置项 ...</div><div class='long'><p>数据图形序列的配置项</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-seriesOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-seriesOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-seriesOptions' class='name expandable'>seriesOptions</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>序列图的统一配置项，不同的序列图有不同的配置项例如：\n\n\nlineCfg : 折线图的配置项\ncolumnCfg : 柱状图的配置项 ...</div><div class='long'><p>序列图的统一配置项，不同的序列图有不同的配置项例如：</p>\n\n<ul>\n<li>lineCfg : 折线图的配置项</li>\n<li>columnCfg : 柱状图的配置项</li>\n</ul>\n\n<p>Defaults to: <code>{value: {}}</code></p></div></div></div><div id='property-stackedData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-stackedData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-stackedData' class='name expandable'>stackedData</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>缓存的层叠数据 ...</div><div class='long'><p>缓存的层叠数据</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-symbols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-symbols' class='name expandable'>symbols</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>如果使用marker，那么不同图形序列的形状 ...</div><div class='long'><p>如果使用marker，那么不同图形序列的形状</p>\n<p>Defaults to: <code>{value: [&#39;circle&#39;, &#39;diamond&#39;, &#39;square&#39;, &#39;triangle&#39;, &#39;triangle-down&#39;]}</code></p></div></div></div><div id='property-tooltip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-tooltip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-tooltip' class='name expandable'>tooltip</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>提示信息的配置项 ...</div><div class='long'><p>提示信息的配置项</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-xAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-xAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-xAxis' class='name expandable'>xAxis</a> : <a href=\"#!/api/BUI.Chart.Axis\" rel=\"BUI.Chart.Axis\" class=\"docClass\">BUI.Chart.Axis</a><span class=\"signature\"></span></div><div class='description'><div class='short'>x 坐标轴 ...</div><div class='long'><p>x 坐标轴</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-yAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-property-yAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-property-yAxis' class='name expandable'>yAxis</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>|<a href=\"#!/api/BUI.Chart.Axis\" rel=\"BUI.Chart.Axis\" class=\"docClass\">BUI.Chart.Axis</a><span class=\"signature\"></span></div><div class='description'><div class='short'>y 坐标轴 ...</div><div class='long'><p>y 坐标轴</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-' class='name expandable'></a>( <span class='pre'></span> ) : <a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取可以被激活的元素 ...</div><div class='long'><p>获取可以被激活的元素</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Chart.Actived\" rel=\"BUI.Chart.Actived\" class=\"docClass\">BUI.Chart.Actived</a>[]</span><div class='sub-desc'><p>可以被激活的元素集合</p>\n</div></li></ul></div></div></div><div id='method-addSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-addSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-addSeries' class='name expandable'>addSeries</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加数据序列 ...</div><div class='long'><p>添加数据序列</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/BUI.Chart.Series\" rel=\"BUI.Chart.Series\" class=\"docClass\">BUI.Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div><div id='method-getSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-getSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-getSeries' class='name expandable'>getSeries</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取所有的数据序列 ...</div><div class='long'><p>获取所有的数据序列</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-getSeriesData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-getSeriesData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-getSeriesData' class='name expandable'>getSeriesData</a>( <span class='pre'>axis, name</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取数据序列的数据 ...</div><div class='long'><p>获取数据序列的数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axis</span> : <a href=\"#!/api/BUI.Chart.Axis\" rel=\"BUI.Chart.Axis\" class=\"docClass\">BUI.Chart.Axis</a><div class='sub-desc'><p>坐标轴</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>坐标轴名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>数据集合</p>\n</div></li></ul></div></div></div><div id='method-getStackedData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-getStackedData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-getStackedData' class='name expandable'>getStackedData</a>( <span class='pre'>stackType, axis, name</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>获取层叠数据 ...</div><div class='long'><p>获取层叠数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stackType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>层叠类型</p>\n</div></li><li><span class='pre'>axis</span> : <a href=\"#!/api/BUI.Chart.Axis\" rel=\"BUI.Chart.Axis\" class=\"docClass\">BUI.Chart.Axis</a><div class='sub-desc'><p>坐标轴</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>坐标轴名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>数据集合</p>\n</div></li></ul></div></div></div><div id='method-getVisibleSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-getVisibleSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-getVisibleSeries' class='name expandable'>getVisibleSeries</a>( <span class='pre'></span> ) : <a href=\"#!/api/BUI.Chart.Series\" rel=\"BUI.Chart.Series\" class=\"docClass\">BUI.Chart.Series</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>获取显示的数据序列 ...</div><div class='long'><p>获取显示的数据序列</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Chart.Series\" rel=\"BUI.Chart.Series\" class=\"docClass\">BUI.Chart.Series</a>[]</span><div class='sub-desc'><p>数据序列集合</p>\n</div></li></ul></div></div></div><div id='method-hideSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-hideSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-hideSeries' class='name expandable'>hideSeries</a>( <span class='pre'>series</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏series ...</div><div class='long'><p>隐藏series</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>series</span> : <a href=\"#!/api/BUI.Chart.Series\" rel=\"BUI.Chart.Series\" class=\"docClass\">BUI.Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div><div id='method-showSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Chart.SeriesGroup'>BUI.Chart.SeriesGroup</span><br/><a href='source/seriesgroup.html#BUI-Chart-SeriesGroup-method-showSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Chart.SeriesGroup-method-showSeries' class='name expandable'>showSeries</a>( <span class='pre'>series</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示series ...</div><div class='long'><p>显示series</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>series</span> : <a href=\"#!/api/BUI.Chart.Series\" rel=\"BUI.Chart.Series\" class=\"docClass\">BUI.Chart.Series</a><div class='sub-desc'><p>数据序列对象</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"protected":true}});