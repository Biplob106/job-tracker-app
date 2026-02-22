let totalJob =document.getElementById('total-job');
let  totalInterview = document.getElementById('total-interview');
let totalRejection = document.getElementById('total-rejection');
let totalFilterbtn = document.getElementById('all-filter-btn');
let interviewFilterbtn = document.getElementById('interview-filter-btn');
let rejectionFilterbtn = document.getElementById('rejected-filter-btn');

function calculateTotal(){
    totalJob.innerText =document.getElementById('allCard').children.length;
}

calculateTotal();
function toggleStyle(id){

        totalFilterbtn.classList.add('bg-white','text-black');
     interviewFilterbtn.classList.add('bg-white','text-black');
      rejectionFilterbtn.classList.add('bg-white','text-black');
    totalFilterbtn.classList.remove('bg-blue-600','text-white');
     interviewFilterbtn.classList.remove('bg-blue-600','text-white');
      rejectionFilterbtn.classList.remove('bg-blue-600','text-white');

      const selected = document.getElementById(id);
      selected.classList.remove('bg-white','text-black');
      selected.classList.add('bg-blue-600','text-white');
  
}

toggleStyle();