<div class="cubebox-tmpl-wrap">
  {{#if loading}}
    <div class="loading"></div>
  {{/if}}

  <div class="pic_list clearfix">
    {{#list picList as item by item_index}}
      <a class="item" href="{{item.url}}">
        <img src="{{item.img | clipImage:'120_120_75'}}" width="120" height="120" alt="">
        <p class="ext">
          <span class="bg"></span>
          <span class="title" title={{item.title}}>{{item.title}}</span>
        </p>
      </a>
    {{/list}}
  </div>

  <div class="text_list">
    {{#list textList as item by item_index}}
      <a class="item" href="{{item.url}}">
        <span class="title" title="{{item.title}}">{{item.title}}</span>
      </a>
    {{/list}}
  </div>
</div>