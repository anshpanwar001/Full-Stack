let jobPostForm = document.querySelector("#job-post-form");
let featuredJob = document.querySelector("#featured-jobs");


jobPostForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const title = document.querySelector("#job-title");
        const companyName = document.querySelector("#company-name");
        const jobLocation = document.querySelector("#job-location");
        const employmentType = document.querySelector("#employment-type");
        const salaryRange = document.querySelector("#salary-range");

        if(!title || !companyName){
            return;
        }

        const card = document.createElement("article");

        card.className = "job-card";

        const h3 = document.createElement("h3");
        h3.textContent = title.value;

        const h4 = document.createElement("h4");
        h4.textContent = companyName.value;

        const p = document.createElement("p");
        p.textContent = `${employmentType.value} · ${salaryRange.value} · ${jobLocation.value}`;

        const btn = document.createElement("button");
        btn.className = "apply-btn";
        btn.textContent = "Apply Now";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        card.append(h3, h4, p, btn, deleteBtn);
        featuredJob.appendChild(card);
        
        jobPostForm.reset();
        
})

featuredJob.addEventListener("click", (e) => {
        if (!e.target.classList.contains("delete-btn")) {
                return;
        }

        const card = e.target.closest(".job-card");
        if (card) {
                card.remove();
        }
});
