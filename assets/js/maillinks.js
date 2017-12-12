
function gen_mail_to_link_with_subject(lhs,rhs,subject) {
  document.write("<a href=\"mailto");
  document.write(":" + lhs + "@");
  document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}

function gen_mail_to_link_with_subject_and_text(lhs,rhs,subject,text) {
  document.write("<a href=\"mailto");
  document.write(":" + lhs + "@");
  document.write(rhs + "?subject=" + subject + "\">" + text + "<\/a>");
}
