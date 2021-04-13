	//let person = {
	//	bride_name: name,
	//	bride_price: price,
	//	letter_to_bride: grletter
	//}

	  const startingBid = document.getElementById("startingBid");
      const age = document.getElementsByName("age");   	  
	  const grrep = document.getElementsByClassName("grrep"); 
	  
	      const skills = document.getElementsByClassName("grskills"); 
	  

      const calculate = () => {
      const grname = document.getElementById("grname").value;
      const gredu = document.getElementById("gredu").value
      const grfam = document.getElementById("grfam").value;
      const grletter =document.getElementById("grletter").value;
	
      let price = Number(startingBid.value);
      price = getRadioValue(age, price);  	  
      price *= gredu;
      price *= grfam;
	  price += getCheckboxValuesReduce(grrep, price)
	  
	  price += getCheckboxValuesForLoop(skills, price) 
	  
		

      res.innerText = `The price for your bride ${price} $. His name is ${grname}. Your love letter is "${grletter}"`;
	 
      }
	  
	  document.getElementById("btn").addEventListener("click", calculate)
	  
     

      const getRadioValue = (node_list, price) => { 
      node_list.forEach(item => {
      if (item.checked) {
            price = price * Number(item.value)
      }
      })
      return price;
      }
		
	  const getCheckboxValuesReduce = (html_collection, price) => { 
      let list = Array.from(html_collection)  
      let result = list.reduce((price, item) => {  
        if (item.checked) {
            return price * Number(item.value)   
        }
	  }, price)
      return result;
	  }    

    const getCheckboxValuesForLoop = (html_collection, price) => { 
    for (let i=0; i < html_collection.length; i++) {  
        if (html_collection[i].checked) {
            price = price + Number(html_collection[i].value)
        }
    }
    console.log (price);

    }




   




