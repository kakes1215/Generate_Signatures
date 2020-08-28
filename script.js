function handleData() {
    var form = document.getElementById("frm1");
    var fn = form.elements[0].value;
    var title = form.elements[1].value;
    var cellPhoneNum = form.elements[2].value;
    var cellPhoneNoHyphens = cellPhoneNum.toString().replace('-', '')
    var directLine = form.elements[3].value;
    var directLineNoHyphens = directLine.toString().replace('-', '')
    var address = '150 N Market St. Wichita, KS 67202'
    var address_link = 'https://www.google.com/maps/place/150+N+Market+St,+Wichita,+KS+67202/@37.6875767,-97.3388842,17z/data=!3m1!4b1!4m5!3m4!1s0x87bae3c213cd7f51:0x57ef5a084a7b960e!8m2!3d37.6875767!4d-97.3366955'

    var signature = `<br><br><table style="width:500px;font-size:10pt;font-family:Arial;" cellpadding="0" cellspacing="0"> <tbody style="width:100%;"> <tr> <td style="font-size:10pt;line-height:20px;font-family:Arial;width:514px;padding-bottom:10px;vertical-align:top;" valign="top" colspan="2"><b> <span style="font-size:10pt;font-family:Arial;color:#313e49;">${fn}</span></b><br> ${title} </b><br> <span style="font-size:10pt;font-family:Arial;color:#313e49;">Cell: <a href="tel:${cellPhoneNoHyphens}" style="text-decoration:none;color:#313e49;">${cellPhoneNum}</a> <span style="margin-left:15px;">Direct: <a href="tel:${directLineNoHyphens}" style="text-decoration:none;color:#313e49;">${directLine}</a></span> </span> </td> </tr> <tr> <td style="width: 80%;display:block;height: 7px;background: #cfd2d3;"></td> </tr> <tr> <td style="vertical-align:top; text-align:left;" valign="top"> <table cellpadding="0" cellspacing="0"> <tr> <td style="width: 100px; padding-top: 15px; padding-right: 15px;"> <a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;"> <img src="https://weigandcommercial.com/assets/smaller-logo.png" style="width:100px;"> </a> </td> <td style="width: 385px;"> <span style="font-size:10pt;font-family:Arial;color:#313e49;width:77%;line-height:20px;padding-top:15px;">J.P. Weigand & Sons, Inc. Commercial Division<br> <a href="${address_link}" target="_blank" style="text-decoration:none;color:#313e49;">${address}</a><br><b> <a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;">WeigandCommercial.com</a></b> </span> </td> </tr> </table> <br> <span style="font-size:6pt;font-family:Arial;color:#313e49;width:77%;"> This email is intended for the use of the individual or entity to which it is addressed and may contain information that is privileged, confidential and exempt from disclosure under applicable law. If the reader of this email message is not the intended recipient, you are hereby notified that any dissemination, distribution or copying of this communication is prohibited. If you have received this email in error, please notify us immediately by telephone at 316-262-6400 and also indicate the sender's name. Thank you. </span> </td> </tr> </tbody></table><html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"><head><!--[if gte mso 9]><xml><mso:CustomDocumentProperties><mso:_dlc_DocId msdt:dt="string">ZH5VYKZDD7K4-1937837267-2090</mso:_dlc_DocId><mso:_dlc_DocIdItemGuid msdt:dt="string">2667d998-d3ef-426d-a46d-fe855f85d653</mso:_dlc_DocIdItemGuid><mso:_dlc_DocIdUrl msdt:dt="string">https://weigandict.sharepoint.com/sites/WeigandITTeam/_layouts/15/DocIdRedir.aspx?ID=ZH5VYKZDD7K4-1937837267-2090, ZH5VYKZDD7K4-1937837267-2090</mso:_dlc_DocIdUrl></mso:CustomDocumentProperties></xml><![endif]--></head>`

    document.getElementById("html-code").value = signature;
}

function copyCode() {
    var htmlCode = document.getElementById("html-code")
    htmlCode.select();
    document.execCommand("copy")
    alert("Code was copied to your clipboard")

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function startDownload() {
    var text = document.getElementById("html-code").value;
    var filename = "EmailSignature.html";

    download(filename, text);

}