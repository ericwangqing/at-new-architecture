define(function(){
	var toolbar = function(){
		this.description = "谢谢你的toolbar";
		this.toolIcons = [
			'私聊', '公共评论', '买卖'
		];
	};

  toolbar.prototype.viewAttached = function (view) {
      //you can get the view after it's bound and connected to it's parent dom node if you want
  };

  return toolbar;

})