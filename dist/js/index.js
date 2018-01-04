webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(92);


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: theeternalcity
	* @Date:   2017-12-15 20:38:29
	* @Last Modified by:   theeternalcity
	* @Last Modified time: 2017-12-21 20:48:47
	*/

	__webpack_require__(93);
	var _mm = __webpack_require__(95);

	//alert('dfawe')

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	/*
	* @Author: theeternalcity
	* @Date:   2017-12-20 21:32:03
	* @Last Modified by:   theeternalcity
	* @Last Modified time: 2017-12-20 22:29:54
	*/

	var _mm = {
		// 网络请求
		requset : function(param){
			var _this = this;
			$.ajax({
				type		: param.method  || 'get',
				url			: param.url		|| '',
				dataType	: param.type 	|| 'json',
				data 		: param.date 	|| '',
				success 	: function(res){
					//请求成功
					if(0 === res.status){
						typeof param.success === 'function' && param.success(res.data);
					}

					//没有登录状态
					else if(10 === res.status){
						_this.doLogin();
					}
					else if(1 === res.status){
						typeof param.error === 'function' && param.error(res.msg);
					}
					
				},
				error		: function(err){
					typeof param.error === 'function' && param.error(err.status);
				}
			})
		},
		// 同意登录处理
		doLogin : function(){
			window.location.href = './login.html?redirect=' + encodeURIComponent(widow.location.href);
		}
	};

	module.exports = _mm;

/***/ })

});