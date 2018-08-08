window.onload = function() {

/* ACCOUNT MANAGEMENT */
var accountOption = `<ul class='account-options'>
<li>
  <span class='request-account'>
    <img src='/static/images/request-icon.png'>
  </span>
</li>
<li>
  <span class='edit-account'>
    <img src='/static/images/edit-icon.png'>
  </span>
</li>
<li>
  <span class='delete-account'>
    <img src='/static/images/delete-icon.png'>
  </span>
</li>
</ul>`;

$('#account-table').find('.v2-table__row td:last-child').append(accountOption)

}