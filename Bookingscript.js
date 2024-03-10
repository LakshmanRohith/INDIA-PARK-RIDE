document.addEventListener("DOMContentLoaded", function () {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const areaSelect = document.getElementById("area");
  
    // Function to populate cities based on selected state
    function populateCities() {
      const state = stateSelect.value;
      // You can fetch cities from an API here instead of using static data
      const cities = getCitiesFromAPI(state);
      citySelect.innerHTML = "";
      cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
      populateAreas();
    }
  
    // Function to populate areas based on selected city
    function populateAreas() {
      const city = citySelect.value;
      // You can fetch areas from an API here instead of using static data
      const areas = getAreasFromAPI(city);
      areaSelect.innerHTML = "";
      areas.forEach(area => {
        const option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        areaSelect.appendChild(option);
      });
    }
  
    // Sample function to get cities from an API
    function getCitiesFromAPI(state) {
      // You would fetch data from an API using fetch() or other methods
      // For demo purposes, returning static data
      if (state === "Andhra Pradesh") {
        return ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Rajahmundry","Tirupati","Kakinada","Eluru","Anantapur","Ongole","Kadapa","Machilipatnam","Chittoor","Vizianagaram","Tenali","Proddatur","Adoni","Bhimavaram","Srikakulam"
      ];
      } else if (state === "Telangana") {
        return [
          " Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Siddipet", "Miryalaguda","Suryapet",
          "Jagtial","Bodhan","Mancherial","Peddapalli","Kamareddy","Sangareddy","Bhongir","Vikarabad"

        ];
      } else if (state === "Tamilnadu") {
        return ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Thoothukudi","Thanjavur","Dindigul","Karur","Nagercoil","Kanchipuram","Tiruvannamalai","Hosur","Pollachi","Rajapalayam","Cuddalore","Neyveli"
      ];
      } else if (state === "Kerala") {
        return ["Thiruvananthapuram ","Kochi" ,"Kozhikode" ,"Thrissur" ,"Kollam" ,"Kannur" ,"Alappuzha","Palakkad" ,"Kottayam","Malappuram","Pathanamthitta","Wayanad","Kasaragod",
        "Malappuram","Idukki","Perinthalmanna","Thalasser","Ponnani","Thodupuzha","Changanassery"
      ];
      } else if (state === "Karnataka") {
        return ["Bengaluru","Mysuru","Mangaluru","Hubballi-Dharwad","Belagavi","Kalaburagi","Davanagere","Ballari","Vijayapura","Shivamogga","Tumakuru","Hassan","Chitradurga","Udupi","Raichur","Bidar","Bagalkot","Gadag","Haveri","Chikkamagaluru"
        ];
      } else if (state === "Mumbai") {
        return ["Andheri", "Bandra","Borivali","Chembur","Dadar", "Goregaon","Kandivali", "Malad" ,"Mulund", "Powai", "Thane" ,"Vashi"
        ];
      }
      return [];
    }
  
    // Sample function to get areas from an API
    function getAreasFromAPI(city) {
      // You would fetch data from an API using fetch() or other methods
      // For demo purposes, returning static data
      switch (city) {
        case "Visakhapatnam":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Vijayawada":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Guntur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Nellore":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Kurnool":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Rajahmundry":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Tirupati":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Kakinada":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Eluru":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Anantapur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Ongole":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Kadapa":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Machilipatnam":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Chittoor":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Vizianagaram":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Tenali":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Proddatur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Adoni":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Bhimavaram":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Srikakulam":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
    case "Hyderabad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Warangal":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Nizamabad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Karimnagar":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Ramagundam":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Khammam":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Mahbubnagar":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Nalgonda":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Adilabad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Siddipet":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Miryalaguda":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Suryapet":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Jagtial":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Bodhan":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Mancherial":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Peddapalli":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kamareddy":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Sangareddy":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Bhongir":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Vikarabad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Thiruvananthapuram":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kochi":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kozhikode":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Thrissur":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kollam":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kannur":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Alappuzha":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Palakkad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kottayam":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Malappuram":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Pathanamthitta":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Wayanad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kasaragod":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Idukki":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Perinthalmanna":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Thalasser":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Ponnani":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Thodupuzha":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Changanassery":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Bengaluru":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Mysuru":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Mangaluru":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Hubballi-Dharwad":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Belagavi":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Kalaburagi":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Davanagere":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Ballari":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Vijayapura":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Shivamogga":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Tumakuru":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Hassan":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Chitradurga":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Udupi":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Raichur":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Bidar":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Bagalkot":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Gadag":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Haveri":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
  case "Chikkamagaluru":
      return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
      case "Chennai":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Coimbatore":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Madurai":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Tiruchirappalli":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Salem":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Tirunelveli":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Erode":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Vellore":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Thoothukudi":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Thanjavur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Dindigul":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Karur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Nagercoil":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Kanchipuram":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Tiruvannamalai":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Hosur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Pollachi":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Rajapalayam":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Cuddalore":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Neyveli":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
 case "Andheri":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Bandra":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Borivali":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Chembur":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Dadar":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Goregaon":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Kandivali":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Malad":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Mulund":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Powai":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Thane":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];
case "Vashi":
    return ["Banjara Hills", "Kazipet", "Bodhan", "Jagital", "Kollapur", "Bhongir", "Nirmal", "Sirsilla", "Medak", "Dubbak", "Asifabad", "Nirmal", "Suryapet", "Devarkadra", "Jadcherla", "Madhira", "Wyra", "Subedari", "Bommakal", "Korutla"];

  
        default:
          return [];
      }
    }
  
    // Event listeners for state and city selection
    stateSelect.addEventListener("change", populateCities);
    citySelect.addEventListener("change", populateAreas);
  
    // Initial population of cities and areas
    populateCities();
  });
