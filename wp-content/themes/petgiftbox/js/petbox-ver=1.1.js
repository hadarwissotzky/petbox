(function($) {
	
	$(document).ready(function(){

		//any messages for the user?
		if ( window.pb_msg){
			try {
				var options = {
					settings: {
						duration: 10000
					}
				};
				var toast = new iqwerty.toast.Toast(pb_msg, options).show();
			} catch (exception){
				console.log(exception);
			}
		}

		var snf = 'pb_'; //storage_name_prefix

		var localStore = storageFactory(localStorage);
		var sessionStore = storageFactory(sessionStorage);

		//FRONT PAGE FUNCTIONALITY
		var poster = $('form[name="inputFrm"]')[0];

		//reload-friendly
		if (window.location.href.match(/build-pack-accordion-dog/g)){
			$(function() {
				$('#treat-your-dog-button').click(function() {
					this.click();
				}).click();
			});
		}
		if (window.location.href.match(/build-pack-accordion-cat/g)){
			$(function() {
				$('#treat-your-cat-button').click(function() {
					this.click();
				}).click();
			});
		}

		//treat your.. buttons functionality
		$('#treat-your-cat-button').on({
			click: function(e) {
    			$('#build-pack-accordion-cat').removeClass('closed');
    			$('#build-pack-accordion-dog').addClass('closed');//close the other one if open
    			poster.which_pet.value = 'cat';
    			if (localStore.getItem(snf + 'has_cat') === '1'){
    				var cat_name = localStore.getItem(snf + 'cat_name');
	    			if (cat_name.length > 0){
	    				$('#builder-cat-name').val(cat_name);
						poster.cat_name.value = cat_name;

	    			}
	    			var pack_subs = localStore.getItem(snf + 'subscription_cat');
	    			if (pack_subs.length > 0){
	    				selectCatSubs(pack_subs, $);
	    				poster.subscription_cat.value = pack_subs;
	    			}	 
	    			var is_gift = localStore.getItem(snf + 'is_gift_cat');
	    			if (is_gift){
	    				setIsGift('cat', is_gift, $);
	    				poster.is_gift_cat.value = is_gift;
	    				showGiftMessage('cat', $, localStore, snf);
	    				poster.gift_message_cat.value = localStore.getItem(snf + 'gift_message_cat');
	    			}	    			   			
    			}
  			}
		 });
		$('#treat-your-dog-button').on({
			click: function(e) {
    			$('#build-pack-accordion-dog').removeClass('closed');
    			$('#build-pack-accordion-cat').addClass('closed');//close the other one if open
    			poster.which_pet.value = 'dog';
    			if (localStore.getItem(snf + 'has_dog') === '1'){
    				var dog_name = localStore.getItem(snf + 'dog_name');
	    			if (dog_name.length > 0){
	    				$('#builder-dog-name').val(dog_name);
						poster.dog_name.value = dog_name;
	    			}
	    			var dog_size = localStore.getItem(snf + 'dog_size');
	    			if (dog_size.length > 0){
	    				selectDogSize(dog_size, $);
	    				poster.dog_size.value = dog_size;
	    			}
	    			var pack_subs = localStore.getItem(snf + 'subscription_dog');
	    			if (pack_subs.length > 0){
	    				selectDogSubs(pack_subs, $);
	    				poster.subscription_dog.value = pack_subs;
	    			}
	    			var is_gift = localStore.getItem(snf + 'is_gift_dog');
	    			if (is_gift){
	    				setIsGift('dog', is_gift, $);
	    				poster.is_gift_dog.value = is_gift;
	    				showGiftMessage('dog', $, localStore, snf);
	    				poster.gift_message_dog.value = localStore.getItem(snf + 'gift_message_dog');
	    			}
    			}
  			}
		 });

		//accordion functionality
		// 0. dog size
		$('#dog-size-small').on({
			click: function(e){
				localStore.setItem(snf + 'dog_size', 'small');
				selectDogSize('small', $);
				poster.dog_size.value = 'small';
			}
		});
		$('#dog-size-medium').on({
			click: function(e){
				localStore.setItem(snf + 'dog_size', 'medium');
				selectDogSize('medium', $);
				poster.dog_size.value = 'medium';
			}
		});
		$('#dog-size-large').on({
			click: function(e){
				localStore.setItem(snf + 'dog_size', 'large');
				selectDogSize('large', $);
				poster.dog_size.value = 'large';
			}
		});
		// 1. close buttons
		$('#build-pack-close-button').on({
			click: function(e) {
    			$('#build-pack-accordion-dog').addClass('closed');
  			}
		 });
		$('#build-pack-close-button-cat').on({
			click: function(e) {
    			$('#build-pack-accordion-cat').addClass('closed');
  			}
		 });

		// 2. grab petname into storage
		$('#builder-cat-name').on({
			blur: function(e) {
				if (this.value && this.value.length > 0){
					localStore.setItem(snf + 'cat_name',this.value);
					localStore.setItem(snf + 'has_cat', '1');
					poster.cat_name.value = this.value;
				}
  			}
		 });
		$('#builder-dog-name').on({
			blur: function(e) {
				if (this.value && this.value.length > 0){
					localStore.setItem(snf + 'dog_name',this.value);
					localStore.setItem(snf + 'has_dog', '1');
					poster.dog_name.value = this.value;
				}
  			}
		 });
		// 3. [Continue] buttons
		$('#continue-cat').on({
			click: function(e){
				window.location.href = '/#1541730507920-2a35e8c2-ebd8';
			}
		});
		$('#continue-dog').on({
			click: function(e){
				window.location.href = '/#1541626196593-2d817392-a432';
			}
		});

		// 4. pick a subscription functionality
		// todo: make this DRY!
		// A. cat
		$('#pack-a-cat-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_cat', 'a');
				selectCatSubs('a', $);
				poster.subscription_cat.value = 'a';

			}
		});
		$('#pack-b-cat-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_cat', 'b');
				selectCatSubs('b', $);
				poster.subscription_cat.value = 'b';
			}
		});
		$('#pack-c-cat-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_cat', 'c');
				selectCatSubs('c', $);
				poster.subscription_cat.value = 'c';
			}
		});
		// B. dog
		$('#pack-a-dog-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_dog', 'a');
				selectDogSubs('a', $);
				poster.subscription_dog.value = 'a';
			}
		});
		$('#pack-b-dog-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_dog', 'b');
				selectDogSubs('b', $);
				poster.subscription_dog.value = 'b';
			}
		});
		$('#pack-c-dog-option').on({
			click: function(e){
				localStore.setItem(snf + 'subscription_dog', 'c');
				selectDogSubs('c', $);
				poster.subscription_dog.value = 'c';
			}
		});

		//Is this a gift?
		// A. Cat
		$('#gift-on-off-cat input[type=checkbox]').on({
			click: function(e){
				localStore.setItem(snf + 'is_gift_cat', this.checked);
				setIsGift('cat', this.checked, $);
				poster.is_gift_cat.value = this.checked;
			}
		});
		$('#gift-message-cat textarea').on({
			blur: function(e){
				var gift_div = $('#gift-message-cat')[0];
				if (gift_div){
					var msg = gift_div.getElementsByTagName('textarea')[0].value;
					localStore.setItem(snf + 'gift_message_cat', msg);
					poster.gift_message_cat.value = msg;
				}
			}
		});
		// B. Dog
		$('#gift-on-off-dog input[type=checkbox]').on({
			click: function(e){
				localStore.setItem(snf + 'is_gift_dog', this.checked);
				setIsGift('dog', this.checked, $);
				poster.is_gift_dog.value = this.checked;
			}
		});
		$('#gift-message-dog textarea').on({
			blur: function(e){
				var gift_div = $('#gift-message-dog')[0];
				if (gift_div){
					var msg = gift_div.getElementsByTagName('textarea')[0].value;
					localStore.setItem(snf + 'gift_message_dog', msg);
					poster.gift_message_dog.value = msg;
				}
			}
		});

		//sign-up-button
		$('#sign-up-button img').on({
			click: function(e){
				poster.submit();
			}
		});
	});
})( jQuery );

function selectDogSize(size, jQ){
	var sizes = ['small','medium','large'];
	for (var i = 0; i < 3; i++) {
		jQ('#dog-size-' + sizes[i]).removeClass('selected');
	}
	jQ('#dog-size-' + size).addClass('selected');
}
function selectDogSubs(subscription, jQ){
	var subscriptions = ['a','b','c'];
	for (var i = 0; i < 3; i++) {
		jQ('#pack-' + subscriptions[i] + '-dog-option').removeClass('selected');
	}
	jQ('#pack-' + subscription + '-dog-option').addClass('selected');
	switch (subscription) {
		case 'a':
			var dogA = jQ('#pack-a-dog-option')[0];
			updatePrice('dog', dogA, jQ);
			break;
		case 'b':
			var dogB = jQ('#pack-b-dog-option')[0];
			updatePrice('dog', dogB, jQ);
			break;
		case 'c':
			var dogC = jQ('#pack-c-dog-option')[0];
			updatePrice('dog', dogC, jQ);
			break;
	}
}
function selectCatSubs(subscription, jQ){
	var subscriptions = ['a','b','c'];
	for (var i = 0; i < 3; i++) {
		jQ('#pack-' + subscriptions[i] + '-cat-option').removeClass('selected');
	}
	jQ('#pack-' + subscription + '-cat-option').addClass('selected');
	switch (subscription) {
		case 'a':
			var catA = jQ('#pack-a-cat-option')[0];
			updatePrice('cat', catA, jQ);
			break;
		case 'b':
			var catB = jQ('#pack-b-cat-option')[0];
			updatePrice('cat', catB, jQ);
			break;
		case 'c':
			var catC = jQ('#pack-c-cat-option')[0];
			updatePrice('cat', catC, jQ);
			break;
	}
}
function updatePrice(pet, el, jQ){
	var price = el.getElementsByClassName('pack-price')[0].innerText;
	jQ('#dollar-figure-' + pet)[0].innerHTML = price;
}
function setIsGift(pet, is_gift, jQ){
	var gswitch = jQ('#gift-on-off-' + pet)[0];
	var checkbox = gswitch.getElementsByTagName('input')[0];

	if (is_gift === "true" || is_gift === true ){ //string will come from localStore
		jQ('#gift-message-' + pet).addClass('is-gift');
		checkbox.checked = "checked";
	} else {
		jQ('#gift-message-' + pet).removeClass('is-gift');
		checkbox.checked = '';
	}
}
function setGiftMessage(pet, msg, jQ){
	var gift_div = jQ('#gift-message-' + pet)[0];
	if (gift_div){
		var msg = gift_div.getElementsByTagName('textarea')[0].value;
		localStore.setItem(snf + 'gift_message_' + pet, msg);
	}
}
function showGiftMessage(pet, jQ, store, snf){
	var gift_div = jQ('#gift-message-' + pet)[0];
	if (gift_div){
		var msg = store.getItem(snf + 'gift_message_' + pet);
		gift_div.getElementsByTagName('textarea')[0].value = msg;
	}
}