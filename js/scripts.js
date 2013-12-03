
$(function(){
	

/*		   
	var nice = $("html").niceScroll();  // The document page (body)
	$("#div1").html($("#div1").html()+' '+nice.version);
    $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#00F",boxzoom:true}); // First scrollable DIV
    $("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // Second scrollable DIV
    $("#boxframe").niceScroll("#boxscroll3",{cursorcolor:"#0F0",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // This is an IFrame (iPad compatible)
    $("#boxscroll4").niceScroll("#boxscroll4 .wrapper",{boxzoom:true});  // hw acceleration enabled when using wrapper
*/	
	
	
	
	$('.search-icon').click(function(){
		/*$('.search-area').toggle();*/
	});
	$('.search-icon').click(function(){
		/*$('.navbar-brand, .nav, .btn-donate').hide();
		$('.search-area').toggle();*/
		return false
	});
	

// new style
	$("#search-icon").click (function () {
		$(".search-area").fadeIn();
		return false;
	});
	$(".cancel-btn").click (function () {
		$(".search-area").fadeOut();
		return false;
	});
	
});


$(window).load(function(){
	$("#nav-main .active a").animate({'background-position': '0 0'}, function () {  
		$("#nav-main .active a").css({'color':'#fff'});
	});	
});




// header height
/*	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".header-wrap").animate({height:"60px"} ,100 );
			$(".search-area").animate({height:"60px"} ,100 );
		} 
		else {
			$(".header-wrap").animate({height:"80px"} ,100 );
			$(".search-area").animate({height:"80px"} ,100 );
		}
	});
*/	


$(document).ready(function(){
	$(".header-wrap").data("top", $(".header-wrap").offset().top); // set original position on load
	$(window).scroll(fixDiv);
});
function fixDiv() {
	var $div = $(".header-wrap");
	if ($(window).scrollTop() > $div.data("top")) { 
		$('.header-wrap').addClass('header-short');
		/*
		$(".header-short").animate({'height':'60px'});
		$(".header-short .navbar-brand").animate({'max-height':'50px' ,'padding':'5px 0'});
		$(".header-short .navbar-brand img").animate({'height':'50px'});
		$(".header-short .navbar-default .navbar-nav > li > a").animate({'padding':'18px 10px 7px'});
		$(".header-short .header-right").animate({'padding-top':'15px'});
		$(".header-short .search-area").animate({'height':'60px', 'margin':'0', 'paddting-top':'10px'});
		$(".header-short .cancel-btn").animate({'top':'20px'});
		*/
	}
	else {
		$('.header-wrap').removeClass('header-short');
		
		/*
		$(".header-wrap").animate({'height':'80px'});
		$(".header-wrap .navbar-brand").animate({'max-height':'60px' ,'padding':'10px 0 9px'});
		$(".header-wrap .navbar-brand img").animate({'height':'auto'});
		$(".header-wrap .navbar-default .navbar-nav > li > a").animate({'padding':'28px 10px 12px'});
		$(".header-wrap .header-right").animate({'padding-top':'25px'});
		$(".header-wrap .search-area").animate({'height':'80px', 'margin':'0', 'paddting-top':'20px'});
		$(".header-wrap .cancel-btn").animate({'top':'30px'});
		*/
	}
}


$(window).load(function(){
  
  $(".default-checkbox").click(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$("#step-1").show();
			$("#step-2,#donatestep4-2-wrap").hide();
		}
		else {
			$(this).addClass('active');
			$("#step-1").hide();
			$("#step-2,#donatestep4-2-wrap").show();		
		}
	});
	$(".default-checkbox:checked").each(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$("#step-1").show();
			$("#step-2,#donatestep4-2-wrap").hide();
		}
		else {
			$(this).addClass('active');
			$("#step-1").hide();
			$("#step-2,#donatestep4-2-wrap").show();		
		}
	});
	
	
	$(".donate-cc a").click(function() {
		$("#step-2,#donatestep4-2-wrap").hide(1000);
		$("#step-3,#donatestep4-1-wrap").show();
		$(".make-a-donate").hide();
		return false;
	});
	
	
	
	
	$(".donate").click(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".select-amount").slideUp(500);
			$("#donatestep4-wrap .send-donate").fadeIn();	
			$("#donatestep4-2-wrap").fadeOut();
		}
		else {
			$(this).addClass('active');
			$(".select-amount").slideDown(500);
			$("#donatestep4-wrap .send-donate").fadeOut();	
			$("#donatestep4-2-wrap").fadeIn();	
		}
	});
	$(".donate:checked").click(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".select-amount").slideUp(500);
			$("#donatestep4-wrap .send-donate").fadeIn();	
			$("#donatestep4-2-wrap").fadeOut();
		}
		else {
			$(this).addClass('active');
			$(".select-amount").slideDown(500);
			$("#donatestep4-wrap .send-donate").fadeOut();	
			$("#donatestep4-2-wrap").fadeIn();	
		}
	});
	

  $(".preview").click(function() {
	
	$(".overlay").fadeIn();
  	$(".preview-edit-section-wrap").fadeIn();
	$(".preview-edit-section-wrap .remove-btn").click(function() {
		
		
		$(".preview-edit-section-wrap").fadeOut();
		$(".overlay").fadeOut();
		
		
		});
	
	});
	
	$("#donatestep4-1-wrap .send-btn").click(function() {
		
		$(".view-recepient-wrap").show();
	});
	
	$(".pink-circles").click (function () {
			//var navHieght = $("#nav-wrap").height();
			$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 30
			}, 1000);
			return false;
	});
	
	
	$(".donate-amount li a").click(function() {
		$(".donate-amount li a").removeClass('selected-dollerbtn');
		$(this).addClass('selected-dollerbtn')
		return false;
	});
	$("body").click(function() {
		if ($(".donate-amount li a").hasClass('selected-dollerbtn') ){
			$(".donate-amount li a").removeClass('selected-dollerbtn');
		}
	});
	
	
	$("#checkbox-btn").click(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".fullname").hasClass('active');
			$(".fullname").removeClass('active');
			$(".dropdown-2 .recipient-selectbtn").addClass('not-allowed');	
			$(".fullname").attr('disabled','disabled');
			$(".dropdown-2 .recipient-selectbtn").removeClass('select-dropdown');
		}
		else {
			$(".fullname").addClass('active');
			$(this).addClass('active');
			$(".dropdown-2 .recipient-selectbtn").removeClass('not-allowed');
			$(".fullname").removeAttr('disabled');
			$(".dropdown-2 .recipient-selectbtn").addClass('select-dropdown');
		}
	});
	$("#checkbox-btn:checked").each (function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".fullname").hasClass('active');
			$(".fullname").removeClass('active');
			$(".dropdown-2 .recipient-selectbtn").addClass('not-allowed');	
			$(".fullname").attr('disabled','disabled');
			
		}
		else {
			$(".fullname").addClass('active');
			$(this).addClass('active');
			$(".dropdown-2 .recipient-selectbtn").removeClass('not-allowed');
			$(".fullname").removeAttr('disabled');
		}
	});
	
	$(".checkbox-btn").click(function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".fullname-1").hasClass('active');
			$(".fullname-1").removeClass('active');
			$(".colume .recipient-selectbtn").addClass('not-allowed');	
			$(".fullname-1").attr('disabled','disabled');
			$(".colume .recipient-selectbtn").removeClass('select-dropdown');
		}
		else {
			$(".fullname-1").addClass('active');
			$(this).addClass('active');
			$(".colume .recipient-selectbtn").removeClass('not-allowed');
			$(".fullname-1").removeAttr('disabled');
			$(".colume .recipient-selectbtn").addClass('select-dropdown');
		}
	});
	$(".checkbox-btn:checked").each (function() {
		if ($(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".fullname-1").hasClass('active');
			$(".fullname-1").removeClass('active');
			$(".colume .recipient-selectbtn").addClass('not-allowed');	
			$(".fullname-1").attr('disabled','disabled');
			
		}
		else {
			$(".fullname-1").addClass('active');
			$(this).addClass('active');
			$(".colume .recipient-selectbtn").removeClass('not-allowed');
			$(".fullname-1").removeAttr('disabled');
		}
	});
	
	
	
	$(".colume .recipient-selectbtn").click(function() {
		if (!$(this).hasClass('not-allowed')){
			$(".dropdown-section").fadeIn();
			$(this).addClass('active');
		}
		return false ;
	});
	$("body").click(function() {
		if ($(".colume .recipient-selectbtn").hasClass('active') ){
			$(".dropdown-section").fadeOut();
		}
	});
	
	$(".dropdown-section li a").click(function() {
		var country = $(this).html();
		$(".colume .recipient-selectbtn em").html(country);
		$(this).parents(".dropdown-section").fadeOut();
		$(".dropdown-section li a").removeClass('active');
		$(this).addClass('active');
		return false
	});
	
	
	
	$(".dropdown-2 .recipient-selectbtn").click(function() {
		if (!$(this).hasClass('not-allowed')){
			$(".dropdown-section-2").fadeIn();
			$(this).addClass('active');
		};
		return false ;
	});
	$("body").click(function() {
		if ($(".dropdown-2 .recipient-selectbtn").hasClass('active') ){
			$(".dropdown-section-2").fadeOut();
		}
	});
	
	$(".dropdown-section-2 li a").click(function() {
		var country = $(this).html();
		$(".dropdown-2 .recipient-selectbtn em").html(country);
		$(this).parents(".dropdown-section-2").fadeOut();
		$(".dropdown-section-2 li a").removeClass('active');
		$(this).addClass('active');
		return false
	});
	
	
	
	
	
	$(".dropdown-3 .recipient-selectbtn").click(function() {
		$(".dropdown-section-3").fadeIn();
		$(this).addClass('active');
		return false ;
	});
	$("body").click(function() {
		if ($(".dropdown-3 .recipient-selectbtn").hasClass('active') ){
			$(".dropdown-section-3").fadeOut();
		}
	});
	
	
	$(".dropdown-section-3 li a").click(function() {
		var country = $(this).html();
		$(".dropdown-3 .recipient-selectbtn em").html(country);
		$(this).parents(".dropdown-section-3").fadeOut();
		$(".dropdown-section-3 li a").removeClass('active');
		$(this).addClass('active');
		return false
	});
	
});

$(function(){
	$('.text-field-normal[name="fname"]').blur(function(){
		if($(this).val() != 'First name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="fname-1"]').blur(function(){
		if($(this).val() != 'First name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="fname-2"]').blur(function(){
		if($(this).val() != 'First name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="fname-3"]').blur(function(){
		if($(this).val() != 'First name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="lname"]').blur(function(){
		if($(this).val() != 'Last name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="lname-1"]').blur(function(){
		if($(this).val() != 'Last name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="lname-2"]').blur(function(){
		if($(this).val() != 'Last name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="lname-3"]').blur(function(){
		if($(this).val() != 'Last name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="email"]').blur(function(){
		if($(this).val() != 'Enter your email address'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="email-1"]').blur(function(){
		if($(this).val() != 'Enter your email address'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="email-2"]').blur(function(){
		if($(this).val() != 'Enter your email address'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="message"]').blur(function(){
		if($(this).val() != 'I wanted to inspire you with a card created by a bold new organization that inspires me. The Edith Sanford Breast Cancer Foundation is pursuing an innovative research to find the cures. Faster.'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="message-1"]').blur(function(){
		if($(this).val() != 'Hi John Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="funame"]').blur(function(){
		if($(this).val() != 'Full name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="funame-1"]').blur(function(){
		if($(this).val() != 'Full name'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="Otheramount"]').blur(function(){
		if($(this).val() != 'Other amount'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="emptyfield"]').blur(function(){
		if($(this).val() != ''){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="emptyfield-1"]').blur(function(){
		if($(this).val() != ''){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="emptyfield-2"]').blur(function(){
		if($(this).val() != ''){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	$('.text-field-normal[name="cnumber"]').blur(function(){
		if($(this).val() != 'Your 16 digit card number'){
			$(this).addClass('focused');
		}else{
			$(this).removeClass('focused');
		}
	});
	
	
});




