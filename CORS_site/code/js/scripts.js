"use strict";

function displayRep(rep, contactsRow) {
  $(contactsRow).append(`
                        <div class="col-lg-4"><h2 class="fw-normal">${rep.region}</h2>
                          <p class="text-start">
                            name: ${rep.fname} ${rep.lname}
                            <br />phone: ${rep.phone}
                            <br />email: <a href="mailto:${rep.email}">${rep.email}</a>
                          </p>
                          </div>
                      `);
}

$(document).ready(() => {
  let contactsRow = $('#contacts-row');

  $.getJSON("https://YOUR_DOMAIN/data/reps.json", reps => {
    reps.forEach(rep => {
      displayRep(rep, contactsRow);
    });
  });
});