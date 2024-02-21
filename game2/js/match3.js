var default_width = 1280, default_height = 720;
		var wrapper_width, wrapper_height;
		var diff, ratio;
		var total_available_image = 7;
		var cols = new Array(8, 15.6, 23.2, 30.8, 38.4, 46);
		var rows = new Array(16.3, 29.8, 43.3, 56.8, 70.2, 83.7);



		var dummyDrag, currImg;
		var star_interval;
		var currCoord, currRow, currCol;
		var validDropPos;
		var hitImg;
		var available_move, validMove;
		var img1, img2, img3;
		var star_index = 0;
		var sfx_audio = new Audio();
		var auto_check_crush;
		var allowDrag = false;
		var current_level = 0;
		var star_img_ready = false;
		var timeline_star_index;
		var total_img_to_crush;
		var curr_message_div;
		
		var wanted_items = ["pic1", "pic2", "pic3", "pic4", "pic5"];
		var unwant_items = ["pic6", "pic7"];
		var popup_wanted_list, popup_unwant_list, popup_list;
		var first_drag = false;

		function trace(e) {
			console.log(e.target.getAttribute("myImgIndex"));
		}
		
		function makeContentResponsive() {
			var inner_width = window.innerWidth;
			var inner_height = window.innerHeight;
			var width_percentage = default_width / 100;
			var height_percentage = default_height / 100;
			
			if (default_height > inner_height) {
				diff = default_height - inner_height;
				ratio = diff / height_percentage;
				wrapper_width = default_width - (width_percentage * ratio);
				wrapper_height = default_height - (height_percentage * ratio);
			} else {
				diff = inner_height - default_height;
				ratio = diff / height_percentage;
				wrapper_width = default_width + (width_percentage * ratio);
				wrapper_height = default_height + (height_percentage * ratio);
			}
			
			if (wrapper_width > inner_width) {
				diff = wrapper_width - inner_width;
				ratio = diff / (wrapper_width / 100);
				wrapper_width = wrapper_width - ((wrapper_width / 100) * ratio);
				wrapper_height = wrapper_height - ((wrapper_height / 100) * ratio);
			}
			
			document.getElementById("wrapper").style.width = wrapper_width + "px";
			document.getElementById("wrapper").style.height = wrapper_height + "px";
			document.getElementById("wrapper").style.top = (inner_height - wrapper_height) / 2 + "px";
			document.getElementById("wrapper").style.left = (inner_width - wrapper_width) / 2 + "px";
			
			if (star_img_ready) {
				for (r=1; r<=6; r++) {
					for (c=1; c<=6; c++) {
						var _parent = document.getElementById(r + "-" + c + "-star_wrapper");
						var _div = document.getElementById(r + "-" + c + "-star");
						_div.style.width = _parent.offsetWidth * 10 + "px";
						_div.style.height = _parent.offsetHeight + "px";
					}
				}
			}
			
			
			//document.getElementById("msg_no_more_move").style.top = (wrapper_height / 2) - (document.getElementById("msg_no_more_move").offsetHeight / 2) + "px";
			//document.getElementById("msg_no_more_move").style.left = (wrapper_width / 2) - (document.getElementById("msg_no_more_move").offsetWidth / 2) + "px";

			document.getElementById("msg_no_more_move").style.top =  (wrapper_height / 2) - (document.getElementById("msg_no_more_move").offsetHeight / 2) + "Px";
			document.getElementById("msg_no_more_move").style.left = "5.5%";
			
			//document.getElementById("level_image").style.left = (wrapper_width / 2) - (document.getElementById("level_image").offsetWidth / 2) + "px";
			//document.getElementById("msg_times_up").style.left = (wrapper_width / 2) - (document.getElementById("msg_times_up").offsetWidth / 2) + "px";
			//document.getElementById("msg_mission_completed").style.left = (wrapper_width / 2) - (document.getElementById("msg_mission_completed").offsetWidth / 2) + "px";
			
			document.getElementById("popup_wrapper").style.height = document.getElementById("pic1_msg").offsetHeight + "px";
			document.getElementById("popup_wrapper").style.top = (wrapper_height / 2) - (document.getElementById("popup_wrapper").offsetHeight / 2) + "px";
			//document.getElementById("popup_wrapper").style.top = "200%";
			document.getElementById("popup_wrapper").style.left = (wrapper_width / 2) - (document.getElementById("popup_wrapper").offsetWidth / 2) + "px";

			
			document.getElementById("b_next").style.top = "72%";
			document.getElementById("b_next").style.left = (wrapper_width / 2) - (document.getElementById("b_next").offsetWidth / 2) + "px";
		}

		function resizeTextComponent(comp, fontSize) {
			font_size = ((wrapper_width) / 100) * fontSize;
			document.getElementById(comp).style.fontSize = font_size + "em";
			max_height = document.getElementById(comp).offsetHeight;
			actual_height = document.getElementById(comp).scrollHeight;

			
			do {
				font_size = font_size - 0.1;
				document.getElementById(comp).style.fontSize = font_size + "em";
				actual_height = document.getElementById(comp).scrollHeight;
			} while (actual_height > max_height);
		}

		function startDrag(evt) {
			evt.preventDefault();
			first_drag = true;

			if (allowDrag) {
				currImg = document.getElementById(evt.target.id);
				dummyDrag = document.getElementById("pic_dummy");
				
				//console.log("CLICK: " + evt.target.id + " : " + evt.target.getAttribute("image_id"));

				
				if (evt.type == "touchstart") {
					document.addEventListener("touchend", drop);
					document.addEventListener("touchmove", dragging);
				} else {
					document.addEventListener("mouseup", drop);
					document.addEventListener("mousemove", dragging);
				}

				currCoord = currImg.id.split("-");
				currRow = parseInt(currCoord[0]);
				currCol = parseInt(currCoord[1]);

				validDropPos = [];

				currRow > 1 ? validDropPos.push((currRow - 1) + "-" + currCol) : false;
				currRow < rows.length ? validDropPos.push((currRow + 1) + "-" + currCol) : false;
				currCol > 1 ? validDropPos.push(currRow + "-" + (currCol - 1)) : false;
				currCol < cols.length ? validDropPos.push(currRow + "-" + (currCol + 1)) : false;
			}
		}

		function dragging(e) {
			e.preventDefault();
			
			if (e.type == "touchmove") {
				//var newX = e.touches[0].clientX - (dummyDrag.offsetWidth / 2);
				var newX = e.touches[0].clientX - document.getElementById("wrapper").offsetLeft - (dummyDrag.offsetWidth / 2);
  				var newY = e.touches[0].clientY - (dummyDrag.offsetHeight / 2) - document.getElementById("wrapper").offsetTop;
			} else {
				var newX = e.clientX - document.getElementById("wrapper").offsetLeft - (dummyDrag.offsetWidth / 2);
				var newY = e.clientY - (dummyDrag.offsetHeight / 2) - document.getElementById("wrapper").offsetTop;
			}

			dummyDrag.style.left = newX + "px";
			dummyDrag.style.top = newY + "px";


			for (i=1; i<=validDropPos.length; i++) {
				hitImg = document.getElementById(validDropPos[i-1]);

				if ((newX > (hitImg.offsetLeft - hitImg.offsetWidth / 2) && newX < (hitImg.offsetLeft + hitImg.offsetWidth / 2)) && (newY > (hitImg.offsetTop - hitImg.offsetHeight / 2) && (newY < hitImg.offsetTop + hitImg.offsetHeight / 2))) {
					swipeImg(currImg.id, hitImg.id);
					break;
				}
			}
		}
		
		function drop(e) {
			if (e.type == "touchend") {
				document.removeEventListener("touchend", drop);
				document.removeEventListener("touchmove", dragging);
			} else {
				document.removeEventListener("mouseup", drop);
				document.removeEventListener("mousemove", dragging);
			}
			
			//currImg.style.left = currImg.coordsX + "%";
			//currImg.style.top = currImg.coordsY + "%";
			//currImg.removeEventListener("mouseup", drop, false);
			dummyDrag.style.left = "0px";
			dummyDrag.style.top = "0px";
			currImg = "";
			hitImg = "";
		}

		function swipeImg(curr, hit) {
			dummyDrag.style.left = "0px";
			dummyDrag.style.top = "0px";
			allowDrag = false;
			
			document.removeEventListener("mouseup", drop);
			document.removeEventListener("mousemove", dragging);
			document.removeEventListener("touchend", drop);
			document.removeEventListener("touchmove", dragging);
			
			cx = currImg.getAttribute("coordsX");
			cy = currImg.getAttribute("coordsY");
			hx = hitImg.getAttribute("coordsX");
			hy = hitImg.getAttribute("coordsY");
			currImg.style.left = hx + "%";
			currImg.style.top = hy + "%";
			hitImg.style.left = cx + "%";
			hitImg.style.top = cy + "%";
			currImg.id = hit;
			hitImg.id = curr;

			window.setTimeout(function() {
				if (checkCrush() == true) {
					currImg.setAttribute("coordsX", hx);
					currImg.setAttribute("coordsY", hy);
					hitImg.setAttribute("coordsX", cx);
					hitImg.setAttribute("coordsY", cy);
				} else {
					$(currImg).delay(200).animate({left: cx + "%", top: cy + "%"}, "fast");
					$(hitImg).delay(200).animate({left: hx + "%", top: hy + "%"}, "fast");
					currImg.id = curr;
					hitImg.id = hit;
					allowDrag = true;
				}

				currImg = "";
				hitImg = "";
			}, 200);
		}
		
		function checkCrush() {
			validMove = false;
			allowDrag = false;
			
			popup_wanted_list = [];
			popup_unwant_list = [];
			popup_list = [];
			
			for (r=1; r<=rows.length; r++) {
				for (c=1; c<=cols.length-2; c++) {
					var _div1 = document.getElementById(r + "-" + c);
					var _div2 = document.getElementById(r + "-" + (c + 1));
					var _div3 = document.getElementById(r + "-" + (c + 2));

					if (_div1.getAttribute("image_id") == _div2.getAttribute("image_id") && _div2.getAttribute("image_id") == _div3.getAttribute("image_id")) {
						
						if (first_drag) {
							if (!popup_wanted_list.includes(_div1.getAttribute("img_src")) && wanted_items.includes(_div1.getAttribute("img_src"))) {
								popup_wanted_list.push(_div1.getAttribute("img_src"));
								wanted_items.splice(wanted_items.indexOf(_div1.getAttribute("img_src")), 1);
							}
							
							if (!popup_unwant_list.includes(_div1.getAttribute("img_src")) && unwant_items.includes(_div1.getAttribute("img_src"))) {
								popup_unwant_list.push(_div1.getAttribute("img_src"));
								unwant_items.splice(unwant_items.indexOf(_div1.getAttribute("img_src")), 1);
							}
						}
						

						if (_div1.style.opacity == 1) {
							udpateScore(_div1);
						}
						
						if (_div2.style.opacity == 1) {
							udpateScore(_div2);
						}
						
						if (_div3.style.opacity == 1) {
							udpateScore(_div3);
						}
						
						validMove = true;
					}
				}
			}

			for (c=1; c<=cols.length; c++) {
				for (r=1; r<=rows.length-2; r++) {
					var _div1 = document.getElementById(r + "-" + c);
					var _div2 = document.getElementById((r+1) + "-" + c);
					var _div3 = document.getElementById((r+2) + "-" + c);
					
					if (_div1.getAttribute("image_id") == _div2.getAttribute("image_id") && _div2.getAttribute("image_id") == _div3.getAttribute("image_id")) {
						if (first_drag) {
							if (!popup_wanted_list.includes(_div1.getAttribute("img_src")) && wanted_items.includes(_div1.getAttribute("img_src"))) {
								popup_wanted_list.push(_div1.getAttribute("img_src"));
								wanted_items.splice(wanted_items.indexOf(_div1.getAttribute("img_src")), 1);
							}
							
							if (!popup_unwant_list.includes(_div1.getAttribute("img_src")) && unwant_items.includes(_div1.getAttribute("img_src"))) {
								popup_unwant_list.push(_div1.getAttribute("img_src"));
								unwant_items.splice(unwant_items.indexOf(_div1.getAttribute("img_src")), 1);
							}
						}
						
						if (_div1.style.opacity == 1) {
							udpateScore(_div1);
						}
						
						if (_div2.style.opacity == 1) {
							udpateScore(_div2);
						}
						
						if (_div3.style.opacity == 1) {
							udpateScore(_div3);
						}
						
						validMove = true;
					}
				}
			}
			
					
			if (validMove) {
				popup_list = popup_wanted_list.concat(popup_unwant_list);
				document.getElementById("sfx_score1").currentTime = 0;
				document.getElementById("sfx_score1").muted = false;
				document.getElementById("sfx_score1").play();

				window.setTimeout(function() {
					clearInterval(star_interval);
					star_interval = "";
					star_interval = setInterval(starEffect, 100);
				}, 200);
				
				//document.getElementById("console").innerHTML = "star";
			} else {
				allowDrag = true;
			}
			
			return validMove;
		}

		function starEffect() {
			for (r=1; r<=6; r++) {
				for (c=1; c<=6; c++) {
					if (document.getElementById(r + "-" + c).style.opacity >= 0 && document.getElementById(r + "-" + c).style.opacity <= 0.1) {
						var _star_wrapper = document.getElementById(r + "-" + c + "-star_wrapper");
						var _star = document.getElementById(r + "-" + c + "-star");
						
						
						if (star_index >= 10) {
							_star_wrapper.style.visibility = "hidden";
							document.getElementById(r + "-" + c).style.opacity = 0;
						} else {
							//if (star_index > 15) {
							//	document.getElementById(r + "-" + c).style.opacity = 0;
							//}
							
							_star_wrapper.style.visibility = "visible";
							_star.style.left = (-(parseInt(_star.offsetWidth / 10) * star_index)) + "px";
						}
					}
				}
			}
			
			star_index++;
			
			if (star_index > 10) {
				clearInterval(star_interval);
				star_interval = "";
				star_index = 1;

				if (first_drag) {
					showPopupMessage();
				} else {
					slideImage();
				}
			}
		}

		function udpateScore(img) {
			img.style.opacity = "0.1";
			total_img_to_crush++;
		}

		function slideImage() { // Slide down image to replace matched images, generate new image to replace empty image
			for (col=1; col<=cols.length; col++) {
				for (curr_row=rows.length; curr_row > 0; curr_row--) {
					for (pre_row = curr_row-1; pre_row > 0; pre_row--) {
						if (document.getElementById(curr_row + "-" + col).style.opacity == 0) {
							if (document.getElementById(pre_row + "-" + col).style.opacity == 1) {
								document.getElementById(curr_row + "-" + col).childNodes[0].src = document.getElementById(pre_row + "-" + col).childNodes[0].src;
								document.getElementById(curr_row + "-" + col).setAttribute("image_id", document.getElementById(pre_row + "-" + col).getAttribute("image_id"));
								document.getElementById(curr_row + "-" + col).setAttribute("img_src", document.getElementById(pre_row + "-" + col).getAttribute("img_src"));
								document.getElementById(curr_row + "-" + col).style.opacity = 1;
								document.getElementById(pre_row + "-" + col).style.opacity = 0;
								curr_row -= 1;
								pre_row = curr_row;
							}
						}
					}
				}


				for(i=rows.length; i>0; i--) {
					if (document.getElementById(i + "-" + col).style.opacity == 0) {
						var num = Math.floor(Math.random() * total_available_image) + 1;
						document.getElementById(i + "-" + col).childNodes[0].src = "images/pic" + num + ".png";
						document.getElementById(i + "-" + col).style.opacity = 1;
						document.getElementById(i + "-" + col).setAttribute("image_id", num);
						document.getElementById(i + "-" + col).setAttribute("img_src", "pic" + num);
					}
				}
			}
			
			allowDrag = true;


			window.setTimeout(function () {
				if (checkCrush() == false) {
					checkAvailableMove();
					//console.log("CHECK CHECK")
				}
			}, 300);
		}

		function checkAvailableMove() {
			available_move = 0;

			// Check same row
			for (r=1; r<=rows.length; r++) {
				// Check from left to right
				for (c=1; c<=cols.length-3; c++) {
					//var img1 = document.getElementById(r + "-" + c);
					//var img2 = document.getElementById(r + "-" + (c + 2));
					//var img3 = document.getElementById(r + "-" + (c + 3));
					//img1.style.border = "none";
					//img2.style.border = "none";
					//img3.style.border = "none";
					checkPossibleMove(r + "-" + c, r + "-" + (c + 2), r + "-" + (c + 3));
				}
				
				// Check from right to left
				for (c=cols.length; c>3; c--) {
					checkPossibleMove(r + "-" + c, r + "-" + (c - 2), r + "-" + (c - 3));
				}
			}

			// Check same column
			for (c=1; c<=cols.length; c++) {
				// Check from top to bottom
				for (r=1; r<=rows.length-3; r++) {
					checkPossibleMove(r + "-" + c, (r+2) + "-" + c, (r+3) + "-" + c);
				}
				
				// Check from bottom to top
				for (r=rows.length; r>3; r--) {
					checkPossibleMove(r + "-" + c, (r-2) + "-" + c, (r-3) + "-" + c);
				}
			}
			
			
			// Check one row below
			for (r=1; r<=rows.length-1; r++) {
				// From left to right
				for (c=1; c<=cols.length-2; c++) {
					checkPossibleMove(r + "-" + c, (r+1) + "-" + (c + 1), (r+1) + "-" + (c + 2));
				}
				
				// From right to left
				for (c=cols.length; c>2; c--) {
					checkPossibleMove(r + "-" + c, (r+1) + "-" + (c - 1), (r+1) + "-" + (c - 2));
				}
			}
			
			// Check one row above
			for (r=rows.length; r>1; r--) {
				// From left to right
				for (c=1; c<=cols.length-2; c++) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c + 1), (r-1) + "-" + (c + 2));
				}
				
				// From right to left
				for (c=cols.length; c>2; c--) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c - 1), (r-1) + "-" + (c - 2));
				}
			}


			
			for (c=1; c<=cols.length-1; c++) {
				// Check 2 row below right side column
				for (r=1; r<=rows.length-2; r++) {
					checkPossibleMove(r + "-" + c, (r+1) + "-" + (c + 1), (r+2) + "-" + (c + 1));
				}
				
				// Check 2 row above right side column
				for (r=rows.length; r>2; r--) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c + 1), (r-2) + "-" + (c + 1));
				}
			}
			
			for (c=cols.length; c>1; c--) {
				// Check 2 row below left side column
				for (r=1; r<=rows.length-2; r++) {
					checkPossibleMove(r + "-" + c, (r+1) + "-" + (c - 1), (r+2) + "-" + (c - 1));
				}
				
				// Check 2 row above left side column
				for (r=rows.length; r>2; r--) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c - 1), (r-2) + "-" + (c - 1));
				}
			}
			
			
			// Check possible crush with left and right column on different row
			for (c=2; c<=cols.length-1; c++) {
				// Check one row below
				for (r=1; r<=rows.length-1; r++) {
					checkPossibleMove(r + "-" + c, (r+1) + "-" + (c-1), (r+1) + "-" + (c+1));
				}
				
				// Check one row above
				for (r=rows.length; r>1; r--) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c-1), (r-1) + "-" + (c+1));
				}
			}
			
			
			// Check possible crush with above and below column on different row
			for (r=2; r<=rows.length-1; r++) {
				// Check one row below
				for (c=1; c<=cols.length-1; c++) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c+1), (r+1) + "-" + (c+1));
				}
				
				// Check one row above
				for (c=cols.length; c>1; c--) {
					checkPossibleMove(r + "-" + c, (r-1) + "-" + (c-1), (r+1) + "-" + (c-1));
				}
			}

			console.log("available_move: " + available_move);
			if (available_move <= 0) {
				showGameMessage("no_more_move");
			} else {
				checkCrush();
			}
		}
		
		function checkPossibleMove(a, b, c) {
			if (document.getElementById(a).getAttribute("image_id") == document.getElementById(b).getAttribute("image_id") && document.getElementById(b).getAttribute("image_id") == document.getElementById(c).getAttribute("image_id")) {
				available_move++;
			}
		}


		function showPopupMessage() {
			if (popup_list.length > 0) {
				document.getElementById("b_close").style.visibility = "hidden";
				document.getElementById("popup_wrapper").style.visibility = "visible";
				document.getElementById("popup_wrapper").style.top = "0%";
				document.getElementById(popup_list[0] + "_msg").style.visibility = "visible";

				if (parseInt(popup_list[0].substr(3, popup_list[0].length)) <= 5) {
					document.getElementById(popup_list[0] + "_tick").style.visibility = "visible";
				}
				
				popup_list.splice(0, 1);
				document.getElementById("b_ok").style.visibility = "visible";
			} else {
				document.getElementById("b_close").style.visibility = "visible";
				document.getElementById("popup_wrapper").style.visibility = "hidden";
				document.getElementById("popup_wrapper").style.top = "200%";
				document.getElementById("b_ok").style.visibility = "hidden";
				
				for (i=1; i<=7; i++) {
					document.getElementById("pic" + i + "_msg").style.visibility = "hidden";
				}

				if (wanted_items.length == 0) {
					//showGameMessage("mission_completed");
					showGameMessage("well_done");
					document.getElementById("b_close").style.visibility = "hidden";
					document.getElementById("mission_completed").currentTime = 0;
					document.getElementById("mission_completed").muted = false;
					document.getElementById("mission_completed").play();
				} else {
					slideImage();
				}				
			}			
		}
		
		function initGame() {
			current_level++;
			//document.getElementById("level_image").style.visibility = "visible";
			
			//$("#level_image").animate({ top: "10%" }, 500);
			//resizeTextComponent('start_scene_instruction', 0.4);
			generateImage(false);
			startGame();
		}
		
		function generateImage(autoShow) {
			for (r=1; r<=6; r++) {
				var row = [];
				
				for (c=1; c<=6; c++) {
					if (document.getElementById(r + "-" + c) != null) {
						document.getElementById("wrapper").removeChild(document.getElementById(r + "-" + c));
					}

					var num = Math.floor(Math.random() * total_available_image) + 1;
					var _div = document.createElement("div");
					_div.id = r + "-" + c;
					_div.setAttribute("coordsX", cols[c-1]);
					_div.setAttribute("coordsY", rows[r-1]);
					_div.setAttribute("image_id", num);
					_div.setAttribute("draggable", false);
					_div.style.opacity = 1;
					_div.classList.add("image_wrapper");
					_div.style.left = cols[c-1] + "%";
					_div.style.top = -(150 + rows[r-1]) + "%";
					_div.addEventListener("mousedown", startDrag);
					_div.addEventListener("touchstart", startDrag);
					//_div.addEventListener("mouseover", trace);
					document.getElementById("wrapper").appendChild(_div);
					
					img = document.createElement("img");
					img.src = "images/pic" + num + ".png";
					_div.setAttribute("img_src", "pic" + num);
					_div.setAttribute("draggable", false);
					img.classList.add("normal");
					_div.appendChild(img);

					
					if (document.getElementById(r + "-" + c + "-star_wrapper") == null) {
						var _div = document.createElement("div");
						_div.id = r + "-" + c + "-star_wrapper";
						_div.classList.add("star_wrapper");
						_div.style.left = cols[c-1] + "%";
						_div.style.top = rows[r-1] + "%";
						document.getElementById("wrapper").appendChild(_div);

						star_img = document.createElement("img");
						star_img.src = "images/star.png";
						star_img.id = r + "-" + c + "-star";
						star_img.style.left = 0;
						star_img.style.top = 0;
						star_img.classList.add("star");
						star_img.setAttribute("draggable", false);
						_div.appendChild(star_img);
						_div.style.visibility = "hidden";
					}
				}
			}
			
			star_img_ready = true;
			
			if (autoShow) {
				showImages();
			}
		}
		
		function regenerateImage() {
			allowDrag = false;
		}
		
		
		function showImages() {
			for (r=1; r<=6; r++) {
				for (c=1; c<=6; c++) {
					var coordsY = (document.getElementById(r + "-" + c).getAttribute("coordsY")) + "%";
					$("#" + r + "-" + c).animate({ top: coordsY }, 1000);
				}
			}
			
			document.getElementById("new_images").currentTime = 0;
			document.getElementById("new_images").muted = false;
			document.getElementById("new_images").play();
			
			window.setTimeout(function () {
				checkAvailableMove();
			}, 2000);
		}
		
		function removeImages(autoGenerate) {
			for (r=1; r<=6; r++) {				
				for (c=1; c<=6; c++) {
					var coordsY = parseInt(document.getElementById(r + "-" + c).getAttribute("coordsY")) + 200 + "%";
					$("#" + r + "-" + c).animate({ top: coordsY }, 1000);
				}
			}
			
			document.getElementById("remove_images").currentTime = 0;
			document.getElementById("remove_images").muted = false;
			document.getElementById("remove_images").play();

			if (autoGenerate) {
				$("#msg_no_more_move").animate({ top: "200%" }, 1000);
				window.setTimeout(function() {
					generateImage(true);
				}, 1000);
			}
			
		}
		
		
		function startGame() {
			document.getElementById("game_frame").style.visibility = "visible";
			//document.getElementById("start_scene").style.display = "none";
			document.getElementById("images_frame").style.visibility = "visible";
			showImages();
		}
		
		
		
		function showGameMessage(msg) {
			allowDrag = false;
			curr_message_div = document.getElementById("msg_" + msg);
			curr_message_div.style.top = 0;
			curr_message_div.style.visibility = "visible";
			
			if (msg == "no_more_move") {
				$(curr_message_div).animate({ top: "36%" }, 500, function() { window.setTimeout(function() {
					removeImages(true);
				}, 1000)});
				
				document.getElementById("hit").currentTime=0;
				document.getElementById("hit").muted = false;
				document.getElementById("hit").play();
			} else if (msg == "well_done") {
				removeImages(false);
				//$(curr_message_div).animate({top: "36%" }, 500);
				$("#msg_well_done").fadeIn("slow");
				document.getElementById("b_next").style.visibility = "visible";
			}
		}
		
		
		function showNextLevel() {
			document.getElementById("game_frame").style.visibility = "hidden";
			document.getElementById("start_scene_instruction").innerHTML = "Collect tiles for each images.";
			document.getElementById("level_image").style.top = "-20%";
			document.getElementById("level_image").src = "images/level" + (current_level + 1) + ".png";
			document.getElementById("start_scene").style.top = -(document.getElementById("start_scene").offsetHeight);
			document.getElementById("start_scene").style.display = "block";
			$("#start_scene").animate({ top: "0%" }, 500, function() { $("#start_scene").after(initGame)});
			makeContentResponsive();
		}
		
		function playAgain() {
			wanted_items = ["pic1", "pic2", "pic3", "pic4", "pic5"];
			unwant_items = ["pic6", "pic7"];
			popup_wanted_list = [];
			popup_unwant_list = [];
			popup_list = [];
			
			
			$(curr_message_div).animate({ top: "145%" }, 500, function() { 
				current_level = 0;
				showNextLevel();
			});
		}