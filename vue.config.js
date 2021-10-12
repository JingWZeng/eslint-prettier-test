module.exports = {
	/*
lintOnSave 参数说明：
true 或者 warning：开启保存校验，会将 errors 级别的错误在终端中以 WARNING 的形式显示。默认的，WARNING 将不会导致编译失败;
false：不开启保存校验;
error：开启保存校验，会将 errors 级别的错误在终端中以 ERROR 的形式出现，会导致编译失败，同时浏览器页面变黑，显示 Failed to compile
 */
	// process.env.NODE_ENV === 'development'
	lintOnSave: false,
}
