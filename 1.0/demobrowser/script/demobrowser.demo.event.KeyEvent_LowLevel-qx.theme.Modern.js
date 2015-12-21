(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.event.KeyEvent_LowLevel","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.demo.event.KeyEvent_LowLevel-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"bd9d01dc02b1"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['bd9d01dc02b1']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]}};
(function(){var l=".",k="()",j="[Class ",h=".prototype",g="toString",f="qx.Bootstrap",e="]",d="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return j+this.classname+e;
},createNamespace:function(name,m){var o=name.split(l);
var parent=window;
var n=o[0];

for(var i=0,p=o.length-1;i<p;i++,n=o[i]){if(!parent[n]){parent=parent[n]={};
}else{parent=parent[n];
}}parent[n]=m;
return n;
},setDisplayName:function(q,r,name){q.displayName=r+l+name+k;
},setDisplayNames:function(a,b){for(var name in a){var c=a[name];

if(c instanceof Function){c.displayName=b+l+name+k;
}}},define:function(name,s){if(!s){var s={statics:{}};
}var x;
var v=null;
qx.Bootstrap.setDisplayNames(s.statics,name);

if(s.members){qx.Bootstrap.setDisplayNames(s.members,name+h);
x=s.construct||new Function;
var t=s.statics;

for(var u in t){x[u]=t[u];
}v=x.prototype;
var y=s.members;

for(var u in y){v[u]=y[u];
}}else{x=s.statics||{};
}var w=this.createNamespace(name,x);
x.name=x.classname=name;
x.basename=w;
x.$$type=d;
if(!x.hasOwnProperty(g)){x.toString=this.genericToString;
}if(s.defer){s.defer(x,v);
}qx.Bootstrap.$$registry[name]=s.statics;
return x;
}};
qx.Bootstrap.define(f,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var n="qx.allowUrlSettings",m="&",l="qx.core.Setting",k="qx.allowUrlVariants",j="qx.propertyDebugLevel",h="qxsetting",g=":",f=".";
qx.Bootstrap.define(l,{statics:{__dz:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__dz[a]){this.__dz[a]={};
}else if(this.__dz[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__dz[a].defaultValue=b;
},get:function(s){var t=this.__dz[s];

if(t===undefined){throw new Error('Setting "'+s+'" is not defined.');
}
if(t.value!==undefined){return t.value;
}return t.defaultValue;
},set:function(d,e){if((d.split(f)).length<2){throw new Error('Malformed settings key "'+d+'". Must be following the schema "namespace.key".');
}
if(!this.__dz[d]){this.__dz[d]={};
}this.__dz[d].value=e;
},__dA:function(){if(window.qxsettings){for(var c in window.qxsettings){this.set(c,window.qxsettings[c]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(r){}this.__dB();
}},__dB:function(){if(this.get(n)!=true){return;
}var p=document.location.search.slice(1).split(m);

for(var i=0;i<p.length;i++){var o=p[i].split(g);

if(o.length!=3||o[0]!=h){continue;
}this.set(o[1],decodeURIComponent(o[2]));
}}},defer:function(q){q.define(n,false);
q.define(k,false);
q.define(j,0);
q.__dA();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dy:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__dy();
}});
})();
(function(){var A="on",z="off",y="|",x="default",w="object",u="&",t="qx.aspects",s="$",r="qx.allowUrlVariants",q="qx.debug",j="qx.client",p="qx.dynlocale",n="webkit",h="qxvariant",g="opera",m=":",k="qx.core.Variant",o="mshtml",f="gecko";
qx.Bootstrap.define(k,{statics:{__jk:{},__jl:{},compilerIsSet:function(){return true;
},define:function(a,b,c){{};

if(!this.__jk[a]){this.__jk[a]={};
}else{}this.__jk[a].allowedValues=b;
this.__jk[a].defaultValue=c;
},get:function(d){var e=this.__jk[d];
{};

if(e.value!==undefined){return e.value;
}return e.defaultValue;
},__jm:function(){if(window.qxvariants){for(var B in qxvariants){{};

if(!this.__jk[B]){this.__jk[B]={};
}this.__jk[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(K){}this.__jn(this.__jk);
}},__jn:function(){if(qx.core.Setting.get(r)!=true){return;
}var M=document.location.search.slice(1).split(u);

for(var i=0;i<M.length;i++){var N=M[i].split(m);

if(N.length!=3||N[0]!=h){continue;
}var O=N[1];

if(!this.__jk[O]){this.__jk[O]={};
}this.__jk[O].value=decodeURIComponent(N[2]);
}},select:function(C,D){{};

for(var E in D){if(this.isSet(C,E)){return D[E];
}}
if(D[x]!==undefined){return D[x];
}{};
},isSet:function(F,G){var H=F+s+G;

if(this.__jl[H]!==undefined){return this.__jl[H];
}var J=false;
if(G.indexOf(y)<0){J=this.get(F)===G;
}else{var I=G.split(y);

for(var i=0,l=I.length;i<l;i++){if(this.get(F)===I[i]){J=true;
break;
}}}this.__jl[H]=J;
return J;
},__jo:function(v){return typeof v===w&&v!==null&&v instanceof Array;
},__jp:function(v){return typeof v===w&&v!==null&&!(v instanceof Array);
},__jq:function(P,Q){for(var i=0,l=P.length;i<l;i++){if(P[i]==Q){return true;
}}return false;
}},defer:function(L){L.define(j,[f,o,g,n],qx.bom.client.Engine.NAME);
L.define(q,[A,z],A);
L.define(t,[A,z],z);
L.define(p,[A,z],A);
L.__jm();
}});
})();
(function(){var M="qx.client",L='"',K="valueOf",J="toLocaleString",I="isPrototypeOf",H="",G="toString",F="qx.lang.Object",E='\", "',D="hasOwnProperty";
qx.Bootstrap.define(F,{statics:{empty:function(bd){{};

for(var be in bd){if(bd.hasOwnProperty(be)){delete bd[be];
}}},isEmpty:qx.core.Variant.select(M,{"gecko":function(S){{};
return S.__count__===0;
},"default":function(f){{};

for(var g in f){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(M,{"gecko":function(W,X){{};
return W.__count__>=X;
},"default":function(N,O){{};

if(O<=0){return true;
}var length=0;

for(var P in N){if((++length)>=O){return true;
}}return false;
}}),getLength:qx.core.Variant.select(M,{"gecko":function(bk){{};
return bk.__count__;
},"default":function(bf){{};
var length=0;

for(var bg in bf){length++;
}return length;
}}),_shadowedKeys:[I,D,J,G,K],getKeys:qx.core.Variant.select(M,{"mshtml":function(Y){var ba=[];

for(var bc in Y){ba.push(bc);
}var bb=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bb.call(Y,a[i])){ba.push(a[i]);
}}return ba;
},"default":function(h){var j=[];

for(var k in h){j.push(k);
}return j;
}}),getKeysAsString:function(x){{};
var y=qx.lang.Object.getKeys(x);

if(y.length==0){return H;
}return L+y.join(E)+L;
},getValues:function(T){{};
var V=[];
var U=this.getKeys(T);

for(var i=0,l=U.length;i<l;i++){V.push(T[U[i]]);
}return V;
},mergeWith:function(z,A,B){{};

if(B===undefined){B=true;
}
for(var C in A){if(B||z[C]===undefined){z[C]=A[C];
}}return z;
},carefullyMergeWith:function(v,w){{};
return qx.lang.Object.mergeWith(v,w,false);
},merge:function(m,n){{};
var o=arguments.length;

for(var i=1;i<o;i++){qx.lang.Object.mergeWith(m,arguments[i]);
}return m;
},clone:function(bh){{};
var bi={};

for(var bj in bh){bi[bj]=bh[bj];
}return bi;
},invert:function(s){{};
var t={};

for(var u in s){t[s[u].toString()]=u;
}return t;
},getKeyFromValue:function(p,q){{};

for(var r in p){if(p.hasOwnProperty(r)&&p[r]===q){return r;
}}return null;
},contains:function(Q,R){{};
return this.getKeyFromValue(Q,R)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(d){{};
var e={};

for(var i=0,l=d.length;i<l;i++){{};
e[d[i].toString()]=true;
}return e;
}}});
})();
(function(){var q="Function",p="Boolean",o="Error",n="Number",m="Array",l="Date",k="RegExp",j="String",i="Object",h="qx.lang.Type",g="string";
qx.Bootstrap.define(h,{statics:{__iF:{"[object String]":j,"[object Array]":m,"[object Object]":i,"[object RegExp]":k,"[object Number]":n,"[object Boolean]":p,"[object Date]":l,"[object Function]":q,"[object Error]":o},getClass:function(c){var d=Object.prototype.toString.call(c);
return (this.__iF[d]||d.slice(8,-1));
},isString:function(t){return (t!==null&&(typeof t===g||this.getClass(t)==j||t instanceof String||(!!t&&!!t.$$isString)));
},isArray:function(e){return (e!==null&&(e instanceof Array||(e&&qx.Class.hasInterface(e.constructor,qx.data.IListData))||this.getClass(e)==m||(!!e&&!!e.$$isArray)));
},isObject:function(r){return (r!==undefined&&r!==null&&this.getClass(r)==i);
},isRegExp:function(u){return this.getClass(u)==k;
},isNumber:function(s){return (s!==null&&(this.getClass(s)==n||s instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==p||a instanceof Boolean));
},isDate:function(b){return (b!==null&&(this.getClass(b)==l||b instanceof Date));
},isError:function(f){return (f!==null&&(this.getClass(f)==o||f instanceof Error));
},isFunction:function(v){return this.getClass(v)==q;
}}});
})();
(function(){var p="[Class ",o="]",n="$$init_",m="toString",k="constructor",j="singleton",h=".prototype",g="extend",f="Class",e="destruct",b="qx.Class",d="static",c="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,bW){if(!bW){var bW={};
}if(bW.include&&!(bW.include instanceof Array)){bW.include=[bW.include];
}if(bW.implement&&!(bW.implement instanceof Array)){bW.implement=[bW.implement];
}if(!bW.hasOwnProperty(g)&&!bW.type){bW.type=d;
}{};
var bY=this.__bt(name,bW.type,bW.extend,bW.statics,bW.construct,bW.destruct);
if(bW.extend){if(bW.properties){this.__bv(bY,bW.properties,true);
}if(bW.members){this.__bx(bY,bW.members,true,true,false);
}if(bW.events){this.__bu(bY,bW.events,true);
}if(bW.include){for(var i=0,l=bW.include.length;i<l;i++){this.__bA(bY,bW.include[i],false);
}}}if(bW.settings){for(var bX in bW.settings){qx.core.Setting.define(bX,bW.settings[bX]);
}}if(bW.variants){for(var bX in bW.variants){qx.core.Variant.define(bX,bW.variants[bX].allowedValues,bW.variants[bX].defaultValue);
}}if(bW.implement){for(var i=0,l=bW.implement.length;i<l;i++){this.__bz(bY,bW.implement[i]);
}}{};
if(bW.defer){bW.defer.self=bY;
bW.defer(bY,bY.prototype,{add:function(name,bK){var bL={};
bL[name]=bK;
qx.Class.__bv(bY,bL,true);
}});
}return bY;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(G,H){{};
qx.Class.__bA(G,H,false);
},patch:function(X,Y){{};
qx.Class.__bA(X,Y,true);
},isSubClassOf:function(bU,bV){if(!bU){return false;
}
if(bU==bV){return true;
}
if(bU.prototype instanceof bV){return true;
}return false;
},getPropertyDefinition:function(W,name){while(W){if(W.$$properties&&W.$$properties[name]){return W.$$properties[name];
}W=W.superclass;
}return null;
},getProperties:function(bS){var bT=[];

while(bS){if(bS.$$properties){bT.push.apply(bT,qx.lang.Object.getKeys(bS.$$properties));
}bS=bS.superclass;
}return bT;
},getByProperty:function(Q,name){while(Q){if(Q.$$properties&&Q.$$properties[name]){return Q;
}Q=Q.superclass;
}return null;
},hasProperty:function(C,name){return !!this.getPropertyDefinition(C,name);
},getEventType:function(s,name){var s=s.constructor;

while(s.superclass){if(s.$$events&&s.$$events[name]!==undefined){return s.$$events[name];
}s=s.superclass;
}return null;
},supportsEvent:function(R,name){return !!this.getEventType(R,name);
},hasOwnMixin:function(v,w){return v.$$includes&&v.$$includes.indexOf(w)!==-1;
},getByMixin:function(bF,bG){var bH,i,l;

while(bF){if(bF.$$includes){bH=bF.$$flatIncludes;

for(i=0,l=bH.length;i<l;i++){if(bH[i]===bG){return bF;
}}}bF=bF.superclass;
}return null;
},getMixins:function(bO){var bP=[];

while(bO){if(bO.$$includes){bP.push.apply(bP,bO.$$flatIncludes);
}bO=bO.superclass;
}return bP;
},hasMixin:function(bM,bN){return !!this.getByMixin(bM,bN);
},hasOwnInterface:function(bI,bJ){return bI.$$implements&&bI.$$implements.indexOf(bJ)!==-1;
},getByInterface:function(D,E){var F,i,l;

while(D){if(D.$$implements){F=D.$$flatImplements;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getInterfaces:function(bQ){var bR=[];

while(bQ){if(bQ.$$implements){bR.push.apply(bR,bQ.$$flatImplements);
}bQ=bQ.superclass;
}return bR;
},hasInterface:function(q,r){return !!this.getByInterface(q,r);
},implementsInterface:function(bv,bw){var bx=bv.constructor;

if(this.hasInterface(bx,bw)){return true;
}
try{qx.Interface.assertObject(bv,bw);
return true;
}catch(S){}
try{qx.Interface.assert(bx,bw,false);
return true;
}catch(bm){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bp:null,__bq:null,__br:function(){},__bs:function(){},__bt:function(name,ba,bb,bc,bd,be){var bj;

if(!bb&&true){bj=bc||{};
qx.Bootstrap.setDisplayNames(bj,name);
}else{bj={};

if(bb){if(!bd){bd=this.__bB();
}bj=this.__bD(bd,name,ba);
qx.Bootstrap.setDisplayName(bd,name,k);
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bk;

for(var i=0,a=qx.lang.Object.getKeys(bc),l=a.length;i<l;i++){bk=a[i];
var bg=bc[bk];
{bj[bk]=bg;
};
}}}var bi=qx.Bootstrap.createNamespace(name,bj,false);
bj.name=bj.classname=name;
bj.basename=bi;
bj.$$type=f;

if(ba){bj.$$classtype=ba;
}if(!bj.hasOwnProperty(m)){bj.toString=this.genericToString;
}
if(bb){var bl=bb.prototype;
var bf=this.__bC();
bf.prototype=bl;
var bh=new bf;
bj.prototype=bh;
bh.name=bh.classname=name;
bh.basename=bi;
bd.base=bj.superclass=bb;
bd.self=bj.constructor=bh.constructor=bj;
if(be){{};
bj.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,e);
}}this.$$registry[name]=bj;
return bj;
},__bu:function(by,bz,bA){var bB,bB;
{};

if(by.$$events){for(var bB in bz){by.$$events[bB]=bz[bB];
}}else{by.$$events=bz;
}},__bv:function(I,J,K){var M;

if(K===undefined){K=false;
}var L=!!I.$$propertiesAttached;

for(var name in J){M=J[name];
{};
M.name=name;
if(!M.refine){if(I.$$properties===undefined){I.$$properties={};
}I.$$properties[name]=M;
}if(M.init!==undefined){I.prototype[n+name]=M.init;
}if(M.event!==undefined){var event={};
event[M.event]=c;
this.__bu(I,event,K);
}if(M.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(L){qx.core.Property.attachMethods(I,name,M);
}}},__bw:null,__bx:function(bn,bo,bp,bq,br){var bs=bn.prototype;
var bu,bt;
qx.Bootstrap.setDisplayNames(bo,bn.classname+h);

for(var i=0,a=qx.lang.Object.getKeys(bo),l=a.length;i<l;i++){bu=a[i];
bt=bo[bu];
{};
if(bq!==false&&bt instanceof Function&&bt.$$type==null){if(br==true){bt=this.__by(bt,bs[bu]);
}else{if(bs[bu]){bt.base=bs[bu];
}bt.self=bn;
}{};
}bs[bu]=bt;
}},__by:function(t,u){if(u){return function(){var cb=t.base;
t.base=u;
var ca=t.apply(this,arguments);
t.base=cb;
return ca;
};
}else{return t;
}},__bz:function(N,O){{};
var P=qx.Interface.flatten([O]);

if(N.$$implements){N.$$implements.push(O);
N.$$flatImplements.push.apply(N.$$flatImplements,P);
}else{N.$$implements=[O];
N.$$flatImplements=P;
}},__bA:function(cc,cd,ce){{};

if(this.hasMixin(cc,cd)){return;
}var cg=qx.Mixin.flatten([cd]);
var cf;

for(var i=0,l=cg.length;i<l;i++){cf=cg[i];
if(cf.$$events){this.__bu(cc,cf.$$events,ce);
}if(cf.$$properties){this.__bv(cc,cf.$$properties,ce);
}if(cf.$$members){this.__bx(cc,cf.$$members,ce,ce,ce);
}}if(cc.$$includes){cc.$$includes.push(cd);
cc.$$flatIncludes.push.apply(cc.$$flatIncludes,cg);
}else{cc.$$includes=[cd];
cc.$$flatIncludes=cg;
}},__bB:function(){function B(){arguments.callee.base.apply(this,arguments);
}return B;
},__bC:function(){return function(){};
},__bD:function(x,name,y){var z;
var A=function(){var V=arguments.callee.constructor;
{};
if(!V.$$propertiesAttached){qx.core.Property.attach(V);
}var U=V.$$original.apply(this,arguments);
if(V.$$includes){var T=V.$$flatIncludes;

for(var i=0,l=T.length;i<l;i++){if(T[i].$$constructor){T[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return U;
};
{};
if(y===j){A.getInstance=this.getInstance;
}A.$$original=x;
x.wrapper=A;
return A;
}},defer:function(bC){var bD,bC,bE;
{};
}});
})();
(function(){var F="other",E="widgets",D="fonts",C="appearances",B="qx.Theme",A="]",z="[Theme ",y="colors",x="decorations",w="Theme",t="meta",v="borders",u="icons";
qx.Class.define(B,{statics:{define:function(name,O){if(!O){var O={};
}O.include=this.__ou(O.include);
O.patch=this.__ou(O.patch);
{};
var P={$$type:w,name:name,title:O.title,toString:this.genericToString};
if(O.extend){P.supertheme=O.extend;
}P.basename=qx.Bootstrap.createNamespace(name,P);
this.__ox(P,O);
this.__ov(P,O);
this.$$registry[name]=P;
for(var i=0,a=O.include,l=a.length;i<l;i++){this.include(P,a[i]);
}
for(var i=0,a=O.patch,l=a.length;i<l;i++){this.patch(P,a[i]);
}},__ou:function(Q){if(!Q){return [];
}
if(qx.lang.Type.isArray(Q)){return Q;
}else{return [Q];
}},__ov:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.lang.Object.mergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return z+this.name+A;
},__ow:function(G){for(var i=0,H=this.__oy,l=H.length;i<l;i++){if(G[H[i]]){return H[i];
}}},__ox:function(b,c){var f=this.__ow(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||F;
if(!f){return;
}var h=function(){};
if(c.extend){h.prototype=new c.extend.$$clazz;
}var g=h.prototype;
var e=c[f];
for(var d in e){g[d]=e[d];
if(g[d].base){{};
g[d].base=c.extend;
}}b.$$clazz=h;
b[f]=new h;
},$$registry:{},__oy:[y,v,x,D,u,E,C,t],__oz:null,__oA:null,__oB:function(){},patch:function(j,k){var n=this.__ow(k);

if(n!==this.__ow(j)){throw new Error("The mixins '"+j.name+"' are not compatible '"+k.name+"'!");
}var m=k[n];
var o=j.$$clazz.prototype;

for(var p in m){o[p]=m[p];
}},include:function(I,J){var L=J.type;

if(L!==I.type){throw new Error("The mixins '"+I.name+"' are not compatible '"+J.name+"'!");
}var K=J[L];
var M=I.$$clazz.prototype;

for(var N in K){if(M[N]!==undefined){continue;
}M[N]=K[N];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var cK=';',cJ='computed=this.',cI='=value;',cH='this.',cG="set",cF="setThemed",cE="setRuntime",cD="init",cC='if(this.',cB='delete this.',bL='!==undefined)',bK='}',bJ="resetThemed",bI='else if(this.',bH="string",bG='return this.',bF="reset",bE="boolean",bD="resetRuntime",bC='!==undefined){',cR="refresh",cS='=true;',cP="",cQ="this.",cN='old=this.',cO="();",cL='else ',cM='if(old===undefined)old=this.',cT='old=computed=this.',cU="return this.",ck="get",cj='(value);',cm=";",cl="(a[",co='if(old===computed)return value;',cn='if(old===undefined)old=null;',cq=' of an instance of ',cp=' is not (yet) ready!");',ci="]);",ch='!==inherit){',t='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',u='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',v='value !== null && value.nodeType === 9 && value.documentElement',w='===value)return value;',x='value !== null && value.$$type === "Mixin"',y='return init;',z='var init=this.',A='value !== null && value.nodeType === 1 && value.attributes',B="Error in property ",C='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dd='.validate.call(this, value);',dc='qx.core.Assert.assertInstance(value, Date, msg) || true',db='else{',da=" in method ",dh='qx.core.Assert.assertInstance(value, Error, msg) || true',dg='=computed;',df='Undefined value is not allowed!',de='(backup);',dj='if(computed===inherit){',di="inherit",bc='Is invalid!',bd='if(value===undefined)prop.error(this,2,"',ba='var computed, old=this.',bb='else if(computed===undefined)',bg="': ",bh=" of class ",be='value !== null && value.nodeType !== undefined',bf='===undefined)return;',X='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',Y="')){",K='qx.core.Assert.assertPositiveInteger(value, msg) || true',J='else this.',M='value=this.',L='","',G='if(init==qx.core.Property.$$inherit)init=null;',F='value !== null && value.$$type === "Interface"',I='var inherit=prop.$$inherit;',H="', qx.event.type.Data, [computed, old]",E="$$useinit_",D='computed=undefined;delete this.',bm='",value);',bn='computed=value;',bo="$$runtime_",bp='Requires exactly one argument!',bi=';}',bj="$$user_",bk='){',bl='qx.core.Assert.assertArray(value, msg) || true',bq='if(computed===undefined||computed===inherit){',br='qx.core.Assert.assertPositiveNumber(value, msg) || true',U=".prototype",T="Boolean",S=")}",R='(computed, old, "',Q='return value;',P='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',O="if(reg.hasListener(this, '",N='Does not allow any arguments!',W=')a[i].',V="()",bs="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bt='.$$properties.',bu='value !== null && value.$$type === "Theme"',bv="var reg=qx.event.Registration;",bw="())",bx='return null;',by='qx.core.Assert.assertObject(value, msg) || true',bz='");',bA='qx.core.Assert.assertString(value, msg) || true',bB='var pa=this.getLayoutParent();if(pa)computed=pa.',bP='value !== null && value.$$type === "Class"',bO='qx.core.Assert.assertFunction(value, msg) || true',bN='!==undefined&&',bM='var computed, old;',bT='var backup=computed;',bS='}else{',bR="object",bQ="$$init_",bV="$$theme_",bU='if(computed===undefined)computed=null;',cd='qx.core.Assert.assertMap(value, msg) || true',ce='qx.core.Assert.assertNumber(value, msg) || true',cb='if((computed===undefined||computed===inherit)&&',cc="reg.fireEvent(this, '",bY='Null value is not allowed!',ca='qx.core.Assert.assertInteger(value, msg) || true',bW="value",bX="shorthand",cf='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cg='value !== null && value.type !== undefined',cu='value !== null && value.document',ct='throw new Error("Property ',cw="(!this.",cv='qx.core.Assert.assertBoolean(value, msg) || true',cy='if(a[i].',cx="toggle",cA="$$inherit_",cz='var prop=qx.core.Property;',cs=" with incoming value '",cr="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cV='if(computed===undefined||computed==inherit)computed=null;',cW="qx.core.Property",cX="is",cY='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cW,{statics:{__jP:{"Boolean":cv,"String":bA,"Number":ce,"Integer":ca,"PositiveNumber":br,"PositiveInteger":K,"Error":dh,"RegExp":cf,"Object":by,"Array":bl,"Map":cd,"Function":bO,"Date":dc,"Node":be,"Element":A,"Document":v,"Window":cu,"Event":cg,"Class":bP,"Mixin":x,"Interface":F,"Theme":bu,"Color":t,"Decorator":X,"Font":u},__jQ:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:di,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bH,dispose:bE,inheritable:bE,nullable:bE,themeable:bE,refine:bE,init:null,apply:bH,event:bH,check:null,transform:bH,deferredInit:bE,validate:null},$$allowedGroupKeys:{name:bH,group:bR,mode:bH,themeable:bE},$$inheritable:{},refresh:function(dG){var parent=dG.getLayoutParent();

if(parent){var dJ=dG.constructor;
var dL=this.$$store.inherit;
var dK=this.$$store.init;
var dI=this.$$method.refresh;
var dM;
var dH;
{};

while(dJ){dM=dJ.$$properties;

if(dM){for(var name in this.$$inheritable){if(dM[name]&&dG[dI[name]]){dH=parent[dL[name]];

if(dH===undefined){dH=parent[dK[name]];
}{};
dG[dI[name]](dH);
}}}dJ=dJ.superclass;
}}},attach:function(r){var s=r.$$properties;

if(s){for(var name in s){this.attachMethods(r,name,s[name]);
}}r.$$propertiesAttached=true;
},attachMethods:function(dN,name,dO){dO.group?this.__jR(dN,dO,name):this.__jS(dN,dO,name);
},__jR:function(eu,ev,name){var eC=qx.lang.String.firstUp(name);
var eB=eu.prototype;
var eD=ev.themeable===true;
{};
var eE=[];
var ey=[];

if(eD){var ew=[];
var eA=[];
}var ez=bs;
eE.push(ez);

if(eD){ew.push(ez);
}
if(ev.mode==bX){var ex=cr;
eE.push(ex);

if(eD){ew.push(ex);
}}
for(var i=0,a=ev.group,l=a.length;i<l;i++){{};
eE.push(cQ,this.$$method.set[a[i]],cl,i,ci);
ey.push(cQ,this.$$method.reset[a[i]],cO);

if(eD){{};
ew.push(cQ,this.$$method.setThemed[a[i]],cl,i,ci);
eA.push(cQ,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=cG+eC;
eB[this.$$method.set[name]]=new Function(eE.join(cP));
this.$$method.reset[name]=bF+eC;
eB[this.$$method.reset[name]]=new Function(ey.join(cP));

if(eD){this.$$method.setThemed[name]=cF+eC;
eB[this.$$method.setThemed[name]]=new Function(ew.join(cP));
this.$$method.resetThemed[name]=bJ+eC;
eB[this.$$method.resetThemed[name]]=new Function(eA.join(cP));
}},__jS:function(ek,el,name){var en=qx.lang.String.firstUp(name);
var ep=ek.prototype;
{};
if(el.dispose===undefined&&typeof el.check===bH){el.dispose=this.__jQ[el.check]||qx.Class.isDefined(el.check)||qx.Interface.isDefined(el.check);
}var eo=this.$$method;
var em=this.$$store;
em.runtime[name]=bo+name;
em.user[name]=bj+name;
em.theme[name]=bV+name;
em.init[name]=bQ+name;
em.inherit[name]=cA+name;
em.useinit[name]=E+name;
eo.get[name]=ck+en;
ep[eo.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,ek,name,ck);
};
eo.set[name]=cG+en;
ep[eo.set[name]]=function(m){return qx.core.Property.executeOptimizedSetter(this,ek,name,cG,arguments);
};
eo.reset[name]=bF+en;
ep[eo.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bF);
};

if(el.inheritable||el.apply||el.event||el.deferredInit){eo.init[name]=cD+en;
ep[eo.init[name]]=function(c){return qx.core.Property.executeOptimizedSetter(this,ek,name,cD,arguments);
};
}
if(el.inheritable){eo.refresh[name]=cR+en;
ep[eo.refresh[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,ek,name,cR,arguments);
};
}eo.setRuntime[name]=cE+en;
ep[eo.setRuntime[name]]=function(ec){return qx.core.Property.executeOptimizedSetter(this,ek,name,cE,arguments);
};
eo.resetRuntime[name]=bD+en;
ep[eo.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bD);
};

if(el.themeable){eo.setThemed[name]=cF+en;
ep[eo.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,ek,name,cF,arguments);
};
eo.resetThemed[name]=bJ+en;
ep[eo.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,ek,name,bJ);
};
}
if(el.check===T){ep[cx+en]=new Function(cU+eo.set[name]+cw+eo.get[name]+bw);
ep[cX+en]=new Function(cU+eo.get[name]+V);
}},__jT:{0:cY,1:bp,2:df,3:N,4:bY,5:bc},error:function(d,e,f,g,h){var j=d.constructor.classname;
var k=B+f+bh+j+da+this.$$method[g][f]+cs+h+bg;
throw new Error(k+(this.__jT[e]||"Unknown reason: "+e));
},__jU:function(dm,dn,name,dp,dq,dr){var ds=this.$$method[dp][name];
{dn[ds]=new Function(bW,dq.join(cP));
};
{};
qx.Bootstrap.setDisplayName(dn[ds],dm.classname+U,ds);
if(dr===undefined){return dm[ds]();
}else{return dm[ds](dr[0]);
}},executeOptimizedGetter:function(ed,ee,name,ef){var eh=ee.$$properties[name];
var ej=ee.prototype;
var eg=[];
var ei=this.$$store;
eg.push(cC,ei.runtime[name],bL);
eg.push(bG,ei.runtime[name],cK);

if(eh.inheritable){eg.push(bI,ei.inherit[name],bL);
eg.push(bG,ei.inherit[name],cK);
eg.push(cL);
}eg.push(cC,ei.user[name],bL);
eg.push(bG,ei.user[name],cK);

if(eh.themeable){eg.push(bI,ei.theme[name],bL);
eg.push(bG,ei.theme[name],cK);
}
if(eh.deferredInit&&eh.init===undefined){eg.push(bI,ei.init[name],bL);
eg.push(bG,ei.init[name],cK);
}eg.push(cL);

if(eh.init!==undefined){if(eh.inheritable){eg.push(z,ei.init[name],cK);

if(eh.nullable){eg.push(G);
}else if(eh.init!==undefined){eg.push(bG,ei.init[name],cK);
}else{eg.push(P,name,cq,ee.classname,cp);
}eg.push(y);
}else{eg.push(bG,ei.init[name],cK);
}}else if(eh.inheritable||eh.nullable){eg.push(bx);
}else{eg.push(ct,name,cq,ee.classname,cp);
}return this.__jU(ed,ej,name,ef,eg);
},executeOptimizedSetter:function(dP,dQ,name,dR,dS){var dX=dQ.$$properties[name];
var dW=dQ.prototype;
var dU=[];
var dT=dR===cG||dR===cF||dR===cE||(dR===cD&&dX.init===undefined);
var dV=dX.apply||dX.event||dX.inheritable;
var dY=this.__jV(dR,name);
this.__jW(dU,dX,name,dR,dT);

if(dT){this.__jX(dU,dQ,dX,name);
}
if(dV){this.__jY(dU,dT,dY,dR);
}
if(dX.inheritable){dU.push(I);
}{};

if(!dV){this.__kb(dU,name,dR,dT);
}else{this.__kc(dU,dX,name,dR,dT);
}
if(dX.inheritable){this.__kd(dU,dX,name,dR);
}else if(dV){this.__ke(dU,dX,name,dR);
}
if(dV){this.__kf(dU,dX,name);
if(dX.inheritable&&dW._getChildren){this.__kg(dU,name);
}}if(dT){dU.push(Q);
}return this.__jU(dP,dW,name,dR,dU,dS);
},__jV:function(dk,name){if(dk===cE||dk===bD){var dl=this.$$store.runtime[name];
}else if(dk===cF||dk===bJ){dl=this.$$store.theme[name];
}else if(dk===cD){dl=this.$$store.init[name];
}else{dl=this.$$store.user[name];
}return dl;
},__jW:function(dC,dD,name,dE,dF){{if(!dD.nullable||dD.check||dD.inheritable){dC.push(cz);
}if(dE===cG){dC.push(bd,name,L,dE,bm);
}};
},__jX:function(er,es,et,name){if(et.transform){er.push(M,et.transform,cj);
}if(et.validate){if(typeof et.validate===bH){er.push(cH,et.validate,cj);
}else if(et.validate instanceof Function){er.push(es.classname,bt,name);
er.push(dd);
}}},__jY:function(dx,dy,dz,dA){var dB=(dA===bF||dA===bJ||dA===bD);

if(dy){dx.push(cC,dz,w);
}else if(dB){dx.push(cC,dz,bf);
}},__ka:undefined,__kb:function(eI,name,eJ,eK){if(eJ===cE){eI.push(cH,this.$$store.runtime[name],cI);
}else if(eJ===bD){eI.push(cC,this.$$store.runtime[name],bL);
eI.push(cB,this.$$store.runtime[name],cK);
}else if(eJ===cG){eI.push(cH,this.$$store.user[name],cI);
}else if(eJ===bF){eI.push(cC,this.$$store.user[name],bL);
eI.push(cB,this.$$store.user[name],cK);
}else if(eJ===cF){eI.push(cH,this.$$store.theme[name],cI);
}else if(eJ===bJ){eI.push(cC,this.$$store.theme[name],bL);
eI.push(cB,this.$$store.theme[name],cK);
}else if(eJ===cD&&eK){eI.push(cH,this.$$store.init[name],cI);
}},__kc:function(dt,du,name,dv,dw){if(du.inheritable){dt.push(ba,this.$$store.inherit[name],cK);
}else{dt.push(bM);
}dt.push(cC,this.$$store.runtime[name],bC);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===bD){dt.push(cB,this.$$store.runtime[name],cK);
dt.push(cC,this.$$store.user[name],bL);
dt.push(cJ,this.$$store.user[name],cK);
dt.push(bI,this.$$store.theme[name],bL);
dt.push(cJ,this.$$store.theme[name],cK);
dt.push(bI,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else{dt.push(cT,this.$$store.runtime[name],cK);
if(dv===cG){dt.push(cH,this.$$store.user[name],cI);
}else if(dv===bF){dt.push(cB,this.$$store.user[name],cK);
}else if(dv===cF){dt.push(cH,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
}else if(dv===cD&&dw){dt.push(cH,this.$$store.init[name],cI);
}}dt.push(bK);
dt.push(bI,this.$$store.user[name],bC);

if(dv===cG){if(!du.inheritable){dt.push(cN,this.$$store.user[name],cK);
}dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===bF){if(!du.inheritable){dt.push(cN,this.$$store.user[name],cK);
}dt.push(cB,this.$$store.user[name],cK);
dt.push(cC,this.$$store.runtime[name],bL);
dt.push(cJ,this.$$store.runtime[name],cK);
dt.push(cC,this.$$store.theme[name],bL);
dt.push(cJ,this.$$store.theme[name],cK);
dt.push(bI,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else{if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(du.inheritable){dt.push(cJ,this.$$store.user[name],cK);
}else{dt.push(cT,this.$$store.user[name],cK);
}if(dv===cF){dt.push(cH,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
}else if(dv===cD&&dw){dt.push(cH,this.$$store.init[name],cI);
}}dt.push(bK);
if(du.themeable){dt.push(bI,this.$$store.theme[name],bC);

if(!du.inheritable){dt.push(cN,this.$$store.theme[name],cK);
}
if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===bJ){dt.push(cB,this.$$store.theme[name],cK);
dt.push(cC,this.$$store.init[name],bC);
dt.push(cJ,this.$$store.init[name],cK);
dt.push(cH,this.$$store.useinit[name],cS);
dt.push(bK);
}else if(dv===cD){if(dw){dt.push(cH,this.$$store.init[name],cI);
}dt.push(cJ,this.$$store.theme[name],cK);
}else if(dv===cR){dt.push(cJ,this.$$store.theme[name],cK);
}dt.push(bK);
}dt.push(bI,this.$$store.useinit[name],bk);

if(!du.inheritable){dt.push(cN,this.$$store.init[name],cK);
}
if(dv===cD){if(dw){dt.push(cJ,this.$$store.init[name],cI);
}else{dt.push(cJ,this.$$store.init[name],cK);
}}else if(dv===cG||dv===cE||dv===cF||dv===cR){dt.push(cB,this.$$store.useinit[name],cK);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===cR){dt.push(cJ,this.$$store.init[name],cK);
}}dt.push(bK);
if(dv===cG||dv===cE||dv===cF||dv===cD){dt.push(db);

if(dv===cE){dt.push(cJ,this.$$store.runtime[name],cI);
}else if(dv===cG){dt.push(cJ,this.$$store.user[name],cI);
}else if(dv===cF){dt.push(cJ,this.$$store.theme[name],cI);
}else if(dv===cD){if(dw){dt.push(cJ,this.$$store.init[name],cI);
}else{dt.push(cJ,this.$$store.init[name],cK);
}dt.push(cH,this.$$store.useinit[name],cS);
}dt.push(bK);
}},__kd:function(n,o,name,p){n.push(bq);

if(p===cR){n.push(bn);
}else{n.push(bB,this.$$store.inherit[name],cK);
}n.push(cb);
n.push(cH,this.$$store.init[name],bN);
n.push(cH,this.$$store.init[name],ch);
n.push(cJ,this.$$store.init[name],cK);
n.push(cH,this.$$store.useinit[name],cS);
n.push(bS);
n.push(cB,this.$$store.useinit[name],bi);
n.push(bK);
n.push(co);
n.push(dj);
n.push(D,this.$$store.inherit[name],cK);
n.push(bK);
n.push(bb);
n.push(cB,this.$$store.inherit[name],cK);
n.push(J,this.$$store.inherit[name],dg);
n.push(bT);
if(o.init!==undefined&&p!==cD){n.push(cM,this.$$store.init[name],cm);
}else{n.push(cn);
}n.push(cV);
},__ke:function(eF,eG,name,eH){if(eH!==cG&&eH!==cE&&eH!==cF){eF.push(bU);
}eF.push(co);
if(eG.init!==undefined&&eH!==cD){eF.push(cM,this.$$store.init[name],cm);
}else{eF.push(cn);
}},__kf:function(ea,eb,name){if(eb.apply){ea.push(cH,eb.apply,R,name,bz);
}if(eb.event){ea.push(bv,O,eb.event,Y,cc,eb.event,H,S);
}},__kg:function(eq,name){eq.push(C);
eq.push(cy,this.$$method.refresh[name],W,this.$$method.refresh[name],de);
eq.push(bK);
}}});
})();
(function(){var q="$$hash",p="qx.core.ObjectRegistry";
qx.Bootstrap.define(p,{statics:{inShutDown:false,__gu:{},__gv:0,__gw:[],register:function(e){var h=this.__gu;

if(!h){return;
}var g=e.$$hash;

if(g==null){var f=this.__gw;

if(f.length>0){g=f.pop();
}else{g=(this.__gv++).toString(36);
}e.$$hash=g;
}{};
h[g]=e;
},unregister:function(j){var k=j.$$hash;

if(k==null){return;
}var m=this.__gu;

if(m&&m[k]){delete m[k];
this.__gw.push(k);
}try{delete j.$$hash;
}catch(y){if(j.removeAttribute){j.removeAttribute(q);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__gw;

if(s.length>0){t=s.pop();
}else{t=(this.__gv++).toString(36);
}return r.$$hash=t;
},clearHashCode:function(n){{};
var o=n.$$hash;

if(o!=null){this.__gw.push(o);
try{delete n.$$hash;
}catch(d){if(n.removeAttribute){n.removeAttribute(q);
}}}},fromHashCode:function(z){return this.__gu[z]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__gu;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(c){qx.log.Logger.error(this,"Could not dispose object "+u.toString()+": "+c);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gu;
},getRegistry:function(){return this.__gu;
}}});
})();
(function(){var t="qx.Mixin",s=".prototype",r="constructor",q="[Mixin ",p="]",o="destruct",n="Mixin";
qx.Bootstrap.define(t,{statics:{define:function(name,j){if(j){if(j.include&&!(j.include instanceof Array)){j.include=[j.include];
}{};
var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,r);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+s);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,o);
}}else{var m={};
}m.$$type=n;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(a){var d=this.flatten(a);
var e=d.length;

if(e<2){return true;
}var h={};
var g={};
var f={};
var c;

for(var i=0;i<e;i++){c=d[i];

for(var b in c.events){if(f[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+f[b]+'" in member "'+b+'"!');
}f[b]=c.name;
}
for(var b in c.properties){if(h[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+h[b]+'" in property "'+b+'"!');
}h[b]=c.name;
}
for(var b in c.members){if(g[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+g[b]+'" in member "'+b+'"!');
}g[b]=c.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Class.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return q+this.name+p;
},$$registry:{},__dw:null,__dx:function(){}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q="qx.client",p="on",o="function",n="mousedown",m="qx.bom.Event",l="return;",k="mouseover",j="HTMLEvents";
qx.Bootstrap.define(m,{statics:{addNativeListener:qx.core.Variant.select(q,{"mshtml":function(y,z,A){y.attachEvent(p+z,A);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(q,{"mshtml":function(g,h,i){try{g.detachEvent(p+h,i);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(r,s,t){r.removeEventListener(s,t,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(q,{"mshtml":function(e){if(e.type===k){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(q,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==n&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(a){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(b){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(c,d){if(document.createEventObject){var f=document.createEventObject();
return c.fireEvent(p+d,f);
}else{var f=document.createEvent(j);
f.initEvent(d,true,true);
return !c.dispatchEvent(f);
}},supportsEvent:qx.core.Variant.select(q,{"webkit":function(B,C){return B.hasOwnProperty(p+C);
},"default":function(u,v){var w=p+v;
var x=(w in u);

if(!x){x=typeof u[w]==o;

if(!x&&u.setAttribute){u.setAttribute(w,l);
x=typeof u[w]==o;
u.removeAttribute(w);
}}return x;
}})}});
})();
(function(){var bh="|bubble",bg="|capture",bf="|",be="_",bd="unload",bc="__er",bb="UNKNOWN_",ba="DOM_",Y="__es",X="c",U="WIN_",W="capture",V="qx.event.Manager",T="QX_";
qx.Bootstrap.define(V,{construct:function(bU,bV){this.__en=bU;
this.__eo=qx.core.ObjectRegistry.toHashCode(bU);
this.__ep=bV;
if(bU.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bU,bd,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bU,bd,arguments.callee);
self.dispose();
}));
}this.__eq={};
this.__er={};
this.__es={};
this.__et={};
},statics:{__eu:0,getNextUniqueId:function(){return (this.__eu++).toString(36);
}},members:{__ep:null,__eq:null,__es:null,__ev:null,__er:null,__et:null,__en:null,__eo:null,getWindow:function(){return this.__en;
},getWindowId:function(){return this.__eo;
},getHandler:function(cg){var ch=this.__er[cg.classname];

if(ch){return ch;
}return this.__er[cg.classname]=new cg(this);
},getDispatcher:function(bF){var bG=this.__es[bF.classname];

if(bG){return bG;
}return this.__es[bF.classname]=new bF(this,this.__ep);
},getListeners:function(e,f,g){var h=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var k=this.__eq[h];

if(!k){return null;
}var m=f+(g?bg:bh);
var j=k[m];
return j?j.concat():null;
},serializeListeners:function(z){var G=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var I=this.__eq[G];
var E=[];

if(I){var C,H,A,D,F;

for(var B in I){C=B.indexOf(bf);
H=B.substring(0,C);
A=B.charAt(C+1)==X;
D=I[B];

for(var i=0,l=D.length;i<l;i++){F=D[i];
E.push({self:F.context,handler:F.handler,type:H,capture:A});
}}}return E;
},toggleAttachedEvents:function(bW,bX){var cd=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var cf=this.__eq[cd];

if(cf){var ca,ce,bY,cb;

for(var cc in cf){ca=cc.indexOf(bf);
ce=cc.substring(0,ca);
bY=cc.charCodeAt(ca+1)===99;
cb=cf[cc];

if(bX){this.__ew(bW,ce,bY);
}else{this.__ex(bW,ce,bY);
}}}},hasListener:function(cx,cy,cz){{};
var cA=cx.$$hash||qx.core.ObjectRegistry.toHashCode(cx);
var cC=this.__eq[cA];

if(!cC){return false;
}var cD=cy+(cz?bg:bh);
var cB=cC[cD];
return cB&&cB.length>0;
},importListeners:function(bi,bj){{};
var bp=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__eq[bp]={};
var bm=qx.event.Manager;

for(var bk in bj){var bn=bj[bk];
var bo=bn.type+(bn.capture?bg:bh);
var bl=bq[bo];

if(!bl){bl=bq[bo]=[];
this.__ew(bi,bn.type,bn.capture);
}bl.push({handler:bn.listener,context:bn.self,unique:bn.unique||(bm.__eu++).toString(36)});
}},addListener:function(ci,cj,ck,self,cl){var cp;
{};
var cq=ci.$$hash||qx.core.ObjectRegistry.toHashCode(ci);
var cs=this.__eq[cq];

if(!cs){cs=this.__eq[cq]={};
}var co=cj+(cl?bg:bh);
var cn=cs[co];

if(!cn){cn=cs[co]=[];
}if(cn.length===0){this.__ew(ci,cj,cl);
}var cr=(qx.event.Manager.__eu++).toString(36);
var cm={handler:ck,context:self,unique:cr};
cn.push(cm);
return co+bf+cr;
},findHandler:function(bH,bI){var bS=false,bL=false,bT=false;
var bR;

if(bH.nodeType===1){bS=true;
bR=ba+bH.tagName.toLowerCase()+be+bI;
}else if(bH==this.__en){bL=true;
bR=U+bI;
}else if(bH.classname){bT=true;
bR=T+bH.classname+be+bI;
}else{bR=bb+bH+be+bI;
}var bN=this.__et;

if(bN[bR]){return bN[bR];
}var bQ=this.__ep.getHandlers();
var bM=qx.event.IEventHandler;
var bO,bP,bK,bJ;

for(var i=0,l=bQ.length;i<l;i++){bO=bQ[i];
bK=bO.SUPPORTED_TYPES;

if(bK&&!bK[bI]){continue;
}bJ=bO.TARGET_CHECK;

if(bJ){if(!bS&&bJ===bM.TARGET_DOMNODE){continue;
}else if(!bL&&bJ===bM.TARGET_WINDOW){continue;
}else if(!bT&&bJ===bM.TARGET_OBJECT){continue;
}}bP=this.getHandler(bQ[i]);

if(bO.IGNORE_CAN_HANDLE||bP.canHandleEvent(bH,bI)){bN[bR]=bP;
return bP;
}}return null;
},__ew:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.registerEvent(a,b,c);
return;
}{};
},removeListener:function(J,K,L,self,M){var Q;
{};
var R=J.$$hash||qx.core.ObjectRegistry.toHashCode(J);
var S=this.__eq[R];

if(!S){return false;
}var N=K+(M?bg:bh);
var O=S[N];

if(!O){return false;
}var P;

for(var i=0,l=O.length;i<l;i++){P=O[i];

if(P.handler===L&&P.context===self){qx.lang.Array.removeAt(O,i);

if(O.length==0){this.__ex(J,K,M);
}return true;
}}return false;
},removeListenerById:function(n,o){var u;
{};
var s=o.split(bf);
var x=s[0];
var p=s[1].charCodeAt(0)==99;
var w=s[2];
var v=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var y=this.__eq[v];

if(!y){return false;
}var t=x+(p?bg:bh);
var r=y[t];

if(!r){return false;
}var q;

for(var i=0,l=r.length;i<l;i++){q=r[i];

if(q.unique===w){qx.lang.Array.removeAt(r,i);

if(r.length==0){this.__ex(n,x,p);
}return true;
}}return false;
},removeAllListeners:function(by){var bC=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bE=this.__eq[bC];

if(!bE){return false;
}var bA,bD,bz;

for(var bB in bE){if(bE[bB].length>0){bA=bB.split(bf);
bD=bA[0];
bz=bA[1]===W;
this.__ex(by,bD,bz);
}}delete this.__eq[bC];
return true;
},__ex:function(ct,cu,cv){var cw=this.findHandler(ct,cu);

if(cw){cw.unregisterEvent(ct,cu,cv);
return;
}{};
},dispatchEvent:function(br,event){var bw;
{};
var bx=event.getType();

if(!event.getBubbles()&&!this.hasListener(br,bx)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(br);
}var bv=this.__ep.getDispatchers();
var bu;
var bt=false;

for(var i=0,l=bv.length;i<l;i++){bu=this.getDispatcher(bv[i]);
if(bu.canDispatchEvent(br,event,bx)){bu.dispatchEvent(br,event,bx);
bt=true;
break;
}}
if(!bt){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bx+" on "+br);
return true;
}var bs=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bs;
},dispose:function(){this.__ep.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bc);
qx.util.DisposeUtil.disposeMap(this,Y);
this.__eq=this.__en=this.__ev=null;
this.__ep=this.__et=null;
}}});
})();
(function(){var n="qx.dom.Node",m="qx.client",l="";
qx.Bootstrap.define(n,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(p){return p.nodeType===
this.DOCUMENT?p:
p.ownerDocument||p.document;
},getWindow:qx.core.Variant.select(m,{"mshtml":function(s){if(s.nodeType==null){return s;
}if(s.nodeType!==this.DOCUMENT){s=s.ownerDocument;
}return s.parentWindow;
},"default":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.defaultView;
}}),getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(g){return !!(g&&g.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(d){return !!(d&&d.nodeType===this.DOCUMENT);
},isText:function(e){return !!(e&&e.nodeType===this.TEXT);
},isWindow:function(q){return !!(q&&q.history&&q.location&&q.document);
},isNodeName:function(j,k){if(!k||!j||!j.nodeName){return false;
}return k.toLowerCase()==qx.dom.Node.getName(j);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(b){if(!b||!b.nodeType){return null;
}
switch(b.nodeType){case 1:var i,a=[],c=b.childNodes,length=c.length;

for(i=0;i<length;i++){a[i]=this.getText(c[i]);
}return a.join(l);
case 2:return b.nodeValue;
break;
case 3:return b.nodeValue;
break;
}return null;
}}});
})();
(function(){var z="mshtml",y="qx.client",x="[object Array]",w="qx.lang.Array",v="qx",u="number",t="string";
qx.Bootstrap.define(w,{statics:{toArray:function(B,C){return this.cast(B,Array,C);
},cast:function(K,L,M){if(K.constructor===L){return K;
}
if(qx.Class.hasInterface(K,qx.data.IListData)){var K=K.toArray();
}var N=new L;
if(qx.core.Variant.isSet(y,z)){if(K.item){for(var i=M||0,l=K.length;i<l;i++){N.push(K[i]);
}return N;
}}if(Object.prototype.toString.call(K)===x&&M==null){N.push.apply(N,K);
}else{N.push.apply(N,Array.prototype.slice.call(K,M||0));
}return N;
},fromArguments:function(D,E){return Array.prototype.slice.call(D,E||0);
},fromCollection:function(R){if(qx.core.Variant.isSet(y,z)){if(R.item){var S=[];

for(var i=0,l=R.length;i<l;i++){S[i]=R[i];
}return S;
}}return Array.prototype.slice.call(R,0);
},fromShortHand:function(bk){var bm=bk.length;
var bl=qx.lang.Array.clone(bk);
switch(bm){case 1:bl[1]=bl[2]=bl[3]=bl[0];
break;
case 2:bl[2]=bl[0];
case 3:bl[3]=bl[1];
}return bl;
},clone:function(p){return p.concat();
},insertAt:function(bb,bc,i){bb.splice(i,0,bc);
return bb;
},insertBefore:function(bh,bi,bj){var i=bh.indexOf(bj);

if(i==-1){bh.push(bi);
}else{bh.splice(i,0,bi);
}return bh;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(s,i){return s.splice(i,1)[0];
},removeAll:function(V){V.length=0;
return this;
},append:function(T,U){{};
Array.prototype.push.apply(T,U);
return T;
},exclude:function(W,X){{};

for(var i=0,ba=X.length,Y;i<ba;i++){Y=W.indexOf(X[i]);

if(Y!=-1){W.splice(Y,1);
}}return W;
},remove:function(q,r){var i=q.indexOf(r);

if(i!=-1){q.splice(i,1);
return r;
}},contains:function(bn,bo){return bn.indexOf(bo)!==-1;
},equals:function(bp,bq){var length=bp.length;

if(length!==bq.length){return false;
}
for(var i=0;i<length;i++){if(bp[i]!==bq[i]){return false;
}}return true;
},sum:function(F){var G=0;

for(var i=0,l=F.length;i<l;i++){G+=F[i];
}return G;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(be){{};
var i,bg=be.length,bf=be[0];

for(i=1;i<bg;i++){if(be[i]<bf){bf=be[i];
}}return bf===undefined?null:bf;
},unique:function(a){var m=[],c={},f={},h={};
var g,b=0;
var n=v+qx.lang.Date.now();
var d=false,k=false,o=false;
for(var i=0,j=a.length;i<j;i++){g=a[i];
if(g===null){if(!d){d=true;
m.push(g);
}}else if(g===undefined){}else if(g===false){if(!k){k=true;
m.push(g);
}}else if(g===true){if(!o){o=true;
m.push(g);
}}else if(typeof g===t){if(!c[g]){c[g]=1;
m.push(g);
}}else if(typeof g===u){if(!f[g]){f[g]=1;
m.push(g);
}}else{e=g[n];

if(e==null){e=g[n]=b++;
}
if(!h[e]){h[e]=g;
m.push(g);
}}}for(var e in h){try{delete h[e][n];
}catch(bd){try{h[e][n]=null;
}catch(A){throw new Error("Cannot clean-up map entry doneObjects["+e+"]["+n+"]");
}}}return m;
}}});
})();
(function(){var j="()",i=".",h=".prototype.",g='anonymous()',f="qx.lang.Function",e=".constructor()";
qx.Bootstrap.define(f,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(w){if(w.displayName){return w.displayName;
}
if(w.$$original||w.wrapper||w.classname){return w.classname+e;
}
if(w.$$mixin){for(var y in w.$$mixin.$$members){if(w.$$mixin.$$members[y]==w){return w.$$mixin.name+h+y+j;
}}for(var y in w.$$mixin){if(w.$$mixin[y]==w){return w.$$mixin.name+i+y+j;
}}}
if(w.self){var z=w.self.constructor;

if(z){for(var y in z.prototype){if(z.prototype[y]==w){return z.classname+h+y+j;
}}for(var y in z){if(z[y]==w){return z.classname+i+y+j;
}}}}var x=w.toString().match(/function\s*(\w*)\s*\(.*/);

if(x&&x.length>=1&&x[1]){return x[1]+j;
}return g;
},globalEval:function(D){if(window.execScript){return window.execScript(D);
}else{return eval.call(window,D);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(B,C){{};
if(!C){return B;
}if(!(C.self||C.args||C.delay!=null||C.periodical!=null||C.attempt)){return B;
}return function(event){{};
var l=qx.lang.Array.fromArguments(arguments);
if(C.args){l=C.args.concat(l);
}
if(C.delay||C.periodical){var k=qx.event.GlobalError.observeMethod(function(){return B.apply(C.self||this,l);
});

if(C.delay){return window.setTimeout(k,C.delay);
}
if(C.periodical){return window.setInterval(k,C.periodical);
}}else if(C.attempt){var m=false;

try{m=B.apply(C.self||this,l);
}catch(A){}return m;
}else{return B.apply(C.self||this,l);
}};
},bind:function(n,self,o){return this.create(n,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(p,q){return this.create(p,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(E,self,F){if(arguments.length<3){return function(event){return E.call(self||this,event||window.event);
};
}else{var G=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,G);
E.apply(self||this,d);
};
}},attempt:function(u,self,v){return this.create(u,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(a,b,self,c){return this.create(a,{delay:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(r,s,self,t){return this.create(r,{periodical:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var o="qx.event.Registration";
qx.Bootstrap.define(o,{statics:{__ec:{},getManager:function(t){if(t==null){{};
t=window;
}else if(t.nodeType){t=qx.dom.Node.getWindow(t);
}else if(!qx.dom.Node.isWindow(t)){t=window;
}var v=t.$$hash||qx.core.ObjectRegistry.toHashCode(t);
var u=this.__ec[v];

if(!u){u=new qx.event.Manager(t,this);
this.__ec[v]=u;
}return u;
},removeManager:function(z){var A=z.getWindowId();
delete this.__ec[A];
},addListener:function(I,J,K,self,L){return this.getManager(I).addListener(I,J,K,self,L);
},removeListener:function(p,q,r,self,s){return this.getManager(p).removeListener(p,q,r,self,s);
},removeListenerById:function(g,h){return this.getManager(g).removeListenerById(g,h);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(Q){return this.getManager(Q).serializeListeners(Q);
},createEvent:function(M,N,O){{};
if(N==null){N=qx.event.type.Event;
}var P=qx.event.Pool.getInstance().getObject(N);

if(!P){return;
}O?P.init.apply(P,O):P.init();
if(M){P.setType(M);
}return P;
},dispatchEvent:function(H,event){return this.getManager(H).dispatchEvent(H,event);
},fireEvent:function(i,j,k,l){var m;
{};
var n=this.createEvent(j,k||null,l);
return this.getManager(i).dispatchEvent(i,n);
},fireNonBubblingEvent:function(B,C,D,E){{};
var F=this.getManager(B);

if(!F.hasListener(B,C,false)){return true;
}var G=this.createEvent(C,D||null,E);
return F.dispatchEvent(B,G);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ed:[],addHandler:function(y){{};
this.__ed.push(y);
this.__ed.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ed;
},__ee:[],addDispatcher:function(w,x){{};
this.__ee.push(w);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ee;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Bootstrap.define(b,{construct:function(a){this.__jG=[];
this.setMaxMessages(a||50);
},members:{__jH:0,__jG:null,__jI:50,setMaxMessages:function(c){this.__jI=c;
this.clearHistory();
},getMaxMessages:function(){return this.__jI;
},process:function(d){var e=this.getMaxMessages();

if(this.__jG.length<e){this.__jG.push(d);
}else{this.__jG[this.__jH++]=d;

if(this.__jH>=e){this.__jH=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__jG.length){f=this.__jG.length;
}
if(this.__jG.length==this.getMaxMessages()){var h=this.__jH-1;
}else{h=this.__jG.length-1;
}var g=h-f+1;

if(g<0){g+=this.__jG.length;
}var i;

if(g<=h){i=this.__jG.slice(g,h+1);
}else{i=this.__jG.slice(g,this.__jG.length).concat(this.__jG.slice(0,h+1));
}return i;
},clearHistory:function(){this.__jG=[];
this.__jH=0;
}}});
})();
(function(){var bi="node",bh="error",bg="...(+",bf="array",be=")",bd="info",bc="instance",bb="string",ba="null",Y="class",bD="number",bC="stringify",bB="]",bA="unknown",bz="function",by="boolean",bx="debug",bw="map",bv="undefined",bu="qx.log.Logger",bp=")}",bq="#",bn="warn",bo="document",bl="{...(",bm="[",bj="text[",bk="[...(",br="\n",bs=")]",bt="object";
qx.Bootstrap.define(bu,{statics:{__ef:bx,setLevel:function(a){this.__ef=a;
},getLevel:function(){return this.__ef;
},setTreshold:function(u){this.__ei.setMaxMessages(u);
},getTreshold:function(){return this.__ei.getMaxMessages();
},__eg:{},__eh:0,register:function(C){if(C.$$id){return;
}var D=this.__eh++;
this.__eg[D]=C;
C.$$id=D;
var E=this.__ei.getAllLogEvents();

for(var i=0,l=E.length;i<l;i++){C.process(E[i]);
}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__eg[P];
delete O.$$id;
},debug:function(n,o){this.__ek(bx,arguments);
},info:function(bE,bF){this.__ek(bd,arguments);
},warn:function(s,t){this.__ek(bn,arguments);
},error:function(bH,bI){this.__ek(bh,arguments);
},trace:function(bG){this.__ek(bd,[bG,qx.dev.StackTrace.getStackTrace().join(br)]);
},deprecatedMethodWarning:function(z,A){var B;
{};
},deprecatedClassWarning:function(Q,R){var S;
{};
},deprecatedEventWarning:function(p,event,q){var r;
{};
},deprecatedMixinWarning:function(V,W){var X;
{};
},deprecatedConstantWarning:function(v,w,x){var self,y;
{};
},clear:function(){this.__ei.clearHistory();
},__ei:new qx.log.appender.RingBuffer(50),__ej:{debug:0,info:1,warn:2,error:3},__ek:function(b,c){var h=this.__ej;

if(h[b]<h[this.__ef]){return;
}var e=c.length<2?null:c[0];
var g=e?1:0;
var d=[];

for(var i=g,l=c.length;i<l;i++){d.push(this.__em(c[i],true));
}var j=new Date;
var k={time:j,offset:j-qx.Bootstrap.LOADSTART,level:b,items:d,win:window};
if(e){if(e instanceof qx.core.Object){k.object=e.$$hash;
}else if(e.$$type){k.clazz=e;
}}this.__ei.process(k);
var m=this.__eg;

for(var f in m){m[f].process(k);
}},__el:function(T){if(T===undefined){return bv;
}else if(T===null){return ba;
}
if(T.$$type){return Y;
}var U=typeof T;

if(U===bz||U==bb||U===bD||U===by){return U;
}else if(U===bt){if(T.nodeType){return bi;
}else if(T.classname){return bc;
}else if(T instanceof Array){return bf;
}else if(T instanceof Error){return bh;
}else{return bw;
}}
if(T.toString){return bC;
}return bA;
},__em:function(F,G){var N=this.__el(F);
var J=bA;
var I=[];

switch(N){case ba:case bv:J=N;
break;
case bb:case bD:case by:J=F;
break;
case bi:if(F.nodeType===9){J=bo;
}else if(F.nodeType===3){J=bj+F.nodeValue+bB;
}else if(F.nodeType===1){J=F.nodeName.toLowerCase();

if(F.id){J+=bq+F.id;
}}else{J=bi;
}break;
case bz:J=qx.lang.Function.getName(F)||N;
break;
case bc:J=F.basename+bm+F.$$hash+bB;
break;
case Y:case bC:J=F.toString();
break;
case bh:I=qx.dev.StackTrace.getStackTraceFromError(F);
J=F.toString();
break;
case bf:if(G){J=[];

for(var i=0,l=F.length;i<l;i++){if(J.length>20){J.push(bg+(l-i)+be);
break;
}J.push(this.__em(F[i],false));
}}else{J=bk+F.length+bs;
}break;
case bw:if(G){var H;
var M=[];

for(var L in F){M.push(L);
}M.sort();
J=[];

for(var i=0,l=M.length;i<l;i++){if(J.length>20){J.push(bg+(l-i)+be);
break;
}L=M[i];
H=this.__em(F[L],false);
H.key=L;
J.push(H);
}}else{var K=0;

for(var L in F){K++;
}J=bl+K+bp;
}break;
}return {type:N,text:J,trace:I};
}}});
})();
(function(){var v="set",u="get",t="reset",s="qx.core.Object",r="]",q="[",p="$$user_",o="Don't use '_disposeFields' - instead assign directly to 'null'",n="Object";
qx.Class.define(s,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:n},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+q+this.$$hash+r;
},base:function(j,k){{};

if(arguments.length===1){return j.callee.base.call(this);
}else{return j.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bb){return bb.callee.self;
},clone:function(){var R=this.constructor;
var Q=new R;
var T=qx.Class.getProperties(R);
var S=qx.core.Property.$$store.user;
var U=qx.core.Property.$$method.set;
var name;
for(var i=0,l=T.length;i<l;i++){name=T[i];

if(this.hasOwnProperty(S[name])){Q[U[name]](this[S[name]]);
}}return Q;
},set:function(y,z){var B=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(y)){if(!this[B[y]]){if(this[v+qx.lang.String.firstUp(y)]!=undefined){this[v+qx.lang.String.firstUp(y)](z);
return;
}{};
}return this[B[y]](z);
}else{for(var A in y){if(!this[B[A]]){if(this[v+qx.lang.String.firstUp(A)]!=undefined){this[v+qx.lang.String.firstUp(A)](y[A]);
continue;
}{};
}this[B[A]](y[A]);
}return this;
}},get:function(w){var x=qx.core.Property.$$method.get;

if(!this[x[w]]){if(this[u+qx.lang.String.firstUp(w)]!=undefined){return this[u+qx.lang.String.firstUp(w)]();
}{};
}return this[x[w]]();
},reset:function(O){var P=qx.core.Property.$$method.reset;

if(!this[P[O]]){if(this[t+qx.lang.String.firstUp(O)]!=undefined){this[t+qx.lang.String.firstUp(O)]();
return;
}{};
}this[P[O]]();
},__jJ:qx.event.Registration,addListener:function(by,bz,self,bA){if(!this.$$disposed){return this.__jJ.addListener(this,by,bz,self,bA);
}return null;
},addListenerOnce:function(bn,bo,self,bp){var bq=function(e){bo.call(self||this,e);
this.removeListener(bn,bq,this,bp);
};
return this.addListener(bn,bq,this,bp);
},removeListener:function(bc,bd,self,be){if(!this.$$disposed){return this.__jJ.removeListener(this,bc,bd,self,be);
}return false;
},removeListenerById:function(g){if(!this.$$disposed){return this.__jJ.removeListenerById(this,g);
}return false;
},hasListener:function(bg,bh){return this.__jJ.hasListener(this,bg,bh);
},dispatchEvent:function(f){if(!this.$$disposed){return this.__jJ.dispatchEvent(this,f);
}return true;
},fireEvent:function(br,bs,bt){if(!this.$$disposed){return this.__jJ.fireEvent(this,br,bs,bt);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__jJ.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(bu,bv,bw,bx){if(!this.$$disposed){if(bw===undefined){bw=null;
}return this.__jJ.fireNonBubblingEvent(this,bu,qx.event.type.Data,[bv,bw,!!bx]);
}return true;
},__jK:null,setUserData:function(W,X){if(!this.__jK){this.__jK={};
}this.__jK[W]=X;
},getUserData:function(b){if(!this.__jK){return null;
}var c=this.__jK[b];
return c===undefined?null:c;
},__jL:qx.log.Logger,debug:function(V){this.__jL.debug(this,V);
},info:function(C){this.__jL.info(this,C);
},warn:function(d){this.__jL.warn(this,d);
},error:function(bf){this.__jL.error(this,bf);
},trace:function(){this.__jL.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bl,bj;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bk=this.constructor;
var bi;

while(bk.superclass){if(bk.$$destructor){bk.$$destructor.call(this);
}if(bk.$$includes){bi=bk.$$flatIncludes;

for(var i=0,l=bi.length;i<l;i++){if(bi[i].$$destructor){bi[i].$$destructor.call(this);
}}}bk=bk.superclass;
}var bm=qx.Class.getProperties(this.constructor);

for(var i=0,l=bm.length;i<l;i++){delete this[p+bm[i]];
}{};
},_disposeFields:function(ba){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(h){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(a){qx.util.DisposeUtil.disposeArray(this,a);
},_disposeMap:function(m){qx.util.DisposeUtil.disposeMap(this,m);
}},settings:{"qx.disposerDebugLevel":0},defer:function(Y){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jK=null;
var F=this.constructor;
var J;
var K=qx.core.Property.$$store;
var H=K.user;
var I=K.theme;
var D=K.inherit;
var G=K.useinit;
var E=K.init;

while(F){J=F.$$properties;

if(J){for(var name in J){if(J[name].dispose){this[H[name]]=this[I[name]]=this[D[name]]=this[G[name]]=this[E[name]]=undefined;
}}}F=F.superclass;
}}});
})();
(function(){var P="",O="g",N="0",M='\\$1',L="%",K='-',J="qx.lang.String",I=' ',H='\n',G="undefined";
qx.Bootstrap.define(J,{statics:{camelCase:function(D){return D.replace(/\-([a-z])/g,function(d,e){return e.toUpperCase();
});
},hyphenate:function(b){return b.replace(/[A-Z]/g,function(l){return (K+l.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(w){return w.toUpperCase();
});
},clean:function(E){return this.trim(E.replace(/\s+/g,I));
},trimLeft:function(o){return o.replace(/^\s+/,P);
},trimRight:function(x){return x.replace(/\s+$/,P);
},trim:function(c){return c.replace(/^\s+|\s+$/g,P);
},startsWith:function(B,C){return B.indexOf(C)===0;
},endsWith:function(m,n){return m.substring(m.length-n.length,m.length)===n;
},repeat:function(z,A){return z.length>=0?new Array(A+1).join(z):P;
},pad:function(p,length,q){var r=length-p.length;

if(r>0){if(typeof q===G){q=N;
}return this.repeat(q,r)+p;
}else{return p;
}},firstUp:function(s){return s.charAt(0).toUpperCase()+s.substr(1);
},firstLow:function(F){return F.charAt(0).toLowerCase()+F.substr(1);
},contains:function(R,S){return R.indexOf(S)!=-1;
},format:function(t,u){var v=t;

for(var i=0;i<u.length;i++){v=v.replace(new RegExp(L+(i+1),O),u[i]);
}return v;
},escapeRegexpChars:function(k){return k.replace(/([.*+?^${}()|[\]\/\\])/g,M);
},toArray:function(y){return y.split(/\B|\b/g);
},stripTags:function(a){return a.replace(/<\/?[^>]+>/gi,P);
},stripScripts:function(f,g){var j=P;
var h=f.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){j+=arguments[1]+H;
return P;
});

if(g===true){qx.lang.Function.globalEval(j);
}return h;
}}});
})();
(function(){var s="function",r="Boolean",q="qx.Interface",p="]",o="toggle",n="Interface",m="is",k="[Interface ";
qx.Bootstrap.define(q,{statics:{define:function(name,t){if(t){if(t.extend&&!(t.extend instanceof Array)){t.extend=[t.extend];
}{};
var u=t.statics?t.statics:{};
if(t.extend){u.$$extends=t.extend;
}
if(t.properties){u.$$properties=t.properties;
}
if(t.members){u.$$members=t.members;
}
if(t.events){u.$$events=t.events;
}}else{var u={};
}u.$$type=n;
u.name=name;
u.toString=this.genericToString;
u.basename=qx.Bootstrap.createNamespace(name,u);
qx.Interface.$$registry[name]=u;
return u;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(E){if(!E){return [];
}var F=E.concat();

for(var i=0,l=E.length;i<l;i++){if(E[i].$$extends){F.push.apply(F,this.flatten(E[i].$$extends));
}}return F;
},__eH:function(a,b,c,d){var h=c.$$members;

if(h){for(var g in h){if(qx.lang.Type.isFunction(h[g])){var f=this.__eI(b,g);
var e=f||qx.lang.Type.isFunction(a[g]);

if(!e){throw new Error('Implementation of method "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}var j=d===true&&!f&&!qx.Class.hasInterface(b,c);

if(j){a[g]=this.__eL(c,a[g],g,h[g]);
}}else{if(typeof a[g]===undefined){if(typeof a[g]!==s){throw new Error('Implementation of member "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}}}}}},__eI:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.lang.String.firstLow(D[2]);
var B=qx.Class.hasProperty(y,A);

if(!B){return false;
}var C=D[0]==m||D[0]==o;

if(C){return qx.Class.getPropertyDefinition(y,A).check==r;
}return true;
},__eJ:function(G,H){if(H.$$properties){for(var I in H.$$properties){if(!qx.Class.hasProperty(G,I)){throw new Error('The property "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},__eK:function(v,w){if(w.$$events){for(var x in w.$$events){if(!qx.Class.supportsEvent(v,x)){throw new Error('The event "'+x+'" is not supported by Class "'+v.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__eH(J,M,K,false);
this.__eJ(M,K);
this.__eK(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__eH(N.prototype,N,O,P);
this.__eJ(N,O);
this.__eK(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__eL:function(){},__eM:null,__eN:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__lh:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lh=null;
},getInsets:function(){if(this.__lh){return this.__lh;
}var a=this._getDefaultInsets();
return this.__lh={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lh=null;
}},destruct:function(){this.__lh=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var r="_applyStyle",q="Color",p="px",o="solid",n="dotted",m="double",l="dashed",k="",j="_applyWidth",i="qx.ui.decoration.Uniform",f="px ",h=" ",g="scale",e="PositiveInteger",d="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:e,init:0,apply:j},style:{nullable:true,check:[o,n,l,m],init:o,apply:r},color:{nullable:true,check:q,apply:r},backgroundColor:{check:q,nullable:true,apply:r}},members:{__po:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__po;
},getMarkup:function(){if(this.__po){return this.__po;
}var t={position:d,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+f+this.getStyle()+h+w.resolve(this.getColor());
var v=this._generateBackgroundMarkup(t);
return this.__po=v;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==g;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+p;
A.style.height=C+p;
},tint:function(x,y){var z=qx.theme.manager.Color.getInstance();

if(y==null){y=this.getBackgroundColor();
}x.style.backgroundColor=z.resolve(y)||k;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__po=null;
}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__lk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lk;
},getMarkup:function(){if(this.__lk){return this.__lk;
}var j={position:d,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__lk=k;
},resize:function(a,b,c){a.style.width=b+i;
a.style.height=c+i;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__lk=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="double",f="px ",e="dotted",d="_applyWidth",c="dashed",b="Number",a=" ",F="shorthand",E="px",D="widthTop",C="styleRight",B="styleLeft",A="widthLeft",z="widthBottom",y="styleTop",x="colorBottom",w="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="scale",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="",v="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){arguments.callee.base.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:b,init:0,apply:d},widthRight:{check:b,init:0,apply:d},widthBottom:{check:b,init:0,apply:d},widthLeft:{check:b,init:0,apply:d},styleTop:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleRight:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleBottom:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleLeft:{nullable:true,check:[i,e,c,g],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[A,B,r]},right:{group:[q,C,o]},top:{group:[D,y,p]},bottom:{group:[z,w,x]},width:{group:[D,q,z,A],mode:F},style:{group:[y,C,w,B],mode:F},color:{group:[p,o,x,r],mode:F}},members:{__nh:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nh;
},getMarkup:function(L){if(this.__nh){return this.__nh;
}var M=qx.theme.manager.Color.getInstance();
var N={};
var P=this.getWidthTop();

if(P>0){N[n]=P+f+this.getStyleTop()+a+M.resolve(this.getColorTop());
}var P=this.getWidthRight();

if(P>0){N[l]=P+f+this.getStyleRight()+a+M.resolve(this.getColorRight());
}var P=this.getWidthBottom();

if(P>0){N[v]=P+f+this.getStyleBottom()+a+M.resolve(this.getColorBottom());
}var P=this.getWidthLeft();

if(P>0){N[k]=P+f+this.getStyleLeft()+a+M.resolve(this.getColorLeft());
}{};
N.position=u;
N.top=0;
N.left=0;
var O=this._generateBackgroundMarkup(N);
return this.__nh=O;
},resize:function(G,H,I){var K=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(K||qx.bom.client.Feature.CONTENT_BOX){var J=this.getInsets();
H-=J.left+J.right;
I-=J.top+J.bottom;
if(H<0){H=0;
}
if(I<0){I=0;
}}G.style.width=H+E;
G.style.height=I+E;
},tint:function(Q,R){var S=qx.theme.manager.Color.getInstance();

if(R==null){R=this.getBackgroundColor();
}Q.style.backgroundColor=S.resolve(R)||t;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nh=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="-c",k="mshtml",l="qx.ui.decoration.Grid";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,construct:function(F,G){arguments.callee.base.call(this);
if(F!=null){this.setBaseImage(F);
}
if(G!=null){this.setInsets(G);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__ne:null,__nf:null,__ng:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ne;
},getMarkup:function(){if(this.__ne){return this.__ne;
}var H=qx.bom.element.Decoration;
var I=this.__nf;
var J=this.__ng;
var K=[];
K.push(s);
K.push(H.create(I.tl,g,{top:0,left:0}));
K.push(H.create(I.t,f,{top:0,left:J.left+j}));
K.push(H.create(I.tr,g,{top:0,right:0}));
K.push(H.create(I.bl,g,{bottom:0,left:0}));
K.push(H.create(I.b,f,{bottom:0,left:J.left+j}));
K.push(H.create(I.br,g,{bottom:0,right:0}));
K.push(H.create(I.l,e,{top:J.top+j,left:0}));
K.push(H.create(I.c,a,{top:J.top+j,left:J.left+j}));
K.push(H.create(I.r,e,{top:J.top+j,right:0}));
K.push(b);
return this.__ne=K.join(o);
},resize:function(Q,R,S){var T=this.__ng;
var innerWidth=R-T.left-T.right;
var innerHeight=S-T.top-T.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}Q.style.width=R+j;
Q.style.height=S+j;
Q.childNodes[1].style.width=innerWidth+j;
Q.childNodes[4].style.width=innerWidth+j;
Q.childNodes[7].style.width=innerWidth+j;
Q.childNodes[6].style.height=innerHeight+j;
Q.childNodes[7].style.height=innerHeight+j;
Q.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(R%2==1){Q.childNodes[2].style.marginRight=h;
Q.childNodes[5].style.marginRight=h;
Q.childNodes[8].style.marginRight=h;
}else{Q.childNodes[2].style.marginRight=i;
Q.childNodes[5].style.marginRight=i;
Q.childNodes[8].style.marginRight=i;
}
if(S%2==1){Q.childNodes[3].style.marginBottom=h;
Q.childNodes[4].style.marginBottom=h;
Q.childNodes[5].style.marginBottom=h;
}else{Q.childNodes[3].style.marginBottom=i;
Q.childNodes[4].style.marginBottom=i;
Q.childNodes[5].style.marginBottom=i;
}}}},tint:function(L,M){},_applyBaseImage:function(y,z){{};

if(y){var D=this._resolveImageUrl(y);
var E=/(.*)(\.[a-z]+)$/.exec(D);
var C=E[1];
var B=E[2];
var A=this.__nf={tl:C+u+B,t:C+v+B,tr:C+d+B,bl:C+m+B,b:C+q+B,br:C+w+B,l:C+c+B,c:C+n+B,r:C+t+B};
this.__ng=this._computeEdgeSizes(A);
}},_resolveImageUrl:function(N){return qx.util.AliasManager.getInstance().resolve(N);
},_computeEdgeSizes:function(O){var P=qx.util.ResourceManager.getInstance();
return {top:P.getImageHeight(O.t),bottom:P.getImageHeight(O.b),left:P.getImageWidth(O.l),right:P.getImageWidth(O.r)};
}},destruct:function(){this.__ne=this.__nf=this.__ng=null;
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="1px",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",G='</div>',F="qx.ui.decoration.Beveled",E='<div style="position:absolute;top:1px;left:1px;',D='border-bottom:',C='border-right:',B='border-left:',A='border-top:',z="Number",y='<div style="position:absolute;top:1px;left:0px;',x='position:absolute;top:0px;left:1px;',v='<div style="overflow:hidden;font-size:0;line-height:0;">',w="absolute";
qx.Class.define(F,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){arguments.callee.base.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:z,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__oO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oO;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oO){return this.__oO;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=o+N.resolve(this.getOuterColor())+m;
var Q=o+N.resolve(this.getInnerColor())+m;
O.push(v);
O.push(q);
O.push(p,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(t);
O.push(y);
O.push(B,R);
O.push(C,R);
O.push(t);
O.push(q);
O.push(x);
O.push(A,R);
O.push(D,R);
O.push(t);
var P={position:w,top:r,left:r};
O.push(this._generateBackgroundMarkup(P));
O.push(E);
O.push(p,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(t);
O.push(G);
return this.__oO=O.join(n);
},resize:function(a,b,c){if(b<4){b=4;
}
if(c<4){c=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=b-2;
var outerHeight=c-2;
var i=outerWidth;
var h=outerHeight;
var innerWidth=b-4;
var innerHeight=c-4;
}else{var outerWidth=b;
var outerHeight=c;
var i=b-2;
var h=c-2;
var innerWidth=i;
var innerHeight=h;
}var k=l;
var g=a.childNodes[0].style;
g.width=outerWidth+k;
g.height=outerHeight+k;
var f=a.childNodes[1].style;
f.width=outerWidth+k;
f.height=h+k;
var e=a.childNodes[2].style;
e.width=i+k;
e.height=outerHeight+k;
var d=a.childNodes[3].style;
d.width=i+k;
d.height=h+k;
var j=a.childNodes[4].style;
j.width=innerWidth+k;
j.height=innerHeight+k;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||n;
}},destruct:function(){this.__oO=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__iK:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__iK();
}});
})();
(function(){var k="win98",j="osx2",i="osx0",h="osx4",g="win95",f="win2000",e="osx1",d="osx5",c="osx3",b="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",r="os9",s="\.",p="osx",q="linux",n="netbsd",o="winvista",l="openbsd",m="(",t="win2003",u="symbian",w="win7",v="g",y="qx.bom.client.System",x=" Mobile/";
qx.Bootstrap.define(y,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__jE:{"Windows NT 6.1":w,"Windows NT 6.0":o,"Windows NT 5.2":t,"Windows NT 5.1":H,"Windows NT 5.0":f,"Windows 2000":f,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":k,"Win98":k,"Windows 95":g,"Win95":g,"Linux":q,"FreeBSD":G,"NetBSD":n,"OpenBSD":l,"SunOS":F,"Symbian System":u,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":d,"Mac OS X 10.5":d,"Mac OS X 10_4":h,"Mac OS X 10.4":h,"Mac OS X 10_3":c,"Mac OS X 10.3":c,"Mac OS X 10_2":j,"Mac OS X 10.2":j,"Mac OS X 10_1":e,"Mac OS X 10.1":e,"Mac OS X 10_0":i,"Mac OS X 10.0":i,"Mac OS X":p,"Mac OS 9":r},__jF:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__jE){K.push(J);
}var M=new RegExp(m+K.join(D).replace(/\./g,s)+I,v);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(x).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__jE[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(b)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(a){a.__jF();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var hr="button-frame",hq="atom",hp="widget",ho="main",hn="button",hm="text-selected",hl="image",hk="bold",hj="middle",hi="background-light",fU="text-disabled",fT="groupbox",fS="decoration/arrows/down.png",fR="cell",fQ="selected",fP="border-invalid",fO="input",fN="input-disabled",fM="menu-button",fL="input-focused-invalid",hy="toolbar-button",hz="spinner",hw="input-focused",hx="popup",hu="tooltip",hv="list",hs="tree-item",ht="treevirtual-contract",hA="scrollbar",hB="datechooser/nav-button",gQ="text-hovered",gP="center",gS="treevirtual-expand",gR="textfield",gU="label",gT="decoration/arrows/right.png",gW="background-application",gV="radiobutton",gO="white",gN="invalid",dQ="combobox",dR="right-top",dS=".png",dT="checkbox",dU="text-title",dV="qx/static/blank.gif",dW="scrollbar/button",dX="right",dY="combobox/button",ea="icon/16/places/folder.png",hP="text-label",hO="decoration/tree/closed.png",hN="scrollbar-slider-horizontal",hM="decoration/arrows/left.png",hT="button-focused",hS="text-light",hR="menu-slidebar-button",hQ="text-input",hV="slidebar/button-forward",hU="background-splitpane",eS="decoration/tree/open.png",eT="default",eQ="decoration/arrows/down-small.png",eR="datechooser",eW="slidebar/button-backward",eX="selectbox",eU="treevirtual-folder",eV="shadow-popup",eO="icon/16/mimetypes/office-document.png",eP="background-medium",eu=".gif",et="table",ew="decoration/arrows/up.png",ev="decoration/form/",eq="",ep="-invalid",es="icon/16/places/folder-open.png",er="button-checked",eo="decoration/window/maximize-active-hovered.png",en="radiobutton-hovered",fe="decoration/cursors/",ff="slidebar",fg="tooltip-error-arrow",fh="table-scroller-focus-indicator",fa="move-frame",fb="nodrop",fc="decoration/table/boolean-true.png",fd="table-header-cell",fi="menu",fj="app-header",eH="row-layer",eG="text-inactive",eF="move",eE="radiobutton-checked-focused",eD="decoration/window/restore-active-hovered.png",eC="shadow-window",eB="table-column-button",eA="right.png",eL="tabview-page-button-bottom-inactive",eK="tooltip-error",fk="window-statusbar",fl="button-hovered",fm="decoration/scrollbar/scrollbar-",fn="background-tip",fo="scrollbar-slider-horizontal-disabled",fp="table-scroller-header",fq="radiobutton-disabled",fr="button-pressed",fs="table-pane",ft="decoration/window/close-active.png",gd="native",gc="checkbox-hovered",gb="button-invalid-shadow",ga="checkbox-checked",gh="decoration/window/minimize-active-hovered.png",gg="menubar",gf="icon/16/actions/dialog-cancel.png",ge="tabview-page-button-top-inactive",gl="tabview-page-button-left-inactive",gk="menu-slidebar",gI="toolbar-button-checked",gJ="decoration/tree/open-selected.png",gG="radiobutton-checked",gH="decoration/window/minimize-inactive.png",gE="icon/16/apps/office-calendar.png",gF="group",gC="tabview-page-button-right-inactive",gD="decoration/window/minimize-active.png",gK="decoration/window/restore-inactive.png",gL="checkbox-checked-focused",hb="splitpane",ha="combobox/textfield",hd="button-preselected-focused",hc="decoration/window/close-active-hovered.png",hf="qx/icon/Tango/16/actions/window-close.png",he="checkbox-pressed",hh="button-disabled",hg="selected-dragover",gY="border-separator",gX="decoration/window/maximize-inactive.png",hI="dragover",hJ="scrollarea",hK="scrollbar-vertical",hL="decoration/menu/checkbox-invert.gif",hE="decoration/toolbar/toolbar-handle-knob.gif",hF="icon/22/mimetypes/office-document.png",hG="button-preselected",hH="button-checked-focused",hC="up.png",hD="best-fit",dP="decoration/tree/closed-selected.png",dO="qx.theme.modern.Appearance",dN="text-active",dM="checkbox-disabled",dL="toolbar-button-hovered",dK="progressive-table-header",dJ="decoration/table/select-column-order.png",dI="decoration/menu/radiobutton.gif",dH="decoration/arrows/forward.png",dG="decoration/table/descending",ed="window-captionbar-active",ee="checkbox-checked-hovered",eb="scrollbar-slider-vertical",ec="toolbar",eh="alias",ei="decoration/window/restore-active.png",ef="decoration/table/boolean-false.png",eg="checkbox-checked-disabled",ek="icon/32/mimetypes/office-document.png",el="radiobutton-checked-disabled",gp="tabview-pane",gj="decoration/arrows/rewind.png",gw="checkbox-focused",gs="top",fX="#EEE",fV="icon/16/actions/dialog-ok.png",ey="radiobutton-checked-hovered",fY="table-header-cell-hovered",eJ="window",eI="text-gray",fD="decoration/menu/radiobutton-invert.gif",fE="text-placeholder",fF="slider",fG="keep-align",fH="down.png",fI="tabview-page-button-top-active",fJ="icon/32/places/folder-open.png",fK="icon/22/places/folder.png",fA="decoration/window/maximize-active.png",fB="checkbox-checked-pressed",fW="decoration/window/close-inactive.png",gv="tabview-page-button-left-active",gu="toolbar-part",gt="decoration/splitpane/knob-vertical.png",gA="icon/22/places/folder-open.png",gz="radiobutton-checked-pressed",gy="table-statusbar",gx="radiobutton-pressed",gr="window-captionbar-inactive",gq="copy",ej="radiobutton-focused",eN="decoration/arrows/down-invert.png",eM="decoration/menu/checkbox.gif",gi="decoration/splitpane/knob-horizontal.png",eY="decoration/table/ascending",go="icon/32/places/folder.png",gn="toolbar-separator",gm="tabview-page-button-bottom-active",ex="decoration/arrows/up-small.png",gB="decoration/arrows/up-invert.png",em="small",ez="tabview-page-button-right-active",fu="-disabled",fv="scrollbar-horizontal",fw="progressive-table-header-cell",fx="menu-separator",fy="pane",fz="decoration/arrows/right-invert.png",gM="left.png",fC="icon/16/actions/view-refresh.png";
qx.Theme.define(dO,{appearances:{"widget":{},"root":{style:function(cy){return {backgroundColor:gW,textColor:hP,font:eT};
}},"label":{style:function(dg){return {textColor:dg.disabled?fU:undefined};
}},"move-frame":{style:function(cl){return {decorator:ho};
}},"resize-frame":fa,"dragdrop-cursor":{style:function(hX){var hY=fb;

if(hX.copy){hY=gq;
}else if(hX.move){hY=eF;
}else if(hX.alias){hY=eh;
}return {source:fe+hY+eu,position:dR,offset:[2,16,2,6]};
}},"image":{style:function(bJ){return {opacity:!bJ.replacement&&bJ.disabled?0.3:1};
}},"atom":{},"atom/label":gU,"atom/icon":hl,"popup":{style:function(cQ){return {decorator:ho,backgroundColor:hi,shadow:eV};
}},"button-frame":{alias:hq,style:function(bC){var bE,bD;

if(bC.checked&&bC.focused&&!bC.inner){bE=hH;
bD=undefined;
}else if(bC.disabled){bE=hh;
bD=undefined;
}else if(bC.pressed){bE=fr;
bD=gQ;
}else if(bC.checked){bE=er;
bD=undefined;
}else if(bC.hovered){bE=fl;
bD=gQ;
}else if(bC.preselected&&bC.focused&&!bC.inner){bE=hd;
bD=gQ;
}else if(bC.preselected){bE=hG;
bD=gQ;
}else if(bC.focused&&!bC.inner){bE=hT;
bD=undefined;
}else{bE=hn;
bD=undefined;
}return {decorator:bE,textColor:bD,shadow:bC.invalid&&!bC.disabled?gb:undefined};
}},"button-frame/image":{style:function(cB){return {opacity:!cB.replacement&&cB.disabled?0.5:1};
}},"button":{alias:hr,include:hr,style:function(de){return {padding:[2,8],center:true};
}},"hover-button":{alias:hq,include:hq,style:function(bM){return {decorator:bM.hovered?fQ:undefined,textColor:bM.hovered?hm:undefined};
}},"splitbutton":{},"splitbutton/button":hn,"splitbutton/arrow":{alias:hn,include:hn,style:function(ic){return {icon:fS,padding:2,marginLeft:1};
}},"checkbox":{alias:hq,style:function(cG){var cI;

if(cG.checked&&cG.focused){cI=gL;
}else if(cG.checked&&cG.disabled){cI=eg;
}else if(cG.checked&&cG.pressed){cI=fB;
}else if(cG.checked&&cG.hovered){cI=ee;
}else if(cG.checked){cI=ga;
}else if(cG.disabled){cI=dM;
}else if(cG.focused){cI=gw;
}else if(cG.pressed){cI=he;
}else if(cG.hovered){cI=gc;
}else{cI=dT;
}var cH=cG.invalid&&!cG.disabled?ep:eq;
return {icon:ev+cI+cH+dS,gap:6};
}},"radiobutton":{alias:hq,style:function(bu){var bw;

if(bu.checked&&bu.focused){bw=eE;
}else if(bu.checked&&bu.disabled){bw=el;
}else if(bu.checked&&bu.pressed){bw=gz;
}else if(bu.checked&&bu.hovered){bw=ey;
}else if(bu.checked){bw=gG;
}else if(bu.disabled){bw=fq;
}else if(bu.focused){bw=ej;
}else if(bu.pressed){bw=gx;
}else if(bu.hovered){bw=en;
}else{bw=gV;
}var bv=bu.invalid&&!bu.disabled?ep:eq;
return {icon:ev+bw+bv+dS,gap:6};
}},"textfield":{style:function(dm){var ds;
var dq=!!dm.focused;
var dr=!!dm.invalid;
var dn=!!dm.disabled;

if(dq&&dr&&!dn){ds=fL;
}else if(dq&&!dr&&!dn){ds=hw;
}else if(dn){ds=fN;
}else if(!dq&&dr&&!dn){ds=fP;
}else{ds=fO;
}var dp;

if(dm.disabled){dp=fU;
}else if(dm.showingPlaceholder){dp=fE;
}else{dp=hQ;
}return {decorator:ds,padding:[2,4,1],textColor:dp};
}},"textarea":{include:gR,style:function(cK){return {padding:4};
}},"spinner":{style:function(dh){var dl;
var dj=!!dh.focused;
var dk=!!dh.invalid;
var di=!!dh.disabled;

if(dj&&dk&&!di){dl=fL;
}else if(dj&&!dk&&!di){dl=hw;
}else if(di){dl=fN;
}else if(!dj&&dk&&!di){dl=fP;
}else{dl=fO;
}return {decorator:dl};
}},"spinner/textfield":{style:function(cd){return {marginRight:2,padding:[2,4,1],textColor:cd.disabled?fU:hQ};
}},"spinner/upbutton":{alias:hr,include:hr,style:function(cm){return {icon:ex,padding:cm.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hr,include:hr,style:function(cM){return {icon:eQ,padding:cM.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dQ,"datefield/button":{alias:dY,include:dY,style:function(m){return {icon:gE,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ha,"datefield/list":{alias:eR,include:eR,style:function(ib){return {decorator:undefined};
}},"groupbox":{style:function(cW){return {legendPosition:gs};
}},"groupbox/legend":{alias:hq,style:function(ci){return {padding:[1,0,1,4],textColor:ci.invalid?gN:dU,font:hk};
}},"groupbox/frame":{style:function(cg){return {padding:12,decorator:gF};
}},"check-groupbox":fT,"check-groupbox/legend":{alias:dT,include:dT,style:function(N){return {padding:[1,0,1,4],textColor:N.invalid?gN:dU,font:hk};
}},"radio-groupbox":fT,"radio-groupbox/legend":{alias:gV,include:gV,style:function(ch){return {padding:[1,0,1,4],textColor:ch.invalid?gN:dU,font:hk};
}},"scrollarea":{style:function(x){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(J){return {backgroundColor:gW};
}},"scrollarea/pane":hp,"scrollarea/scrollbar-x":hA,"scrollarea/scrollbar-y":hA,"scrollbar":{style:function(v){if(v[gd]){return {};
}return {width:v.horizontal?undefined:16,height:v.horizontal?16:undefined,decorator:v.horizontal?fv:hK,padding:1};
}},"scrollbar/slider":{alias:fF,style:function(Q){return {padding:Q.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hr,style:function(cT){var cU=cT.horizontal?hN:eb;

if(cT.disabled){cU+=fu;
}return {decorator:cU,minHeight:cT.horizontal?undefined:9,minWidth:cT.horizontal?9:undefined};
}},"scrollbar/button":{alias:hr,include:hr,style:function(bs){var bt=fm;

if(bs.left){bt+=gM;
}else if(bs.right){bt+=eA;
}else if(bs.up){bt+=hC;
}else{bt+=fH;
}
if(bs.left||bs.right){return {padding:[0,0,0,bs.left?3:4],icon:bt,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bt,width:14,height:15};
}}},"scrollbar/button-begin":dW,"scrollbar/button-end":dW,"slider":{style:function(q){var u;
var s=!!q.focused;
var t=!!q.invalid;
var r=!!q.disabled;

if(s&&t&&!r){u=fL;
}else if(s&&!t&&!r){u=hw;
}else if(r){u=fN;
}else if(!s&&t&&!r){u=fP;
}else{u=fO;
}return {decorator:u};
}},"slider/knob":{include:hr,style:function(cS){return {decorator:cS.disabled?fo:hN,shadow:undefined,height:14,width:14};
}},"list":{alias:hJ,style:function(du){var dy;
var dw=!!du.focused;
var dx=!!du.invalid;
var dv=!!du.disabled;

if(dw&&dx&&!dv){dy=fL;
}else if(dw&&!dx&&!dv){dy=hw;
}else if(dv){dy=fN;
}else if(!dw&&dx&&!dv){dy=fP;
}else{dy=fO;
}return {backgroundColor:hi,decorator:dy};
}},"list/pane":hp,"listitem":{alias:hq,style:function(co){var cp;

if(co.dragover){cp=co.selected?hg:hI;
}else{cp=co.selected?fQ:undefined;
}return {padding:co.dragover?[4,4,2,4]:4,textColor:co.selected?hm:undefined,decorator:cp};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hr,include:hr,style:function(cA){return {padding:5,center:true,icon:cA.vertical?fS:gT};
}},"slidebar/button-backward":{alias:hr,include:hr,style:function(bn){return {padding:5,center:true,icon:bn.vertical?ew:hM};
}},"tabview":{style:function(bX){return {contentPadding:16};
}},"tabview/bar":{alias:ff,style:function(S){var T={marginBottom:S.barTop?-1:0,marginTop:S.barBottom?-4:0,marginLeft:S.barRight?-3:0,marginRight:S.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(S.barTop||S.barBottom){T.paddingLeft=5;
T.paddingRight=7;
}else{T.paddingTop=5;
T.paddingBottom=7;
}return T;
}},"tabview/bar/button-forward":{include:hV,alias:hV,style:function(z){if(z.barTop||z.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eW,alias:eW,style:function(bL){if(bL.barTop||bL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(C){return {decorator:gp,minHeight:100,marginBottom:C.barBottom?-1:0,marginTop:C.barTop?-1:0,marginLeft:C.barLeft?-1:0,marginRight:C.barRight?-1:0};
}},"tabview-page":hp,"tabview-page/button":{alias:hq,style:function(bf){var bl,bh=0;
var bk=0,bg=0,bi=0,bj=0;

if(bf.checked){if(bf.barTop){bl=fI;
bh=[6,14];
bi=bf.firstTab?0:-5;
bj=bf.lastTab?0:-5;
}else if(bf.barBottom){bl=gm;
bh=[6,14];
bi=bf.firstTab?0:-5;
bj=bf.lastTab?0:-5;
}else if(bf.barRight){bl=ez;
bh=[6,13];
bk=bf.firstTab?0:-5;
bg=bf.lastTab?0:-5;
}else{bl=gv;
bh=[6,13];
bk=bf.firstTab?0:-5;
bg=bf.lastTab?0:-5;
}}else{if(bf.barTop){bl=ge;
bh=[4,10];
bk=4;
bi=bf.firstTab?5:1;
bj=1;
}else if(bf.barBottom){bl=eL;
bh=[4,10];
bg=4;
bi=bf.firstTab?5:1;
bj=1;
}else if(bf.barRight){bl=gC;
bh=[4,10];
bj=5;
bk=bf.firstTab?5:1;
bg=1;
bi=1;
}else{bl=gl;
bh=[4,10];
bi=5;
bk=bf.firstTab?5:1;
bg=1;
bj=1;
}}return {zIndex:bf.checked?10:5,decorator:bl,padding:bh,marginTop:bk,marginBottom:bg,marginLeft:bi,marginRight:bj,textColor:bf.checked?dN:eG};
}},"tabview-page/button/close-button":{alias:hq,style:function(bN){return {icon:hf};
}},"toolbar":{style:function(R){return {decorator:ec,spacing:2};
}},"toolbar/part":{style:function(df){return {decorator:gu,spacing:2};
}},"toolbar/part/container":{style:function(l){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bK){return {source:hE,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hq,style:function(d){return {marginTop:2,marginBottom:2,padding:(d.pressed||d.checked||d.hovered)&&!d.disabled||(d.disabled&&d.checked)?3:5,decorator:d.pressed||(d.checked&&!d.hovered)||(d.checked&&d.disabled)?gI:d.hovered&&!d.disabled?dL:undefined};
}},"toolbar-menubutton":{alias:hy,include:hy,style:function(ih){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hl,include:hl,style:function(cs){return {source:eQ};
}},"toolbar-splitbutton":{style:function(ie){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hy,include:hy,style:function(e){return {icon:fS,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hy,include:hy,style:function(F){return {padding:F.pressed||F.checked?1:F.hovered?1:3,icon:fS,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(da){return {decorator:gn,margin:7};
}},"tree":hv,"tree-item":{style:function(bB){return {padding:[2,6],textColor:bB.selected?hm:undefined,decorator:bB.selected?fQ:undefined};
}},"tree-item/icon":{include:hl,style:function(B){return {paddingRight:5};
}},"tree-item/label":gU,"tree-item/open":{include:hl,style:function(cj){var ck;

if(cj.selected&&cj.opened){ck=gJ;
}else if(cj.selected&&!cj.opened){ck=dP;
}else if(cj.opened){ck=eS;
}else{ck=hO;
}return {padding:[0,5,0,2],source:ck};
}},"tree-folder":{include:hs,alias:hs,style:function(cv){var cw;

if(cv.small){cw=cv.opened?es:ea;
}else if(cv.large){cw=cv.opened?fJ:go;
}else{cw=cv.opened?gA:fK;
}return {icon:cw};
}},"tree-file":{include:hs,alias:hs,style:function(cz){return {icon:cz.small?eO:cz.large?ek:hF};
}},"treevirtual":et,"treevirtual-folder":{style:function(A){return {icon:A.opened?es:ea};
}},"treevirtual-file":{include:eU,alias:eU,style:function(i){return {icon:eO};
}},"treevirtual-line":{style:function(ba){return {icon:dV};
}},"treevirtual-contract":{style:function(bF){return {icon:eS,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(dc){return {icon:hO,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":ht,"treevirtual-only-expand":gS,"treevirtual-start-contract":ht,"treevirtual-start-expand":gS,"treevirtual-end-contract":ht,"treevirtual-end-expand":gS,"treevirtual-cross-contract":ht,"treevirtual-cross-expand":gS,"treevirtual-end":{style:function(I){return {icon:dV};
}},"treevirtual-cross":{style:function(bq){return {icon:dV};
}},"tooltip":{include:hx,style:function(H){return {backgroundColor:fn,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hq,"tooltip-error":{include:hu,style:function(id){return {textColor:hm,placeMethod:hp,offset:[0,0,0,14],marginTop:-2,position:dR,showTimeout:100,hideTimeout:10000,decorator:eK,shadow:fg,font:hk};
}},"tooltip-error/atom":hq,"window":{style:function(dz){return {shadow:eC,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(cC){return {decorator:eJ};
}},"window/captionbar":{style:function(hW){return {decorator:hW.active?ed:gr,textColor:hW.active?gO:eI,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bx){return {margin:[5,0,3,6]};
}},"window/title":{style:function(G){return {alignY:hj,font:hk,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hq,style:function(cL){return {icon:cL.active?cL.hovered?gh:gD:gH,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hq,style:function(be){return {icon:be.active?be.hovered?eD:ei:gK,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hq,style:function(cP){return {icon:cP.active?cP.hovered?eo:fA:gX,margin:[4,8,2,0]};
}},"window/close-button":{alias:hq,style:function(ct){return {icon:ct.active?ct.hovered?hc:ft:fW,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(dF){return {padding:[2,6],decorator:fk,minHeight:18};
}},"window/statusbar-text":{style:function(L){return {font:em};
}},"iframe":{style:function(bz){return {decorator:ho};
}},"resizer":{style:function(bV){return {decorator:fy};
}},"splitpane":{style:function(ia){return {decorator:hb};
}},"splitpane/splitter":{style:function(bH){return {width:bH.horizontal?3:undefined,height:bH.vertical?3:undefined,backgroundColor:hU};
}},"splitpane/splitter/knob":{style:function(p){return {source:p.horizontal?gi:gt};
}},"splitpane/slider":{style:function(bA){return {width:bA.horizontal?3:undefined,height:bA.vertical?3:undefined,backgroundColor:hU};
}},"selectbox":{alias:hr,include:hr,style:function(br){return {padding:[2,8]};
}},"selectbox/atom":hq,"selectbox/popup":hx,"selectbox/list":{alias:hv},"selectbox/arrow":{include:hl,style:function(bd){return {source:fS,paddingLeft:5};
}},"datechooser":{style:function(dA){var dE;
var dC=!!dA.focused;
var dD=!!dA.invalid;
var dB=!!dA.disabled;

if(dC&&dD&&!dB){dE=fL;
}else if(dC&&!dD&&!dB){dE=hw;
}else if(dB){dE=fN;
}else if(!dC&&dD&&!dB){dE=fP;
}else{dE=fO;
}return {padding:2,decorator:dE,backgroundColor:hi};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hr,alias:hr,style:function(bb){var bc={padding:[2,4],shadow:undefined};

if(bb.lastYear){bc.icon=gj;
bc.marginRight=1;
}else if(bb.lastMonth){bc.icon=hM;
}else if(bb.nextYear){bc.icon=dH;
bc.marginLeft=1;
}else if(bb.nextMonth){bc.icon=gT;
}return bc;
}},"datechooser/last-year-button-tooltip":hu,"datechooser/last-month-button-tooltip":hu,"datechooser/next-year-button-tooltip":hu,"datechooser/next-month-button-tooltip":hu,"datechooser/last-year-button":hB,"datechooser/last-month-button":hB,"datechooser/next-month-button":hB,"datechooser/next-year-button":hB,"datechooser/month-year-label":{style:function(U){return {font:hk,textAlign:gP,textColor:U.disabled?fU:undefined};
}},"datechooser/date-pane":{style:function(M){return {textColor:M.disabled?fU:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(ig){return {textColor:ig.disabled?fU:ig.weekend?hS:undefined,textAlign:gP,paddingTop:2,backgroundColor:eP};
}},"datechooser/week":{style:function(W){return {textAlign:gP,padding:[2,4],backgroundColor:eP};
}},"datechooser/day":{style:function(cc){return {textAlign:gP,decorator:cc.disabled?undefined:cc.selected?fQ:undefined,textColor:cc.disabled?fU:cc.selected?hm:cc.otherMonth?hS:undefined,font:cc.today?hk:undefined,padding:[2,4]};
}},"combobox":{style:function(bO){var bS;
var bQ=!!bO.focused;
var bR=!!bO.invalid;
var bP=!!bO.disabled;

if(bQ&&bR&&!bP){bS=fL;
}else if(bQ&&!bR&&!bP){bS=hw;
}else if(bP){bS=fN;
}else if(!bQ&&bR&&!bP){bS=fP;
}else{bS=fO;
}return {decorator:bS};
}},"combobox/popup":hx,"combobox/list":{alias:hv},"combobox/button":{include:hr,alias:hr,style:function(n){var o={icon:fS,padding:2};

if(n.selected){o.decorator=hT;
}return o;
}},"combobox/textfield":{include:gR,style:function(cD){return {decorator:undefined};
}},"menu":{style:function(cq){var cr={decorator:fi,shadow:eV,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cq.submenu||cq.contextmenu?hD:fG};

if(cq.submenu){cr.position=dR;
cr.offset=[-2,-3];
}return cr;
}},"menu/slidebar":gk,"menu-slidebar":hp,"menu-slidebar-button":{style:function(bT){return {decorator:bT.hovered?fQ:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hR,style:function(cu){return {icon:cu.hovered?gB:ew};
}},"menu-slidebar/button-forward":{include:hR,style:function(cV){return {icon:cV.hovered?eN:fS};
}},"menu-separator":{style:function(bG){return {height:0,decorator:fx,margin:[4,2]};
}},"menu-button":{alias:hq,style:function(dd){return {decorator:dd.selected?fQ:undefined,textColor:dd.selected?hm:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hl,style:function(c){return {alignY:hj};
}},"menu-button/label":{include:gU,style:function(f){return {alignY:hj,padding:1};
}},"menu-button/shortcut":{include:gU,style:function(Y){return {alignY:hj,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hl,style:function(bY){return {source:bY.selected?fz:gT,alignY:hj};
}},"menu-checkbox":{alias:fM,include:fM,style:function(h){return {icon:!h.checked?undefined:h.selected?hL:eM};
}},"menu-radiobutton":{alias:fM,include:fM,style:function(bI){return {icon:!bI.checked?undefined:bI.selected?fD:dI};
}},"menubar":{style:function(bo){return {decorator:gg};
}},"menubar-button":{alias:hq,style:function(bU){return {decorator:bU.pressed||bU.hovered?fQ:undefined,textColor:bU.pressed||bU.hovered?hm:undefined,padding:[3,8]};
}},"colorselector":hp,"colorselector/control-bar":hp,"colorselector/control-pane":hp,"colorselector/visual-pane":fT,"colorselector/preset-grid":hp,"colorselector/colorbucket":{style:function(X){return {decorator:ho,width:16,height:16};
}},"colorselector/preset-field-set":fT,"colorselector/input-field-set":fT,"colorselector/preview-field-set":fT,"colorselector/hex-field-composite":hp,"colorselector/hex-field":gR,"colorselector/rgb-spinner-composite":hp,"colorselector/rgb-spinner-red":hz,"colorselector/rgb-spinner-green":hz,"colorselector/rgb-spinner-blue":hz,"colorselector/hsb-spinner-composite":hp,"colorselector/hsb-spinner-hue":hz,"colorselector/hsb-spinner-saturation":hz,"colorselector/hsb-spinner-brightness":hz,"colorselector/preview-content-old":{style:function(bW){return {decorator:ho,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cf){return {decorator:ho,backgroundColor:hi,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cR){return {decorator:ho,margin:5};
}},"colorselector/brightness-field":{style:function(dt){return {decorator:ho,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hp,"colorselector/hue-saturation-handle":hp,"colorselector/brightness-pane":hp,"colorselector/brightness-handle":hp,"colorpopup":{alias:hx,include:hx,style:function(K){return {padding:5,backgroundColor:gW};
}},"colorpopup/field":{style:function(cN){return {decorator:ho,margin:2,width:14,height:14,backgroundColor:hi};
}},"colorpopup/selector-button":hn,"colorpopup/auto-button":hn,"colorpopup/preview-pane":fT,"colorpopup/current-preview":{style:function(w){return {height:20,padding:4,marginLeft:4,decorator:ho,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(cF){return {height:20,padding:4,marginRight:4,decorator:ho,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hn,include:hn,style:function(cY){return {icon:fV};
}},"colorpopup/colorselector-cancelbutton":{alias:hn,include:hn,style:function(E){return {icon:gf};
}},"table":{alias:hp,style:function(cx){return {decorator:et};
}},"table-header":{},"table/statusbar":{style:function(D){return {decorator:gy,padding:[0,2]};
}},"table/column-button":{alias:hr,style:function(cb){return {decorator:eB,padding:3,icon:dJ};
}},"table-column-reset-button":{include:fM,alias:fM,style:function(){return {icon:fC};
}},"table-scroller":hp,"table-scroller/scrollbar-x":hA,"table-scroller/scrollbar-y":hA,"table-scroller/header":{style:function(ca){return {decorator:fp};
}},"table-scroller/pane":{style:function(cn){return {backgroundColor:fs};
}},"table-scroller/focus-indicator":{style:function(a){return {decorator:fh};
}},"table-scroller/resize-line":{style:function(cJ){return {backgroundColor:gY,width:2};
}},"table-header-cell":{alias:hq,style:function(O){var P=qx.bom.client.Engine.MSHTML?eu:dS;
return {minWidth:13,minHeight:20,padding:O.hovered?[3,4,2,4]:[3,4],decorator:O.hovered?fY:fd,sortIcon:O.sorted?(O.sortedAscending?eY+P:dG+P):undefined};
}},"table-header-cell/label":{style:function(cO){return {minWidth:0,alignY:hj,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(db){return {alignY:hj,alignX:dX};
}},"table-header-cell/icon":{style:function(g){return {minWidth:0,alignY:hj,paddingRight:5};
}},"table-editor-textfield":{include:gR,style:function(k){return {decorator:undefined,padding:[2,2],backgroundColor:hi};
}},"table-editor-selectbox":{include:eX,alias:eX,style:function(b){return {padding:[0,2],backgroundColor:hi};
}},"table-editor-combobox":{include:dQ,alias:dQ,style:function(y){return {decorator:undefined,backgroundColor:hi};
}},"progressive-table-header":{alias:hp,style:function(V){return {decorator:dK};
}},"progressive-table-header-cell":{alias:hq,style:function(j){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fw};
}},"app-header":{style:function(ce){return {font:hk,textColor:hm,padding:[8,12],decorator:fj};
}},"virtual-list":hv,"virtual-list/row-layer":eH,"row-layer":{style:function(bp){return {colorEven:gO,colorOdd:fX};
}},"column-layer":hp,"cell":{style:function(cX){return {textColor:cX.selected?hm:hP,padding:[3,6],font:eT};
}},"cell-string":fR,"cell-number":{include:fR,style:function(by){return {textAlign:dX};
}},"cell-image":fR,"cell-boolean":{include:fR,style:function(cE){return {iconTrue:fc,iconFalse:ef};
}},"cell-atom":fR,"cell-date":fR,"cell-html":fR,"htmlarea":{"include":hp,style:function(bm){return {backgroundColor:gO};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var p="emulated",o="native",n='"',m="qx.lang.Core",k="\\\\",j="\\\"",h="[object Error]";
qx.Bootstrap.define(m,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==h)?p:o,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?o:p,{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?o:p,{"native":Array.prototype.lastIndexOf,"emulated":function(f,g){if(g==null){g=this.length-1;
}else if(g<0){g=Math.max(0,this.length+g);
}
for(var i=g;i>=0;i--){if(this[i]===f){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?o:p,{"native":Array.prototype.forEach,"emulated":function(q,r){var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){q.call(r||window,s,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?o:p,{"native":Array.prototype.filter,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(w.call(x||window,z,i,this)){y.push(this[i]);
}}}return y;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?o:p,{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?o:p,{"native":Array.prototype.some,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(t.call(u||window,v,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?o:p,{"native":Array.prototype.every,"emulated":function(c,d){var l=this.length;

for(var i=0;i<l;i++){var e=this[i];

if(e!==undefined){if(!c.call(d||window,e,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?o:p,{"native":String.prototype.quote,"emulated":function(){return n+this.replace(/\\/g,k).replace(/\"/g,j)+n;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var r="indexOf",q="lastIndexOf",p="slice",o="concat",n="join",m="toLocaleUpperCase",k="shift",j="substr",h="filter",g="unshift",O="match",N="quote",M="qx.lang.Generics",L="localeCompare",K="sort",J="some",I="charAt",H="split",G="substring",F="pop",z="toUpperCase",A="replace",x="push",y="charCodeAt",v="every",w="reverse",t="search",u="forEach",B="map",C="toLowerCase",E="splice",D="toLocaleLowerCase";
qx.Bootstrap.define(M,{statics:{__cb:{"Array":[n,w,K,x,F,k,g,E,o,p,r,q,u,B,h,J,v],"String":[N,G,C,z,I,y,r,q,D,m,L,O,t,A,H,j,o,p]},__cc:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cd:function(){var a=qx.lang.Generics.__cb;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cc(c,d);
}}}}},defer:function(f){f.__cd();
}});
})();
(function(){var e="qx.event.type.Data",d="qx.event.type.Event",c="qx.data.IListData";
qx.Interface.define(c,{events:{"change":e,"changeLength":d},members:{getItem:function(a){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(b){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",e="qx.event.GlobalError";
qx.Bootstrap.define(e,{statics:{setErrorHandler:function(i,j){this.__iC=i||null;
this.__iD=j||window;

if(qx.core.Setting.get(g)===f){if(i&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__iE,this);
}
if(!i&&window.onerror){window.onerror=null;
}}},__iE:function(b,c,d){if(this.__iC){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(l){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__iC){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(h){self.handleError(h);
}};
}else{return l;
}},handleError:function(k){if(this.__iC){this.__iC.call(this.__iD,k);
}}},defer:function(a){qx.core.Setting.define(g,f);
a.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dY=c;
this.__ea=d||b;
this.__eb=e===undefined?-1:e;
},members:{__dY:null,__ea:null,__eb:null,toString:function(){return this.__dY;
},getUri:function(){return this.__ea;
},getLineNumber:function(){return this.__eb;
}}});
})();
(function(){var h="qx.event.type.Event";
qx.Class.define(h,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(k){if(k){var l=k;
}else{var l=qx.event.Pool.getInstance().getObject(this.constructor);
}l._type=this._type;
l._target=this._target;
l._currentTarget=this._currentTarget;
l._relatedTarget=this._relatedTarget;
l._originalTarget=this._originalTarget;
l._stopPropagation=this._stopPropagation;
l._bubbles=this._bubbles;
l._preventDefault=this._preventDefault;
l._cancelable=this._cancelable;
return l;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(g){this._target=g;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(m){this._currentTarget=m;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(j){this._originalTarget=j;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__hS:null,__hT:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__hS=d;
this.__hT=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__hS=this.__hS;
c.__hT=this.__hT;
return c;
},getData:function(){return this.__hS;
},getOldData:function(){return this.__hT;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._window=z.getWindow();
this.__gn=false;
this.__go=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gp:false,onScriptLoaded:function(){this.__gp=true;
var u=qx.event.handler.Application.$$instance;

if(u){u.__gs();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(q,r,s){},unregisterEvent:function(w,x,y){},__gq:null,__gn:null,__go:null,__gr:null,__gs:function(){var v=qx.event.handler.Application;
if(!this.__gq&&this.__gn&&v.__gp){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__gq=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__gq=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__gq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__gn=true;
this.__gs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var c=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(d){window.setTimeout(c,100);
}};
c();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gn=true;
this.__gs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gr){this.__gr=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var A=":",z="qx.client",y="anonymous",x="...",w="qx.dev.StackTrace",v="",u="\n",t="/source/class/",s=".";
qx.Bootstrap.define(w,{statics:{getStackTrace:qx.core.Variant.select(z,{"gecko":function(){try{throw new Error();
}catch(B){var h=this.getStackTraceFromError(B);
qx.lang.Array.removeAt(h,0);
var f=this.getStackTraceFromCaller(arguments);
var d=f.length>h.length?f:h;

for(var i=0;i<Math.min(f.length,h.length);i++){var e=f[i];

if(e.indexOf(y)>=0){continue;
}var m=e.split(A);

if(m.length!=2){continue;
}var k=m[0];
var c=m[1];
var b=h[i];
var n=b.split(A);
var j=n[0];
var a=n[1];

if(qx.Class.getByName(j)){var g=j;
}else{g=k;
}var l=g+A;

if(c){l+=c+A;
}l+=a;
d[i]=l;
}return d;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var p;

try{p.bar();
}catch(r){var q=this.getStackTraceFromError(r);
qx.lang.Array.removeAt(q,0);
return q;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(z,{"opera":function(bc){return [];
},"default":function(D){var I=[];
var H=qx.lang.Function.getCaller(D);
var E={};

while(H){var F=qx.lang.Function.getName(H);
I.push(F);

try{H=H.caller;
}catch(o){break;
}
if(!H){break;
}var G=qx.core.ObjectRegistry.toHashCode(H);

if(E[G]){I.push(x);
break;
}E[G]=H;
}return I;
}}),getStackTraceFromError:qx.core.Variant.select(z,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__iS(X);
W.push(Y+A+ba);
}return W;
},"webkit":function(C){if(C.sourceURL&&C.line){return [this.__iS(C.sourceURL)+A+C.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(u);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__iS(O[2]);
P.push(S+A+T);
}}return P;
},"default":function(){return [];
}}),__iS:function(J){var M=t;
var K=J.indexOf(M);
var L=(K==-1)?J:J.substring(K+M.length).replace(/\//g,s).replace(/\.js$/,v);
return L;
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__eG={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:d,init:Infinity}},members:{__eG:null,getObject:function(k){if(this.$$disposed){return;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__eG[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(f){if(!this.__eG){return;
}var g=f.classname;
var h=this.__eG[g];

if(f.$$pooled){throw new Error("Object is already pooled: "+f);
}
if(!h){this.__eG[g]=h=[];
}if(h.length>this.getSize()){if(f.destroy){f.destroy();
}else{f.dispose();
}return;
}f.$$pooled=true;
h.push(f);
}},destruct:function(){var c=this.__eG;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__eG;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var g="Don't use 'disposeFields' - instead assign directly to 'null'",f="qx.util.DisposeUtil";
qx.Class.define(f,{statics:{disposeFields:function(p,q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(h,j){var name;

for(var i=0,l=j.length;i<l;i++){name=j[i];

if(h[name]==null||!h.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(h[name].dispose){h[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}h[name]=null;
}},disposeArray:function(b,c){var e=b[c];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){b[c]=null;
return;
}try{var d;

for(var i=e.length-1;i>=0;i--){d=e[i];

if(d){d.dispose();
}}}catch(k){throw new Error("The array field: "+c+" of object: "+b+" has non disposable entries: "+k);
}e.length=0;
b[c]=null;
},disposeMap:function(r,s){var t=r[s];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){r[s]=null;
return;
}try{for(var u in t){if(t.hasOwnProperty(u)){t[u].dispose();
}}}catch(a){throw new Error("The map field: "+s+" of object: "+r+" has non disposable entries: "+a);
}r[s]=null;
},disposeTriggeredBy:function(m,n){var o=n.dispose;
n.dispose=function(){o.call(n);
m.dispose();
};
}}});
})();
(function(){var c="qx.event.IEventDispatcher";
qx.Interface.define(c,{members:{canDispatchEvent:function(a,event,b){this.assertInstance(event,qx.event.type.Event);
this.assertString(b);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var h="qx.event.dispatch.Direct";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(a,event,b){var e,c;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(g){qx.event.Registration.addDispatcher(g);
}});
})();
(function(){var cA="get",cz="",cy="[",cx="last",cw="change",cv="]",cu=".",ct="Number",cs="String",cr="set",cP="deepBinding",cO="item",cN="reset",cM="' (",cL="Boolean",cK=").",cJ=") to the object '",cI="Integer",cH="qx.data.SingleValueBinding",cG="No event could be found for the property",cE="PositiveNumber",cF="Binding from '",cC="PositiveInteger",cD="Binding does not exist!",cB="Date";
qx.Class.define(cH,{statics:{DEBUG_ON:false,__fa:{},bind:function(M,N,O,P,Q){var bb=this.__fc(M,N,O,P,Q);
var V=N.split(cu);
var S=this.__fj(V);
var ba=[];
var W=[];
var X=[];
var T=[];
var U=M;
for(var i=0;i<V.length;i++){if(S[i]!==cz){T.push(cw);
}else{T.push(this.__fe(U,V[i]));
}ba[i]=U;
if(i==V.length-1){if(S[i]!==cz){var be=S[i]===cx?U.length-1:S[i];
var R=U.getItem(be);
this.__fi(R,O,P,Q,M);
X[i]=this.__fk(U,T[i],O,P,Q,S[i]);
}else{if(V[i]!=null&&U[cA+qx.lang.String.firstUp(V[i])]!=null){var R=U[cA+qx.lang.String.firstUp(V[i])]();
this.__fi(R,O,P,Q,M);
}X[i]=this.__fk(U,T[i],O,P,Q);
}}else{var bc={index:i,propertyNames:V,sources:ba,listenerIds:X,arrayIndexValues:S,targetObject:O,targetPropertyChain:P,options:Q,listeners:W};
var Y=qx.lang.Function.bind(this.__fb,this,bc);
W.push(Y);
X[i]=U.addListener(T[i],Y);
}if(U[cA+qx.lang.String.firstUp(V[i])]==null){U=null;
}else if(S[i]!==cz){U=U[cA+qx.lang.String.firstUp(V[i])](S[i]);
}else{U=U[cA+qx.lang.String.firstUp(V[i])]();
}
if(!U){break;
}}var bd={type:cP,listenerIds:X,sources:ba,targetListenerIds:bb.listenerIds,targets:bb.targets};
this.__fl(bd,M,N,O,P);
return bd;
},__fb:function(bk){if(bk.options&&bk.options.onUpdate){bk.options.onUpdate(bk.sources[bk.index],bk.targetObject);
}for(var j=bk.index+1;j<bk.propertyNames.length;j++){var bo=bk.sources[j];
bk.sources[j]=null;

if(!bo){continue;
}bo.removeListenerById(bk.listenerIds[j]);
}var bo=bk.sources[bk.index];
for(var j=bk.index+1;j<bk.propertyNames.length;j++){if(bk.arrayIndexValues[j-1]!==cz){bo=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j-1])](bk.arrayIndexValues[j-1]);
}else{bo=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j-1])]();
}bk.sources[j]=bo;
if(!bo){this.__ff(bk.targetObject,bk.targetPropertyChain);
break;
}if(j==bk.propertyNames.length-1){if(qx.Class.implementsInterface(bo,qx.data.IListData)){var bp=bk.arrayIndexValues[j]===cx?bo.length-1:bk.arrayIndexValues[j];
var bm=bo.getItem(bp);
this.__fi(bm,bk.targetObject,bk.targetPropertyChain,bk.options,bk.sources[bk.index]);
bk.listenerIds[j]=this.__fk(bo,cw,bk.targetObject,bk.targetPropertyChain,bk.options,bk.arrayIndexValues[j]);
}else{if(bk.propertyNames[j]!=null&&bo[cA+qx.lang.String.firstUp(bk.propertyNames[j])]!=null){var bm=bo[cA+qx.lang.String.firstUp(bk.propertyNames[j])]();
this.__fi(bm,bk.targetObject,bk.targetPropertyChain,bk.options,bk.sources[bk.index]);
}var bn=this.__fe(bo,bk.propertyNames[j]);
bk.listenerIds[j]=this.__fk(bo,bn,bk.targetObject,bk.targetPropertyChain,bk.options);
}}else{if(bk.listeners[j]==null){var bl=qx.lang.Function.bind(this.__fb,this,bk);
bk.listeners.push(bl);
}if(qx.Class.implementsInterface(bo,qx.data.IListData)){var bn=cw;
}else{var bn=this.__fe(bo,bk.propertyNames[j]);
}bk.listenerIds[j]=bo.addListener(bn,bk.listeners[j]);
}}},__fc:function(bu,bv,bw,bx,by){var bC=bx.split(cu);
var bA=this.__fj(bC);
var bH=[];
var bG=[];
var bE=[];
var bD=[];
var bB=bw;
for(var i=0;i<bC.length-1;i++){if(bA[i]!==cz){bD.push(cw);
}else{try{bD.push(this.__fe(bB,bC[i]));
}catch(e){break;
}}bH[i]=bB;
var bF=function(){for(var j=i+1;j<bC.length-1;j++){var bL=bH[j];
bH[j]=null;

if(!bL){continue;
}bL.removeListenerById(bE[j]);
}var bL=bH[i];
for(var j=i+1;j<bC.length-1;j++){var bJ=qx.lang.String.firstUp(bC[j-1]);
if(bA[j-1]!==cz){var bM=bA[j-1]===cx?bL.getLength()-1:bA[j-1];
bL=bL[cA+bJ](bM);
}else{bL=bL[cA+bJ]();
}bH[j]=bL;
if(bG[j]==null){bG.push(bF);
}if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bK=cw;
}else{try{var bK=qx.data.SingleValueBinding.__fe(bL,bC[j]);
}catch(e){break;
}}bE[j]=bL.addListener(bK,bG[j]);
}qx.data.SingleValueBinding.__fd(bu,bv,bw,bx);
};
bG.push(bF);
bE[i]=bB.addListener(bD[i],bF);
var bz=qx.lang.String.firstUp(bC[i]);
if(bB[cA+bz]==null){bB=null;
}else if(bA[i]!==cz){bB=bB[cA+bz](bA[i]);
}else{bB=bB[cA+bz]();
}
if(!bB){break;
}}return {listenerIds:bE,targets:bH};
},__fd:function(u,v,w,x){var B=this.__fh(u,v);

if(B!=null){var D=v.substring(v.lastIndexOf(cu)+1,v.length);
if(D.charAt(D.length-1)==cv){var y=D.substring(D.lastIndexOf(cy)+1,D.length-1);
var A=D.substring(0,D.lastIndexOf(cy));
var C=B[cA+qx.lang.String.firstUp(A)]();

if(y==cx){y=C.length-1;
}
if(C!=null){var z=C.getItem(y);
}}else{var z=B[cA+qx.lang.String.firstUp(D)]();
}}this.__fg(w,x,z);
},__fe:function(bN,bO){var bP=this.__fn(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,cw+qx.lang.String.firstUp(bO))){bP=cw+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(cG,bO);
}}return bP;
},__ff:function(cj,ck){var cl=this.__fh(cj,ck);

if(cl!=null){var cm=ck.substring(ck.lastIndexOf(cu)+1,ck.length);
if(cm.charAt(cm.length-1)==cv){this.__fg(cj,ck,null);
return;
}if(cl[cN+qx.lang.String.firstUp(cm)]!=undefined){cl[cN+qx.lang.String.firstUp(cm)]();
}else{cl[cr+qx.lang.String.firstUp(cm)](null);
}}},__fg:function(cS,cT,cU){var cY=this.__fh(cS,cT);

if(cY!=null){var da=cT.substring(cT.lastIndexOf(cu)+1,cT.length);
if(da.charAt(da.length-1)==cv){var cV=da.substring(da.lastIndexOf(cy)+1,da.length-1);
var cX=da.substring(0,da.lastIndexOf(cy));
var cW=cY[cA+qx.lang.String.firstUp(cX)]();

if(cV==cx){cV=cW.length-1;
}
if(cW!=null){cW.setItem(cV,cU);
}}else{cY[cr+qx.lang.String.firstUp(da)](cU);
}}},__fh:function(o,p){var s=p.split(cu);
var t=o;
for(var i=0;i<s.length-1;i++){try{var r=s[i];
if(r.indexOf(cv)==r.length-1){var q=r.substring(r.indexOf(cy)+1,r.length-1);
r=r.substring(0,r.indexOf(cy));
}t=t[cA+qx.lang.String.firstUp(r)]();

if(q!=null){if(q==cx){q=t.length-1;
}t=t.getItem(q);
q=null;
}}catch(bI){return null;
}}return t;
},__fi:function(bf,bg,bh,bi,bj){bf=this.__fm(bf,bg,bh,bi);
if(bf==null){this.__ff(bg,bh);
}if(bf!=undefined){try{this.__fg(bg,bh,bf);
if(bi&&bi.onUpdate){bi.onUpdate(bj,bg,bf);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bi&&bi.onSetFail){bi.onSetFail(e);
}else{this.warn("Failed so set value "+bf+" on "+bg+". Error message: "+e);
}}}},__fj:function(bq){var br=[];
for(var i=0;i<bq.length;i++){var name=bq[i];
if(qx.lang.String.endsWith(name,cv)){var bs=name.substring(name.indexOf(cy)+1,name.indexOf(cv));
if(name.indexOf(cv)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bs!==cx){if(bs==cz||isNaN(parseInt(bs))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cy)!=0){bq[i]=name.substring(0,name.indexOf(cy));
br[i]=cz;
br[i+1]=bs;
bq.splice(i+1,0,cO);
i++;
}else{br[i]=bs;
bq.splice(i,1,cO);
}}else{br[i]=cz;
}}return br;
},__fk:function(c,d,f,g,h,k){var l;
{};
var n=function(cf,e){if(cf!==cz){if(cf===cx){cf=c.length-1;
}var ci=c.getItem(cf);
if(ci==undefined){qx.data.SingleValueBinding.__ff(f,g);
}var cg=e.getData().start;
var ch=e.getData().end;

if(cf<cg||cf>ch){return;
}}else{var ci=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+c+" by "+d+" to "+f+" ("+g+")");
qx.log.Logger.debug("Data before conversion: "+ci);
}ci=qx.data.SingleValueBinding.__fm(ci,f,g,h);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ci);
}try{if(ci!=undefined){qx.data.SingleValueBinding.__fg(f,g,ci);
}else{qx.data.SingleValueBinding.__ff(f,g);
}if(h&&h.onUpdate){h.onUpdate(c,f,ci);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(h&&h.onSetFail){h.onSetFail(e);
}else{this.warn("Failed so set value "+ci+" on "+f+". Error message: "+e);
}}};
if(!k){k=cz;
}n=qx.lang.Function.bind(n,c,k);
var m=c.addListener(d,n);
return m;
},__fl:function(E,F,G,H,I){if(this.__fa[F.toHashCode()]===undefined){this.__fa[F.toHashCode()]=[];
}this.__fa[F.toHashCode()].push([E,F,G,H,I]);
},__fm:function(bQ,bR,bS,bT){if(bT&&bT.converter){var bV;

if(bR.getModel){bV=bR.getModel();
}return bT.converter(bQ,bV);
}else{var bX=this.__fh(bR,bS);
var bY=bS.substring(bS.lastIndexOf(cu)+1,bS.length);
if(bX==null){return bQ;
}var bW=qx.Class.getPropertyDefinition(bX.constructor,bY);
var bU=bW==null?cz:bW.check;
return this.__fo(bQ,bU);
}},__fn:function(cc,cd){var ce=qx.Class.getPropertyDefinition(cc.constructor,cd);

if(ce==null){return null;
}return ce.event;
},__fo:function(db,dc){var dd=qx.lang.Type.getClass(db);
if((dd==ct||dd==cs)&&(dc==cI||dc==cC)){db=parseInt(db);
}if((dd==cL||dd==ct||dd==cB)&&dc==cs){db=db+cz;
}if((dd==ct||dd==cs)&&(dc==ct||dc==cE)){db=parseFloat(db);
}return db;
},removeBindingFromObject:function(J,K){if(K.type==cP){for(var i=0;i<K.sources.length;i++){if(K.sources[i]){K.sources[i].removeListenerById(K.listenerIds[i]);
}}for(var i=0;i<K.targets.length;i++){if(K.targets[i]){K.targets[i].removeListenerById(K.targetListenerIds[i]);
}}}else{J.removeListenerById(K);
}var L=this.__fa[J.toHashCode()];
if(L!=undefined){for(var i=0;i<L.length;i++){if(L[i][0]==K){qx.lang.Array.remove(L,L[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(a){{};
var b=this.__fa[a.toHashCode()];

if(b!=undefined){for(var i=b.length-1;i>=0;i--){this.removeBindingFromObject(a,b[i][0]);
}}},getAllBindingsForObject:function(bt){if(this.__fa[bt.toHashCode()]===undefined){this.__fa[bt.toHashCode()]=[];
}return this.__fa[bt.toHashCode()];
},removeAllBindings:function(){for(var cR in this.__fa){var cQ=qx.core.ObjectRegistry.fromHashCode(cR);
if(cQ==null){delete this.__fa[cR];
continue;
}this.removeAllBindingsForObject(cQ);
}this.__fa={};
},getAllBindings:function(){return this.__fa;
},showBindingInLog:function(cn,co){var cq;
for(var i=0;i<this.__fa[cn.toHashCode()].length;i++){if(this.__fa[cn.toHashCode()][i][0]==co){cq=this.__fa[cn.toHashCode()][i];
break;
}}
if(cq===undefined){var cp=cD;
}else{var cp=cF+cq[1]+cM+cq[2]+cJ+cq[3]+cM+cq[4]+cK;
}qx.log.Logger.debug(cp);
},showAllBindingsInLog:function(){for(var cb in this.__fa){var ca=qx.core.ObjectRegistry.fromHashCode(cb);

for(var i=0;i<this.__fa[cb].length;i++){this.showBindingInLog(ca,this.__fa[cb][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bX=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bX:null,message:null,getComment:function(){return this.__bX;
},toString:function(){return this.__bX+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__jM=qx.dev.StackTrace.getStackTrace();
},members:{__jM:null,getStackTrace:function(){return this.__jM;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fA={};
this.add(e,l);
},members:{__fA:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===n||a.charAt(0)===f||a.indexOf(k)===0||a.indexOf(j)===m||a.indexOf(i)===0){d[a]=false;
return a;
}
if(this.__fA[a]){return this.__fA[a];
}var c=a.substring(0,a.indexOf(n));
var b=this.__fA[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(r,s){this.__fA[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(n))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__fA[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__fA=null;
}});
})();
(function(){var y="px",x="qx.client",w="div",v="img",u="",t="scale-x",s="mshtml",r="no-repeat",q="scale",p="scale-y",S="qx/icon",R="repeat",Q=".png",P="crop",O="webkit",N="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",M='<div style="',L="repeat-y",K='<img src="',J="qx.bom.element.Decoration",F="', sizingMethod='",G="png",D="')",E='"/>',B='" style="',C="none",z=" ",A="repeat-x",H='"></div>',I="absolute";
qx.Class.define(J,{statics:{DEBUG:false,__iT:{},__iU:qx.core.Variant.isSet(x,s),__iV:qx.core.Variant.select(x,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iW:{"scale-x":v,"scale-y":v,"scale":v,"repeat":w,"no-repeat":w,"repeat-x":w,"repeat-y":w},update:function(bQ,bR,bS,bT){var bV=this.getTagName(bS,bR);

if(bV!=bQ.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bW=this.getAttributes(bR,bS,bT);

if(bV===v){bQ.src=bW.src;
}if(bQ.style.backgroundPosition!=u&&bW.style.backgroundPosition===undefined){bW.style.backgroundPosition=null;
}if(bQ.style.clip!=u&&bW.style.clip===undefined){bW.style.clip=null;
}var bU=qx.bom.element.Style;
bU.setStyles(bQ,bW.style);
},create:function(T,U,V){var W=this.getTagName(U,T);
var Y=this.getAttributes(T,U,V);
var X=qx.bom.element.Style.compile(Y.style);

if(W===v){return K+Y.src+B+X+E;
}else{return M+X+H;
}},getTagName:function(ba,bb){if(qx.core.Variant.isSet(x,s)){if(bb&&this.__iU&&this.__iV[ba]&&qx.lang.String.endsWith(bb,Q)){return w;
}}return this.__iW[ba];
},getAttributes:function(bn,bo,bp){if(!bp){bp={};
}
if(!bp.position){bp.position=I;
}
if(qx.core.Variant.isSet(x,s)){bp.fontSize=0;
bp.lineHeight=0;
}else if(qx.core.Variant.isSet(x,O)){bp.WebkitUserDrag=C;
}var br=qx.util.ResourceManager.getInstance().getImageFormat(bn)||qx.io.ImageLoader.getFormat(bn);
{};
var bq;
if(this.__iU&&this.__iV[bo]&&br===G){bq=this.__ja(bp,bo,bn);
}else{if(bo===q){bq=this.__jb(bp,bo,bn);
}else if(bo===t||bo===p){bq=this.__jc(bp,bo,bn);
}else{bq=this.__jf(bp,bo,bn);
}}return bq;
},__iX:function(bs,bt,bu){if(bs.width==null&&bt!=null){bs.width=bt+y;
}
if(bs.height==null&&bu!=null){bs.height=bu+y;
}return bs;
},__iY:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__ja:function(bv,bw,bx){var bA=this.__iY(bx);
bv=this.__iX(bv,bA.width,bA.height);
var bz=bw==r?P:q;
var by=N+qx.util.ResourceManager.getInstance().toUri(bx)+F+bz+D;
bv.filter=by;
bv.backgroundImage=bv.backgroundRepeat=u;
return {style:bv};
},__jb:function(bi,bj,bk){var bl=qx.util.ResourceManager.getInstance().toUri(bk);
var bm=this.__iY(bk);
bi=this.__iX(bi,bm.width,bm.height);
return {src:bl,style:bi};
},__jc:function(d,e,f){var j=qx.util.ResourceManager.getInstance();
var i=j.isClippedImage(f);
var k=this.__iY(f);

if(i){var h=j.getData(f);
var g=j.toUri(h[4]);

if(e===t){d=this.__jd(d,h,k.height);
}else{d=this.__je(d,h,k.width);
}return {src:g,style:d};
}else{{};

if(e==t){d.height=k.height==null?null:k.height+y;
}else if(e==p){d.width=k.width==null?null:k.width+y;
}var g=j.toUri(f);
return {src:g,style:d};
}},__jd:function(l,m,n){var o=qx.util.ResourceManager.getInstance().getImageHeight(m[4]);
l.clip={top:-m[6],height:n};
l.height=o+y;
if(l.top!=null){l.top=(parseInt(l.top,10)+m[6])+y;
}else if(l.bottom!=null){l.bottom=(parseInt(l.bottom,10)+n-o-m[6])+y;
}return l;
},__je:function(bd,be,bf){var bh=qx.util.ResourceManager.getInstance().getImageWidth(be[4]);
bd.clip={left:-be[5],width:bf};
bd.width=bh+y;
if(bd.left!=null){bd.left=(parseInt(bd.left,10)+be[5])+y;
}else if(bd.right!=null){bd.right=(parseInt(bd.right,10)+bf-bh-be[5])+y;
}return bd;
},__jf:function(bI,bJ,bK){var bP=qx.util.ResourceManager.getInstance().isClippedImage(bK);
var bO=this.__iY(bK);
if(bP&&bJ!==R){var bN=qx.util.ResourceManager.getInstance().getData(bK);
var bM=qx.bom.element.Background.getStyles(bN[4],bJ,bN[5],bN[6]);

for(var bL in bM){bI[bL]=bM[bL];
}
if(bO.width!=null&&bI.width==null&&(bJ==L||bJ===r)){bI.width=bO.width+y;
}
if(bO.height!=null&&bI.height==null&&(bJ==A||bJ===r)){bI.height=bO.height+y;
}return {style:bI};
}else{{};
bI=this.__iX(bI,bO.width,bO.height);
bI=this.__jg(bI,bK,bJ);
return {style:bI};
}},__jg:function(bB,bC,bD){var top=null;
var bH=null;

if(bB.backgroundPosition){var bE=bB.backgroundPosition.split(z);
bH=parseInt(bE[0]);

if(isNaN(bH)){bH=bE[0];
}top=parseInt(bE[1]);

if(isNaN(top)){top=bE[1];
}}var bG=qx.bom.element.Background.getStyles(bC,bD,bH,top);

for(var bF in bG){bB[bF]=bG[bF];
}if(bB.filter){bB.filter=u;
}return bB;
},__jh:function(bc){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bc)&&bc.indexOf(S)==-1){if(!this.__iT[bc]){qx.log.Logger.debug("Potential clipped image candidate: "+bc);
this.__iT[bc]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(x,{"mshtml":function(){return qx.bom.element.Decoration.__iU;
},"default":function(){return false;
}})}});
})();
(function(){var B="auto",A="px",z=",",y="clip:auto;",x="rect(",w=");",v="",u=")",t="qx.bom.element.Clip",s="string",p="rect(auto)",r="clip:rect(",q="clip",o="rect(auto,auto,auto,auto)";
qx.Class.define(t,{statics:{compile:function(h){if(!h){return y;
}var m=h.left;
var top=h.top;
var l=h.width;
var k=h.height;
var i,j;

if(m==null){i=(l==null?B:l+A);
m=B;
}else{i=(l==null?B:m+l+A);
m=m+A;
}
if(top==null){j=(k==null?B:k+A);
top=B;
}else{j=(k==null?B:top+k+A);
top=top+A;
}return r+top+z+i+z+j+z+m+w;
},get:function(C,D){var F=qx.bom.element.Style.get(C,q,D,false);
var K,top,I,H;
var E,G;

if(typeof F===s&&F!==B&&F!==v){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(z);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===B){K=null;
}
if(top===B){top=null;
}
if(E===B){E=null;
}
if(G===B){G=null;
}if(top!=null){top=parseInt(top,10);
}
if(E!=null){E=parseInt(E,10);
}
if(G!=null){G=parseInt(G,10);
}
if(K!=null){K=parseInt(K,10);
}if(E!=null&&K!=null){I=E-K;
}else if(E!=null){I=E;
}
if(G!=null&&top!=null){H=G-top;
}else if(G!=null){H=G;
}}else{throw new Error("Could not parse clip string: "+F);
}}return {left:K||null,top:top||null,width:I||null,height:H||null};
},set:function(a,b){if(!b){a.style.clip=o;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?B:f+A);
g=B;
}else{c=(f==null?B:g+f+A);
g=g+A;
}
if(top==null){d=(e==null?B:e+A);
top=B;
}else{d=(e==null?B:top+e+A);
top=top+A;
}a.style.clip=x+top+z+c+z+d+z+g+u;
},reset:function(n){n.style.clip=qx.bom.client.Engine.MSHTML?p:B;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dR:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__dR[a]||a)+e;
},get:function(n,o){return qx.bom.element.Style.get(n,c,o,false);
},set:function(p,q){p.style.cursor=this.__dR[q]||q;
},reset:function(m){m.style.cursor=h;
}}});
})();
(function(){var w="",v="qx.client",u=";",t="filter",s="opacity:",r="opacity",q="MozOpacity",p=");",o=")",n="zoom:1;filter:alpha(opacity=",k="qx.bom.element.Opacity",m="alpha(opacity=",l="-moz-opacity:";
qx.Class.define(k,{statics:{compile:qx.core.Variant.select(v,{"mshtml":function(z){if(z>=1){return w;
}
if(z<0.00001){z=0;
}return n+(z*100)+p;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return l+D+u;
}else{return s+D+u;
}},"default":function(j){if(j==1){return w;
}return s+j+u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,t,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,w);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,w)+m+J*100+o;
},"gecko":function(e,f){if(f==1){f=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){e.style.MozOpacity=f;
}else{e.style.opacity=f;
}},"default":function(x,y){if(y==1){y=w;
}x.style.opacity=y;
}}),reset:qx.core.Variant.select(v,{"mshtml":function(A){var B=qx.bom.element.Style.get(A,t,qx.bom.element.Style.COMPUTED_MODE,false);
A.style.filter=B.replace(/alpha\([^\)]*\)/gi,w);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=w;
}else{E.style.opacity=w;
}},"default":function(C){C.style.opacity=w;
}}),get:qx.core.Variant.select(v,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,t,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?q:r,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(g,h){var i=qx.bom.element.Style.get(g,r,h,false);

if(i!=null){return parseFloat(i);
}return 1.0;
}})}});
})();
(function(){var w="qx.client",v="",u="boxSizing",t="box-sizing",s=":",r="border-box",q="qx.bom.element.BoxSizing",p="KhtmlBoxSizing",o="-moz-box-sizing",n="WebkitBoxSizing",j=";",m="-khtml-box-sizing",k="content-box",h="-webkit-box-sizing",g="MozBoxSizing";
qx.Class.define(q,{statics:{__bT:qx.core.Variant.select(w,{"mshtml":null,"webkit":[u,p,n],"gecko":[g],"opera":[u]}),__bU:qx.core.Variant.select(w,{"mshtml":null,"webkit":[t,m,h],"gecko":[o],"opera":[t]}),__bV:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bW:function(x){var y=this.__bV;
return y.tags[x.tagName.toLowerCase()]||y.types[x.type];
},compile:qx.core.Variant.select(w,{"mshtml":function(z){{};
},"default":function(a){var c=this.__bU;
var b=v;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+s+a+j;
}}return b;
}}),get:qx.core.Variant.select(w,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__bW(D)){return k;
}}return r;
},"default":function(d){var f=this.__bT;
var e;

if(f){for(var i=0,l=f.length;i<l;i++){e=qx.bom.element.Style.get(d,f[i],null,false);

if(e!=null&&e!==v){return e;
}}}return v;
}}),set:qx.core.Variant.select(w,{"mshtml":function(A,B){{};
},"default":function(E,F){var G=this.__bT;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(C){this.set(C,v);
}}});
})();
(function(){var N="",M="qx.client",L="hidden",K="-moz-scrollbars-none",J="overflow",I=";",H="overflowY",G=":",F="overflowX",E="overflow:",ba="none",Y="scroll",X="borderLeftStyle",W="borderRightStyle",V="div",U="borderRightWidth",T="overflow-y",S="borderLeftWidth",R="-moz-scrollbars-vertical",Q="100px",O="qx.bom.element.Overflow",P="overflow-x";
qx.Class.define(O,{statics:{__iM:null,getScrollbarWidth:function(){if(this.__iM!==null){return this.__iM;
}var ca=qx.bom.element.Style;
var cc=function(e,f){return parseInt(ca.get(e,f))||0;
};
var cd=function(D){return (ca.get(D,W)==ba?0:cc(D,U));
};
var cb=function(bW){return (ca.get(bW,X)==ba?0:cc(bW,S));
};
var cf=qx.core.Variant.select(M,{"mshtml":function(bI){if(ca.get(bI,H)==L||bI.clientWidth==0){return cd(bI);
}return Math.max(0,bI.offsetWidth-bI.clientLeft-bI.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=ca.get(o,J);
var q=(p==Y||p==R?16:0);
return Math.max(0,cd(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-cb(o)));
}});
var ce=function(x){return cf(x)-cd(x);
};
var t=document.createElement(V);
var s=t.style;
s.height=s.width=Q;
s.overflow=Y;
document.body.appendChild(t);
var c=ce(t);
this.__iM=c?c:16;
document.body.removeChild(t);
return this.__iM;
},_compile:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bN,bO){if(bO==L){bO=K;
}return E+bO+I;
}:
function(bT,bU){return bT+G+bU+I;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bw,bx){return E+bx+I;
}:
function(bu,bv){return bu+G+bv+I;
},"default":function(bL,bM){return bL+G+bM+I;
}}),compileX:function(bH){return this._compile(P,bH);
},compileY:function(i){return this._compile(T,i);
},getX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bh,bi){var bj=qx.bom.element.Style.get(bh,J,bi,false);

if(bj===K){bj=L;
}return bj;
}:
function(bJ,bK){return qx.bom.element.Style.get(bJ,F,bK,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bA,bB){return qx.bom.element.Style.get(bA,J,bB,false);
}:
function(bR,bS){return qx.bom.element.Style.get(bR,F,bS,false);
},"default":function(by,bz){return qx.bom.element.Style.get(by,F,bz,false);
}}),setX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD,bE){if(bE==L){bE=K;
}bD.style.overflow=bE;
}:
function(bb,bc){bb.style.overflowX=bc;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bP,bQ){bP.style.overflow=bQ;
}:
function(bs,bt){bs.style.overflowX=bt;
},"default":function(bo,bp){bo.style.overflowX=bp;
}}),resetX:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bV){bV.style.overflow=N;
}:
function(bn){bn.style.overflowX=N;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=N;
}:
function(bf,bg){bf.style.overflowX=N;
},"default":function(bC){bC.style.overflowX=N;
}}),getY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(j,k){var l=qx.bom.element.Style.get(j,J,k,false);

if(l===K){l=L;
}return l;
}:
function(bF,bG){return qx.bom.element.Style.get(bF,H,bG,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(m,n){return qx.bom.element.Style.get(m,J,n,false);
}:
function(bq,br){return qx.bom.element.Style.get(bq,H,br,false);
},"default":function(bX,bY){return qx.bom.element.Style.get(bX,H,bY,false);
}}),setY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w===L){w=K;
}v.style.overflow=w;
}:
function(a,b){a.style.overflowY=b;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(y,z){y.style.overflow=z;
}:
function(bk,bl){bk.style.overflowY=bl;
},"default":function(B,C){B.style.overflowY=C;
}}),resetY:qx.core.Variant.select(M,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A){A.style.overflow=N;
}:
function(bm){bm.style.overflowY=N;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bd,be){bd.style.overflow=N;
}:
function(r,u){r.style.overflowY=N;
},"default":function(d){d.style.overflowY=N;
}})}});
})();
(function(){var P="",O="qx.client",N="user-select",M="userSelect",L="appearance",K="style",J="MozUserModify",I="px",H="-webkit-appearance",G="styleFloat",bm="-webkit-user-select",bl="-moz-appearance",bk="pixelHeight",bj="MozAppearance",bi=":",bh="pixelTop",bg="pixelLeft",bf="text-overflow",be="-moz-user-select",bd="MozUserSelect",W="qx.bom.element.Style",X="-moz-user-modify",U="-webkit-user-modify",V="WebkitUserSelect",S="-o-text-overflow",T="pixelRight",Q="cssFloat",R="pixelWidth",Y="pixelBottom",ba=";",bc="WebkitUserModify",bb="WebkitAppearance";
qx.Class.define(W,{statics:{__bK:{styleNames:{"float":qx.core.Variant.select(O,{"mshtml":G,"default":Q}),"appearance":qx.core.Variant.select(O,{"gecko":bj,"webkit":bb,"default":L}),"userSelect":qx.core.Variant.select(O,{"gecko":bd,"webkit":V,"default":M}),"userModify":qx.core.Variant.select(O,{"gecko":J,"webkit":bc,"default":M})},cssNames:{"appearance":qx.core.Variant.select(O,{"gecko":bl,"webkit":H,"default":L}),"userSelect":qx.core.Variant.select(O,{"gecko":be,"webkit":bm,"default":N}),"userModify":qx.core.Variant.select(O,{"gecko":X,"webkit":U,"default":N}),"textOverflow":qx.core.Variant.select(O,{"opera":S,"default":bf})},mshtmlPixel:{width:R,height:bk,left:bg,right:T,top:bh,bottom:Y},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bL:{},compile:function(bq){var bu=[];
var by=this.__bK;
var bx=by.special;
var bv=by.cssNames;
var bt=this.__bL;
var bw=qx.lang.String;
var name,bs,br;

for(name in bq){br=bq[name];

if(br==null){continue;
}name=bv[name]||name;
if(bx[name]){bu.push(bx[name].compile(br));
}else{bs=bt[name];

if(!bs){bs=bt[name]=bw.hyphenate(name);
}bu.push(bs,bi,br,ba);
}}return bu.join(P);
},setCss:qx.core.Variant.select(O,{"mshtml":function(s,t){s.style.cssText=t;
},"default":function(bn,bo){bn.setAttribute(K,bo);
}}),getCss:qx.core.Variant.select(O,{"mshtml":function(bp){return bp.style.cssText.toLowerCase();
},"default":function(bz){return bz.getAttribute(K);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(a,name,b,c){{};
var d=this.__bK;
name=d.styleNames[name]||name;
if(c!==false&&d.special[name]){return d.special[name].set(a,b);
}else{a.style[name]=b!==null?b:P;
}},setStyles:function(u,v,w){{};
var C=this.__bK;
var z=C.styleNames;
var B=C.special;
var x=u.style;

for(var A in v){var y=v[A];
var name=z[A]||A;

if(y===undefined){if(w!==false&&B[name]){B[name].reset(u);
}else{x[name]=P;
}}else{if(w!==false&&B[name]){B[name].set(u,y);
}else{x[name]=y!==null?y:P;
}}}},reset:function(D,name,E){var F=this.__bK;
name=F.styleNames[name]||name;
if(E!==false&&F.special[name]){return F.special[name].reset(D);
}else{D.style[name]=P;
}},get:qx.core.Variant.select(O,{"mshtml":function(e,name,f,g){var l=this.__bK;
name=l.styleNames[name]||name;
if(g!==false&&l.special[name]){return l.special[name].get(e,f);
}if(!e.currentStyle){return e.style[name]||P;
}switch(f){case this.LOCAL_MODE:return e.style[name]||P;
case this.CASCADED_MODE:return e.currentStyle[name]||P;
default:var k=e.currentStyle[name]||P;
if(/^-?[\.\d]+(px)?$/i.test(k)){return k;
}var j=l.mshtmlPixel[name];

if(j){var h=e.style[name];
e.style[name]=k||0;
var i=e.style[j]+I;
e.style[name]=h;
return i;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(k)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return k;
}},"default":function(m,name,n,o){var r=this.__bK;
name=r.styleNames[name]||name;
if(o!==false&&r.special[name]){return r.special[name].get(m,n);
}switch(n){case this.LOCAL_MODE:return m.style[name]||P;
case this.CASCADED_MODE:if(m.currentStyle){return m.currentStyle[name]||P;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var p=qx.dom.Node.getDocument(m);
var q=p.defaultView.getComputedStyle(m,null);
return q?q[name]:P;
}}})}});
})();
(function(){var j="CSS1Compat",i="position:absolute;width:0;height:0;width:1",h="qx.bom.Document",g="1px",f="qx.client",e="div";
qx.Class.define(h,{statics:{isQuirksMode:qx.core.Variant.select(f,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (k||window).document.compatMode!==j;
}},"webkit":function(p){if(document.compatMode===undefined){var q=(p||window).document.createElement(e);
q.style.cssText=i;
return q.style.width===g?true:false;
}else{return (p||window).document.compatMode!==j;
}},"default":function(l){return (l||window).document.compatMode!==j;
}}),isStandardMode:function(d){return !this.isQuirksMode(d);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var j="qx.client",i="qx.bom.Viewport";
qx.Class.define(i,{statics:{getWidth:qx.core.Variant.select(j,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}}),getHeight:qx.core.Variant.select(j,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientHeight;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerHeight;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(j,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollLeft||m.body.scrollLeft;
},"default":function(p){return (p||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(j,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollTop||b.body.scrollTop;
},"default":function(k){return (k||window).pageYOffset;
}})}});
})();
(function(){var c="CSS1Compat",b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__fB:function(){this.QUIRKS_MODE=this.__fC();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fC:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}}},defer:function(a){a.__fB();
}});
})();
(function(){var l="/",k="mshtml",j="qx.client",i="",h="?",g="string",f="qx.util.ResourceManager",e="singleton",d="qx.isSource";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bH:qx.$$resources||{},__bI:{}},members:{has:function(C){return !!arguments.callee.self.__bH[C];
},getData:function(c){return arguments.callee.self.__bH[c]||null;
},getImageWidth:function(q){var r=arguments.callee.self.__bH[q];
return r?r[0]:null;
},getImageHeight:function(o){var p=arguments.callee.self.__bH[o];
return p?p[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__bH[a];
return b?b[2]:null;
},isClippedImage:function(m){var n=arguments.callee.self.__bH[m];
return n&&n.length>4;
},toUri:function(s){if(s==null){return s;
}var t=arguments.callee.self.__bH[s];

if(!t){return s;
}
if(typeof t===g){var v=t;
}else{var v=t[3];
if(!v){return s;
}}var u=i;

if(qx.core.Variant.isSet(j,k)&&qx.bom.client.Feature.SSL){u=arguments.callee.self.__bI[v];
}return u+qx.$$libraries[v].resourceUri+l+s;
}},defer:function(w){if(qx.core.Variant.isSet(j,k)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y=qx.$$libraries[A].resourceUri;
if(y.match(/^\/\//)!=null){w.__bI[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null&&qx.core.Setting.get(d)){var x=document.URL;
w.__bI[A]=x.substring(0,x.lastIndexOf(l));
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(h);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__bI[A]=z.substring(0,z.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var m="qx.client",k="load",j="qx.io.ImageLoader";
qx.Bootstrap.define(j,{statics:{__jy:{},__jz:{width:null,height:null},__jA:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__jy[a];
return !!(b&&b.loaded);
},isFailed:function(p){var q=this.__jy[p];
return !!(q&&q.failed);
},isLoading:function(r){var s=this.__jy[r];
return !!(s&&s.loading);
},getFormat:function(v){var w=this.__jy[v];
return w?w.format:null;
},getSize:function(F){var G=this.__jy[F];
return G?
{width:G.width,height:G.height}:this.__jz;
},getWidth:function(x){var y=this.__jy[x];
return y?y.width:null;
},getHeight:function(n){var o=this.__jy[n];
return o?o.height:null;
},load:function(z,A,B){var C=this.__jy[z];

if(!C){C=this.__jy[z]={};
}if(A&&!B){B=window;
}if(C.loaded||C.loading||C.failed){if(A){if(C.loading){C.callbacks.push(A,B);
}else{A.call(B,z,C);
}}}else{C.loading=true;
C.callbacks=[];

if(A){C.callbacks.push(A,B);
}var E=new Image();
var D=qx.lang.Function.listener(this.__jB,this,E,z);
E.onload=D;
E.onerror=D;
E.src=z;
}},__jB:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__jy[d];
if(event.type===k){e.loaded=true;
e.width=this.__jC(c);
e.height=this.__jD(c);
var f=this.__jA.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__jC:qx.core.Variant.select(m,{"gecko":function(t){return t.naturalWidth;
},"default":function(h){return h.width;
}}),__jD:qx.core.Variant.select(m,{"gecko":function(u){return u.naturalHeight;
},"default":function(H){return H.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__ce:[o,null,n,h,null,p,k,null,p],__cf:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cg:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==s){top+=0.01;
}
if(z){var B=(typeof z==s)?z+q:z;
}else{B=r;
}
if(top){var C=(typeof top==s)?top+q:top;
}else{C=r;
}return B+j+C;
},compile:function(D,E,F,top){var G=this.__cg(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__ce;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(m);
},getStyles:function(t,u,v,top){if(!t){return this.__cf;
}var w=this.__cg(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:i+x+l};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var B=",",A="rgb(",z=")",y="qx.theme.manager.Color",x="qx.util.ColorUtil";
qx.Class.define(x,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(H){return this.NAMED[H]!==undefined;
},isSystemColor:function(bd){return this.SYSTEM[bd]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(y);
},isThemedColor:function(be){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(be);
},stringToRgb:function(W){if(this.supportsThemes()&&this.isThemedColor(W)){var W=qx.theme.manager.Color.getInstance().resolveDynamic(W);
}
if(this.isNamedColor(W)){return this.NAMED[W];
}else if(this.isSystemColor(W)){throw new Error("Could not convert system colors to RGB: "+W);
}else if(this.isRgbString(W)){return this.__fw();
}else if(this.isHex3String(W)){return this.__fy();
}else if(this.isHex6String(W)){return this.__fz();
}throw new Error("Could not parse color: "+W);
},cssStringToRgb:function(d){if(this.isNamedColor(d)){return this.NAMED[d];
}else if(this.isSystemColor(d)){throw new Error("Could not convert system colors to RGB: "+d);
}else if(this.isRgbString(d)){return this.__fw();
}else if(this.isRgbaString(d)){return this.__fx();
}else if(this.isHex3String(d)){return this.__fy();
}else if(this.isHex6String(d)){return this.__fz();
}throw new Error("Could not parse color: "+d);
},stringToRgbString:function(K){return this.rgbToRgbString(this.stringToRgb(K));
},rgbToRgbString:function(I){return A+I[0]+B+I[1]+B+I[2]+z;
},rgbToHexString:function(C){return (qx.lang.String.pad(C[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(C[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(V){return this.isThemedColor(V)||this.isNamedColor(V)||this.isHex3String(V)||this.isHex6String(V)||this.isRgbString(V);
},isCssString:function(U){return this.isSystemColor(U)||this.isNamedColor(U)||this.isHex3String(U)||this.isHex6String(U)||this.isRgbString(U);
},isHex3String:function(G){return this.REGEXP.hex3.test(G);
},isHex6String:function(J){return this.REGEXP.hex6.test(J);
},isRgbString:function(bf){return this.REGEXP.rgb.test(bf);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__fw:function(){var N=parseInt(RegExp.$1,10);
var M=parseInt(RegExp.$2,10);
var L=parseInt(RegExp.$3,10);
return [N,M,L];
},__fx:function(){var F=parseInt(RegExp.$1,10);
var E=parseInt(RegExp.$2,10);
var D=parseInt(RegExp.$3,10);
return [F,E,D];
},__fy:function(){var ba=parseInt(RegExp.$1,16)*17;
var Y=parseInt(RegExp.$2,16)*17;
var X=parseInt(RegExp.$3,16)*17;
return [ba,Y,X];
},__fz:function(){var bi=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bh=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bg=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bi,bh,bg];
},hex3StringToRgb:function(c){if(this.isHex3String(c)){return this.__fy(c);
}throw new Error("Invalid hex3 value: "+c);
},hex6StringToRgb:function(bc){if(this.isHex6String(bc)){return this.__fz(bc);
}throw new Error("Invalid hex6 value: "+bc);
},hexStringToRgb:function(bb){if(this.isHex3String(bb)){return this.__fy(bb);
}
if(this.isHex6String(bb)){return this.__fz(bb);
}throw new Error("Invalid hex value: "+bb);
},rgbToHsb:function(e){var j,k,m;
var w=e[0];
var s=e[1];
var h=e[2];
var v=(w>s)?w:s;

if(h>v){v=h;
}var l=(w<s)?w:s;

if(h<l){l=h;
}m=v/255.0;

if(v!=0){k=(v-l)/v;
}else{k=0;
}
if(k==0){j=0;
}else{var o=(v-w)/(v-l);
var u=(v-s)/(v-l);
var n=(v-h)/(v-l);

if(w==v){j=n-u;
}else if(s==v){j=2.0+o-n;
}else{j=4.0+u-o;
}j=j/6.0;

if(j<0){j=j+1.0;
}}return [Math.round(j*360),Math.round(k*100),Math.round(m*100)];
},hsbToRgb:function(O){var i,f,p,q,t;
var P=O[0]/360;
var Q=O[1]/100;
var R=O[2]/100;

if(P>=1.0){P%=1.0;
}
if(Q>1.0){Q=1.0;
}
if(R>1.0){R=1.0;
}var S=Math.floor(255*R);
var T={};

if(Q==0.0){T.red=T.green=T.blue=S;
}else{P*=6.0;
i=Math.floor(P);
f=P-i;
p=Math.floor(S*(1.0-Q));
q=Math.floor(S*(1.0-(Q*f)));
t=Math.floor(S*(1.0-(Q*(1.0-f))));

switch(i){case 0:T.red=S;
T.green=t;
T.blue=p;
break;
case 1:T.red=q;
T.green=S;
T.blue=p;
break;
case 2:T.red=p;
T.green=S;
T.blue=t;
break;
case 3:T.red=p;
T.green=q;
T.blue=S;
break;
case 4:T.red=t;
T.green=p;
T.blue=S;
break;
case 5:T.red=S;
T.green=p;
T.blue=q;
break;
}}return [T.red,T.green,T.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(a,b,c){},unregisterEvent:function(s,t,u){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);
}},_stopWindowObserver:function(){var q=qx.event.handler.Window.SUPPORTED_TYPES;

for(var p in q){qx.bom.Event.removeNativeListener(this._window,p,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var f=this._window;

try{var i=f.document;
}catch(e){return ;
}var g=i.documentElement;
var d=e.target||e.srcElement;

if(d==null||d===f||d===i||d===g){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,f]);
qx.event.Registration.dispatchEvent(f,event);
var h=event.getReturnValue();

if(h!=null){e.returnValue=h;
return h;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__iz||null;
},__iy:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(f);
var j=qx.Class.getByName(i);

if(j){this.__iz=new j;
var h=new Date;
this.__iz.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__iz.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__iA:function(e){var l=this.__iz;

if(l){e.setReturnValue(l.close());
}},__iB:function(){var k=this.__iz;

if(k){k.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iy,a);
qx.event.Registration.addListener(window,b,a.__iB,a);
qx.event.Registration.addListener(window,d,a.__iA,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var h="</table>",g="demobrowser.demo.event.EventDemo",f="</td><td>",e="",d="<tr><td>",c="btnClear",b="click",a="</td></tr>";
qx.Class.define(g,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
var o=document.getElementById(c);

if(o){qx.bom.Element.addListener(o,b,this._clearLog,this);
}},_initLogger:function(j,k,l){this.__FN="<table><tr><th>"+j.join("</th><th>")+"</th></tr>";
this.__FO=l||50;
this.__FP=k;
this._clearLog();
},_clearLog:function(){this.__FP.innerHTML=this.__FN+h;
this.__FQ=[];
},_log:function(m){this.__FQ.unshift(m);
this.__FQ=this.__FQ.slice(0,this.__FO);
var n=[this.__FN];

for(var i=0;i<this.__FQ.length;i++){n.push(d,this.__FQ[i].join(f),a);
}n.push(h);
this.__FP.innerHTML=n.join(e);
this.__FP.scrollTop=0;
},__FN:null,__FO:null,__FP:null,__FQ:null},destruct:function(){this.__FP=this.__FQ=null;
}});
})();
(function(){var n="logger",m="keypress",l="",k="char code",j="Ctrl",h="key identifier",g="Shift",f="demobrowser.demo.event.KeyEvent_LowLevel",e="keydown",d="Event",a="Alt",c="keyup",b="key code";
qx.Class.define(f,{extend:demobrowser.demo.event.EventDemo,members:{main:function(){arguments.callee.base.call(this);
this.debug(qx.bom.client.Engine.VERSION);
this.debug(qx.bom.client.Engine.FULLVERSION);
this._initLogger([d,b,k,h,g,j,a],document.getElementById(n),50);
var o=[e,m,c];

for(var i=0;i<o.length;i++){qx.bom.Event.addNativeListener(document.documentElement,o[i],qx.lang.Function.bind(this.logKeyEvent,this));
}},logKeyEvent:function(p){var q=p.type;
this._log([q,p.keyCode,p.charCode,p.keyIdentifier||l,p.shiftKey,p.ctrlKey,p.altKey]);
qx.bom.Event.preventDefault(p);
}}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
var e={};
d._native=this._cloneNativeEvent(this._native,e);
d._returnValue=this._returnValue;
return d;
},_cloneNativeEvent:function(a,b){b.preventDefault=qx.lang.Function.empty;
return b;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var C="change",B="input",A="checkbox",z="radio",y="textarea",x="qx.client",w="text",v="password",u="keypress",t="propertychange",p="select-multiple",s="checked",r="value",n="select",m="qx.event.handler.Input",q="Enter";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(N,O){var P=N.tagName.toLowerCase();

if(O===B&&(P===B||P===y)){return true;
}
if(O===C&&(P===B||P===y||P===n)){return true;
}return false;
},registerEvent:qx.core.Variant.select(x,{"mshtml":function(S,T,U){if(!S.__h){var V=S.tagName.toLowerCase();
var W=S.type;

if(W===w||W===v||V===y||W===A||W===z){qx.bom.Event.addNativeListener(S,t,this._onPropertyWrapper);
}
if(W!==A&&W!==z){qx.bom.Event.addNativeListener(S,C,this._onChangeValueWrapper);
}this.__k(S,W);
S.__h=true;
}},"default":function(G,H,I){if(H===B){this.__i(G);
}else if(H===C){if(G.type===z||G.type===A){qx.bom.Event.addNativeListener(G,C,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(G,C,this._onChangeValueWrapper);
}this.__k(G,G.type);
}}}),__i:qx.core.Variant.select(x,{"mshtml":null,"webkit":function(E){var F=E.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&F==y){qx.bom.Event.addNativeListener(E,u,this._onInputWrapper);
}qx.bom.Event.addNativeListener(E,B,this._onInputWrapper);
},"default":function(M){qx.bom.Event.addNativeListener(M,B,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(x,{"mshtml":function(a,b){if(a.__h){var c=a.tagName.toLowerCase();
var d=a.type;

if(d===w||d===v||c===y||d===A||d===z){qx.bom.Event.removeNativeListener(a,t,this._onPropertyWrapper);
}
if(d!==A&&d!==z){qx.bom.Event.removeNativeListener(a,C,this._onChangeValueWrapper);
}
try{delete a.__h;
}catch(Y){a.__h=null;
}}},"default":function(j,k){if(k===B){this.__i(j);
}else if(k===C){if(j.type===z||j.type===A){qx.bom.Event.removeNativeListener(j,C,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(j,C,this._onChangeValueWrapper);
}}}}),__j:qx.core.Variant.select(x,{"mshtml":null,"webkit":function(ba){var bb=ba.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bb==y){qx.bom.Event.removeNativeListener(ba,u,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(ba,B,this._onInputWrapper);
},"default":function(f){qx.bom.Event.removeNativeListener(f,B,this._onInputWrapper);
}}),__k:qx.core.Variant.select(x,{"mshtml|opera":function(K,L){if(L===w||L===v){qx.event.Registration.addListener(K,u,function(e){if(e.getKeyIdentifier()===q){qx.event.Registration.fireEvent(K,C,qx.event.type.Data,[K.value]);
}});
}},"default":function(bc,bd){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var D=e.target;
qx.event.Registration.fireEvent(D,B,qx.event.type.Data,[D.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var h=e.target||e.srcElement;
var g=h.value;

if(h.type===p){var g=[];

for(var i=0,o=h.options,l=o.length;i<l;i++){if(o[i].selected){g.push(o[i].value);
}}}qx.event.Registration.fireEvent(h,C,qx.event.type.Data,[g]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var X=e.target;

if(X.type===z){if(X.checked){qx.event.Registration.fireEvent(X,C,qx.event.type.Data,[X.value]);
}}else{qx.event.Registration.fireEvent(X,C,qx.event.type.Data,[X.checked]);
}}),_onProperty:qx.core.Variant.select(x,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Q=e.target||e.srcElement;
var R=e.propertyName;

if(R===r&&(Q.type===w||Q.type===v||Q.tagName.toLowerCase()===y)){if(!Q.__inValueSet){qx.event.Registration.fireEvent(Q,B,qx.event.type.Data,[Q.value]);
}}else if(R===s){if(Q.type===A){qx.event.Registration.fireEvent(Q,C,qx.event.type.Data,[Q.checked]);
}else if(Q.checked){qx.event.Registration.fireEvent(Q,C,qx.event.type.Data,[Q.value]);
}}}),"default":function(){}})},defer:function(J){qx.event.Registration.addHandler(J);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(x){this._manager=x;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__iG=g;
this.__iH=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iG:null,__iH:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__iG=this.__iH=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var U="keydown",T="qx.client",S="keypress",R="NumLock",Q="keyup",P="Enter",O="0",N="9",M="-",L="PageUp",cc="+",cb="PrintScreen",ca="gecko",bY="A",bX="Z",bW="Left",bV="F5",bU="Down",bT="Up",bS="F11",bc="F6",bd="useraction",ba="F3",bb="keyinput",X="Insert",Y="F8",V="End",W="/",bk="Delete",bl="*",bx="F1",bt="F4",bF="Home",bA="F2",bO="F12",bK="PageDown",bp="F7",bR="F9",bQ="F10",bP="Right",bo="text",br="Escape",bs="webkit",bv="5",by="3",bB="Meta",bH="7",bM="CapsLock",be="input",bf="Control",bq="Space",bE="Tab",bD="Shift",bC="Pause",bJ="Unidentified",bI="qx.event.handler.Keyboard",bz="mshtml",bG="mshtml|webkit",I="6",bL="off",bg="Apps",bh="4",bu="Alt",J="2",K="Scroll",bn="1",bi="8",bj="Win",bm="autoComplete",bw=",",bN="Backspace";
qx.Class.define(bI,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cD){arguments.callee.base.call(this);
this.__fJ=cD;
this.__fK=cD.getWindow();
if(qx.core.Variant.isSet(T,ca)){this.__fL=this.__fK;
}else{this.__fL=this.__fK.document.documentElement;
}this.__fM={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cC){if(this._identifierToKeyCodeMap[cC]){return true;
}
if(cC.length!=1){return false;
}
if(cC>=O&&cC<=N){return true;
}
if(cC>=bY&&cC<=bX){return true;
}
switch(cC){case cc:case M:case bl:case W:return true;
default:return false;
}}},members:{__fN:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(x,y){},registerEvent:function(cw,cx,cy){},unregisterEvent:function(p,q,r){},_fireInputEvent:function(A,B){var C=this.__fR();
if(C&&C.offsetWidth!=0){var event=qx.event.Registration.createEvent(bb,qx.event.type.KeyInput,[A,C,B]);
this.__fJ.dispatchEvent(C,event);
}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,bd,qx.event.type.Data,[bb]);
}},_fireSequenceEvent:function(D,E,F){var G=this.__fR();
var H=D.keyCode;
var event=qx.event.Registration.createEvent(E,qx.event.type.KeySequence,[D,G,F]);
this.__fJ.dispatchEvent(G,event);
if(qx.core.Variant.isSet(T,bG)){if(E==U&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(H)&&!this._emulateKeyPress[H]){this._fireSequenceEvent(D,S,F);
}}}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,bd,qx.event.type.Data,[E]);
}},__fR:function(){var i=this.__fJ.getHandler(qx.event.handler.Focus);
var j=i.getActive();
if(!j||j.offsetWidth==0){j=i.getFocus();
}if(!j||j.offsetWidth==0){j=this.__fJ.getWindow().document.body;
}return j;
},_initKeyObserver:function(){this.__fN=qx.lang.Function.listener(this.__fS,this);
this.__fQ=qx.lang.Function.listener(this.__fU,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fL,Q,this.__fN);
Event.addNativeListener(this.__fL,U,this.__fN);
Event.addNativeListener(this.__fL,S,this.__fQ);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fL,Q,this.__fN);
Event.removeNativeListener(this.__fL,U,this.__fN);
Event.removeNativeListener(this.__fL,S,this.__fQ);

for(var cF in (this.__fP||{})){var cE=this.__fP[cF];
Event.removeNativeListener(cE.target,S,cE.callback);
}delete (this.__fP);
},__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(T,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__fM[h]==U&&g==U)){this._idealKeyHandler(h,f,g,e);
}if(g==U){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,S,e);
}}this.__fM[h]=g;
},"gecko":function(cH){var cL=this._keyCodeFix[cH.keyCode]||cH.keyCode;
var cJ=0;
var cK=cH.type;
if(qx.bom.client.Platform.WIN){var cI=cL?this._keyCodeToIdentifier(cL):this._charCodeToIdentifier(cJ);

if(!(this.__fM[cI]==U&&cK==U)){this._idealKeyHandler(cL,cJ,cK,cH);
}this.__fM[cI]=cK;
}else{this._idealKeyHandler(cL,cJ,cK,cH);
}this.__fT(cH.target,cK,cL);
},"webkit":function(cn){var cq=0;
var co=0;
var cp=cn.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cp==Q||cp==U){cq=this._charCode2KeyCode[cn.charCode]||cn.keyCode;
}else{if(this._charCode2KeyCode[cn.charCode]){cq=this._charCode2KeyCode[cn.charCode];
}else{co=cn.charCode;
}}this._idealKeyHandler(cq,co,cp,cn);
}else{cq=cn.keyCode;
if(!(this.__fM[cq]==U&&cp==U)){this._idealKeyHandler(cq,co,cp,cn);
}if(cp==U){if(this._isNonPrintableKeyCode(cq)||this._emulateKeyPress[cq]){this._idealKeyHandler(cq,co,S,cn);
}}this.__fM[cq]=cp;
}},"opera":function(cr){this.__fO=cr.keyCode;
this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}})),__fT:qx.core.Variant.select(T,{"gecko":function(s,t,u){if(t===U&&(u==33||u==34||u==38||u==40)&&s.type==bo&&s.tagName.toLowerCase()===be&&s.getAttribute(bm)!==bL){if(!this.__fP){this.__fP={};
}var w=qx.core.ObjectRegistry.toHashCode(s);

if(this.__fP[w]){return;
}var self=this;
this.__fP[w]={target:s,callback:function(z){qx.bom.Event.stopPropagation(z);
self.__fU(z);
}};
var v=qx.event.GlobalError.observeMethod(this.__fP[w].callback);
qx.bom.Event.addNativeListener(s,S,v);
}},"default":null}),__fU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(T,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(k){var n=this._keyCodeFix[k.keyCode]||k.keyCode;
var l=k.charCode;
var m=k.type;
this._idealKeyHandler(n,l,m,k);
},"webkit":function(cs){if(qx.bom.client.Engine.VERSION<525.13){var cv=0;
var ct=0;
var cu=cs.type;

if(cu==Q||cu==U){cv=this._charCode2KeyCode[cs.charCode]||cs.keyCode;
}else{if(this._charCode2KeyCode[cs.charCode]){cv=this._charCode2KeyCode[cs.charCode];
}else{ct=cs.charCode;
}}this._idealKeyHandler(cv,ct,cu,cs);
}else{if(this._charCode2KeyCode[cs.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cs.keyCode],0,cs.type,cs);
}else{this._idealKeyHandler(0,cs.keyCode,cs.type,cs);
}}},"opera":function(a){var c=a.keyCode;
var b=a.type;
if(c!=this.__fO){this._idealKeyHandler(0,this.__fO,b,a);
}else{if(this._keyCodeToIdentifierMap[a.keyCode]){this._idealKeyHandler(a.keyCode,0,a.type,a);
}else{this._idealKeyHandler(0,a.keyCode,a.type,a);
}}}})),_idealKeyHandler:function(cd,ce,cf,cg){var ch;
if(cd||(!cd&&!ce)){ch=this._keyCodeToIdentifier(cd);
this._fireSequenceEvent(cg,cf,ch);
}else{ch=this._charCodeToIdentifier(ce);
this._fireSequenceEvent(cg,S,ch);
this._fireInputEvent(cg,ce);
}},_specialCharCodeMap:{8:bN,9:bE,13:P,27:br,32:bq},_emulateKeyPress:qx.core.Variant.select(T,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bD,17:bf,18:bu,20:bM,224:bB,37:bW,38:bT,39:bP,40:bU,33:L,34:bK,35:V,36:bF,45:X,46:bk,112:bx,113:bA,114:ba,115:bt,116:bV,117:bc,118:bp,119:Y,120:bR,121:bQ,122:bS,123:bO,144:R,44:cb,145:K,19:bC,91:bj,93:bg},_numpadToCharCode:{96:O.charCodeAt(0),97:bn.charCodeAt(0),98:J.charCodeAt(0),99:by.charCodeAt(0),100:bh.charCodeAt(0),101:bv.charCodeAt(0),102:I.charCodeAt(0),103:bH.charCodeAt(0),104:bi.charCodeAt(0),105:N.charCodeAt(0),106:bl.charCodeAt(0),107:cc.charCodeAt(0),109:M.charCodeAt(0),110:bw.charCodeAt(0),111:W.charCodeAt(0)},_charCodeA:bY.charCodeAt(0),_charCodeZ:bX.charCodeAt(0),_charCode0:O.charCodeAt(0),_charCode9:N.charCodeAt(0),_isNonPrintableKeyCode:function(o){return this._keyCodeToIdentifierMap[o]?true:false;
},_isIdentifiableKeyCode:function(ci){if(ci>=this._charCodeA&&ci<=this._charCodeZ){return true;
}if(ci>=this._charCode0&&ci<=this._charCode9){return true;
}if(this._specialCharCodeMap[ci]){return true;
}if(this._numpadToCharCode[ci]){return true;
}if(this._isNonPrintableKeyCode(ci)){return true;
}return false;
},_keyCodeToIdentifier:function(cA){if(this._isIdentifiableKeyCode(cA)){var cB=this._numpadToCharCode[cA];

if(cB){return String.fromCharCode(cB);
}return (this._keyCodeToIdentifierMap[cA]||this._specialCharCodeMap[cA]||String.fromCharCode(cA));
}else{return bJ;
}},_charCodeToIdentifier:function(cz){return this._specialCharCodeMap[cz]||String.fromCharCode(cz).toUpperCase();
},_identifierToKeyCode:function(cG){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cG]||cG.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fO=this.__fJ=this.__fK=this.__fL=this.__fM=null;
},defer:function(cj,ck,cl){qx.event.Registration.addHandler(cj);
if(!cj._identifierToKeyCodeMap){cj._identifierToKeyCodeMap={};

for(var cm in ck._keyCodeToIdentifierMap){cj._identifierToKeyCodeMap[ck._keyCodeToIdentifierMap[cm]]=parseInt(cm,10);
}
for(var cm in ck._specialCharCodeMap){cj._identifierToKeyCodeMap[ck._specialCharCodeMap[cm]]=parseInt(cm,10);
}}
if(qx.core.Variant.isSet(T,bz)){ck._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(T,ca)){ck._keyCodeFix={12:ck._identifierToKeyCode(R)};
}else if(qx.core.Variant.isSet(T,bs)){if(qx.bom.client.Engine.VERSION<525.13){ck._charCode2KeyCode={63289:ck._identifierToKeyCode(R),63276:ck._identifierToKeyCode(L),63277:ck._identifierToKeyCode(bK),63275:ck._identifierToKeyCode(V),63273:ck._identifierToKeyCode(bF),63234:ck._identifierToKeyCode(bW),63232:ck._identifierToKeyCode(bT),63235:ck._identifierToKeyCode(bP),63233:ck._identifierToKeyCode(bU),63272:ck._identifierToKeyCode(bk),63302:ck._identifierToKeyCode(X),63236:ck._identifierToKeyCode(bx),63237:ck._identifierToKeyCode(bA),63238:ck._identifierToKeyCode(ba),63239:ck._identifierToKeyCode(bt),63240:ck._identifierToKeyCode(bV),63241:ck._identifierToKeyCode(bc),63242:ck._identifierToKeyCode(bp),63243:ck._identifierToKeyCode(Y),63244:ck._identifierToKeyCode(bR),63245:ck._identifierToKeyCode(bQ),63246:ck._identifierToKeyCode(bS),63247:ck._identifierToKeyCode(bO),63248:ck._identifierToKeyCode(cb),3:ck._identifierToKeyCode(P),12:ck._identifierToKeyCode(R),13:ck._identifierToKeyCode(P)};
}else{ck._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var q="qx.client",p="mouseup",o="click",n="mousedown",m="contextmenu",l="mousewheel",k="dblclick",j="mshtml",i="mouseover",h="mouseout",c="DOMMouseScroll",g="mousemove",f="on",b="mshtml|webkit|opera",a="useraction",e="gecko|webkit",d="qx.event.handler.Mouse";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){arguments.callee.base.call(this);
this.__dE=t;
this.__dF=t.getWindow();
this.__dG=this.__dF.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dE:null,__dF:null,__dG:null,canHandleEvent:function(T,U){},registerEvent:qx.bom.client.System.IPHONE?
function(A,B,C){A[f+B]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(E,F,G){E[f+F]=undefined;
}:qx.lang.Function.returnNull,__dM:function(H,I,J){if(!J){J=H.target||H.srcElement;
}if(J&&J.nodeType){qx.event.Registration.fireEvent(J,I||H.type,I==l?qx.event.type.MouseWheel:qx.event.type.Mouse,[H,J,null,true,true]);
}qx.event.Registration.fireEvent(this.__dF,a,qx.event.type.Data,[I||H.type]);
},_initButtonObserver:function(){this.__dH=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,n,this.__dH);
Event.addNativeListener(this.__dG,p,this.__dH);
Event.addNativeListener(this.__dG,o,this.__dH);
Event.addNativeListener(this.__dG,k,this.__dH);
Event.addNativeListener(this.__dG,m,this.__dH);
},_initMoveObserver:function(){this.__dI=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,g,this.__dI);
Event.addNativeListener(this.__dG,i,this.__dI);
Event.addNativeListener(this.__dG,h,this.__dI);
},_initWheelObserver:function(){this.__dJ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var r=qx.core.Variant.isSet(q,b)?l:c;
var s=qx.core.Variant.isSet(q,j)?this.__dG:this.__dF;
Event.addNativeListener(s,r,this.__dJ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,n,this.__dH);
Event.removeNativeListener(this.__dG,p,this.__dH);
Event.removeNativeListener(this.__dG,o,this.__dH);
Event.removeNativeListener(this.__dG,k,this.__dH);
Event.removeNativeListener(this.__dG,m,this.__dH);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,g,this.__dI);
Event.removeNativeListener(this.__dG,i,this.__dI);
Event.removeNativeListener(this.__dG,h,this.__dI);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var V=qx.core.Variant.isSet(q,b)?l:c;
var W=qx.core.Variant.isSet(q,j)?this.__dG:this.__dF;
Event.removeNativeListener(W,V,this.__dJ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(D){this.__dM(D);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(u){var v=u.type;
var w=u.target||u.srcElement;
if(qx.core.Variant.isSet(q,e)){if(w&&w.nodeType==3){w=w.parentNode;
}}
if(this.__dN){this.__dN(u,v,w);
}
if(this.__dP){this.__dP(u,v,w);
}this.__dM(u,v,w);

if(this.__dO){this.__dO(u,v,w);
}
if(this.__dQ){this.__dQ(u,v,w);
}this.__dK=v;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(K){this.__dM(K,l);
}),__dN:qx.core.Variant.select(q,{"webkit":function(x,y,z){if(qx.bom.client.Engine.VERSION<530){if(y==m){this.__dM(x,p,z);
}}},"default":null}),__dO:qx.core.Variant.select(q,{"opera":function(L,M,N){if(M==p&&L.button==2){this.__dM(L,m,N);
}},"default":null}),__dP:qx.core.Variant.select(q,{"mshtml":function(X,Y,ba){if(Y==p&&this.__dK==o){this.__dM(X,n,ba);
}else if(Y==k){this.__dM(X,o,ba);
}},"default":null}),__dQ:qx.core.Variant.select(q,{"mshtml":null,"default":function(P,Q,R){switch(Q){case n:this.__dL=R;
break;
case p:if(R!==this.__dL){var S=qx.dom.Hierarchy.getCommonParent(R,this.__dL);
this.__dM(P,o,S);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dE=this.__dF=this.__dG=this.__dL=null;
},defer:function(O){qx.event.Registration.addHandler(O);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var o="alias",n="copy",m="blur",l="mouseout",k="keydown",j="Ctrl",i="Shift",h="mousemove",g="move",f="mouseover",E="Alt",D="keyup",C="mouseup",B="dragend",A="on",z="mousedown",y="qxDraggable",x="drag",w="drop",v="qxDroppable",t="qx.event.handler.DragDrop",u="droprequest",r="dragstart",s="dragchange",p="dragleave",q="dragover";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(P){arguments.callee.base.call(this);
this.__hx=P;
this.__hy=P.getWindow().document.documentElement;
this.__hx.addListener(this.__hy,z,this._onMouseDown,this);
this.__hK();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:false,__hI:0,__hJ:0,canHandleEvent:function(R,S){},registerEvent:function(bi,bj,bk){},unregisterEvent:function(b,c,d){},addType:function(a){this.__hB[a]=true;
},addAction:function(O){this.__hC[O]=true;
},supportsType:function(bb){return !!this.__hB[bb];
},supportsAction:function(bh){return !!this.__hC[bh];
},getData:function(N){if(!this.__hR||!this.__hz){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hB[N]){throw new Error("Unsupported data type: "+N+"!");
}
if(!this.__hE[N]){this.__hF=N;
this.__hM(u,this.__hA,this.__hz,false);
}
if(!this.__hE[N]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hE[N]||null;
},getCurrentAction:function(){return this.__hG;
},addData:function(G,H){this.__hE[G]=H;
},getCurrentType:function(){return this.__hF;
},__hK:function(){this.__hB={};
this.__hC={};
this.__hD={};
this.__hE={};
},__hL:function(){var bg=this.__hC;
var be=this.__hD;
var bf=null;

if(this.__hR){if(be.Shift&&be.Ctrl&&bg.alias){bf=o;
}else if(be.Shift&&be.Alt&&bg.copy){bf=n;
}else if(be.Shift&&bg.move){bf=g;
}else if(be.Alt&&bg.alias){bf=o;
}else if(be.Ctrl&&bg.copy){bf=n;
}else if(bg.move){bf=g;
}else if(bg.copy){bf=n;
}else if(bg.alias){bf=o;
}}
if(bf!=this.__hG){this.__hG=bf;
this.__hM(s,this.__hA,this.__hz,false);
}},__hM:function(T,U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(T,qx.event.type.Drag,[W,X]);

if(U!==V){Y.setRelatedTarget(V);
}return ba.dispatchEvent(U,Y);
},__hN:function(Q){while(Q&&Q.nodeType==1){if(Q.getAttribute(y)==A){return Q;
}Q=Q.parentNode;
}return null;
},__hO:function(F){while(F&&F.nodeType==1){if(F.getAttribute(v)==A){return F;
}F=F.parentNode;
}return null;
},__hP:function(){this.__hA=null;
this.__hx.removeListener(this.__hy,h,this._onMouseMove,this,true);
this.__hx.removeListener(this.__hy,C,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,m,this._onWindowBlur,this);
this.__hK();
},__hQ:function(){if(this.__hH){this.__hx.removeListener(this.__hy,f,this._onMouseOver,this,true);
this.__hx.removeListener(this.__hy,l,this._onMouseOut,this,true);
this.__hx.removeListener(this.__hy,k,this._onKeyDown,this,true);
this.__hx.removeListener(this.__hy,D,this._onKeyUp,this,true);
this.__hM(B,this.__hA,this.__hz,false);
this.__hH=false;
}this.__hR=false;
this.__hz=null;
this.__hP();
},__hR:false,_onWindowBlur:function(e){this.__hQ();
},_onKeyDown:function(e){var bc=e.getKeyIdentifier();

switch(bc){case E:case j:case i:if(!this.__hD[bc]){this.__hD[bc]=true;
this.__hL();
}}},_onKeyUp:function(e){var M=e.getKeyIdentifier();

switch(M){case E:case j:case i:if(this.__hD[M]){this.__hD[M]=false;
this.__hL();
}}},_onMouseDown:function(e){if(this.__hH){return;
}var I=this.__hN(e.getTarget());

if(I){this.__hI=e.getDocumentLeft();
this.__hJ=e.getDocumentTop();
this.__hA=I;
this.__hx.addListener(this.__hy,h,this._onMouseMove,this,true);
this.__hx.addListener(this.__hy,C,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,m,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hR){this.__hM(w,this.__hz,this.__hA,false,e);
}if(this.__hH){e.stopPropagation();
}this.__hQ();
},_onMouseMove:function(e){if(this.__hH){if(!this.__hM(x,this.__hA,this.__hz,true,e)){this.__hQ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hI)>3||Math.abs(e.getDocumentTop()-this.__hJ)>3){if(this.__hM(r,this.__hA,this.__hz,true,e)){this.__hH=true;
this.__hx.addListener(this.__hy,f,this._onMouseOver,this,true);
this.__hx.addListener(this.__hy,l,this._onMouseOut,this,true);
this.__hx.addListener(this.__hy,k,this._onKeyDown,this,true);
this.__hx.addListener(this.__hy,D,this._onKeyUp,this,true);
var bd=this.__hD;
bd.Ctrl=e.isCtrlPressed();
bd.Shift=e.isShiftPressed();
bd.Alt=e.isAltPressed();
this.__hL();
}else{this.__hM(B,this.__hA,this.__hz,false);
this.__hP();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__hO(bl);

if(bm&&bm!=this.__hz){this.__hR=this.__hM(q,bm,this.__hA,true,e);
this.__hz=bm;
this.__hL();
}},_onMouseOut:function(e){var K=this.__hO(e.getTarget());
var J=this.__hO(e.getRelatedTarget());

if(K&&K!==J&&K==this.__hz){this.__hM(p,this.__hz,J,false,e);
this.__hz=null;
this.__hR=false;
qx.event.Timer.once(this.__hL,this,0);
}}},destruct:function(){this.__hA=this.__hz=this.__hx=this.__hy=this.__hB=this.__hC=this.__hD=this.__hE=null;
},defer:function(L){qx.event.Registration.addHandler(L);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+f+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(j,k,l){var o=this._registeredEvents;

if(!o){return;
}var p=qx.core.ObjectRegistry.toHashCode(j);
var m=p+f+k;
var n=this._registeredEvents[m];
qx.bom.Event.removeNativeListener(j,k,n.listener);
delete this._registeredEvents[m];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var b;
var c=this._registeredEvents;

for(var d in c){b=c[d];
qx.bom.Event.removeNativeListener(b.element,b.type,b.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var j="qx.event.handler.Appear",i="disappear",h="appear";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__bE=k;
this.__bF={};
qx.event.handler.Appear.__bG[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bG:{},refresh:function(){var a=this.__bG;

for(var b in a){a[b].refresh();
}}},members:{__bE:null,__bF:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__bF;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__bF;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var f=this.__bF;
var g;

for(var e in f){g=f[e];
var c=g.offsetWidth>0;

if((!!g.$$displayed)!==c){g.$$displayed=c;
var d=qx.event.Registration.createEvent(c?h:i);
this.__bE.dispatchEvent(g,d);
}}}},destruct:function(){this.__bE=this.__bF=null;
delete qx.event.handler.Appear.__bG[this.$$hash];
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var s="mshtml",r="",q="qx.client",p=">",o="<",n=" ",m="='",k="qx.bom.Element",h="div",g="' ",f="></";
qx.Class.define(k,{statics:{__iL:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,A,B){if(!B){B=window;
}
if(!name){throw new Error("The tag name is missing!");
}var D=this.__iL;
var C=r;

for(var F in A){if(D[F]){C+=F+m+A[F]+g;
}}var G;
if(C!=r){if(qx.bom.client.Engine.MSHTML){G=B.document.createElement(o+name+n+C+p);
}else{var E=B.document.createElement(h);
E.innerHTML=o+name+n+C+f+name+p;
G=E.firstChild;
}}else{G=B.document.createElement(name);
}
for(var F in A){if(!D[F]){qx.bom.element.Attribute.set(G,F,A[F]);
}}return G;
},empty:function(ba){return ba.innerHTML=r;
},addListener:function(H,I,J,self,K){return qx.event.Registration.addListener(H,I,J,self,K);
},removeListener:function(t,u,v,self,w){return qx.event.Registration.removeListener(t,u,v,self,w);
},removeListenerById:function(d,e){return qx.event.Registration.removeListenerById(d,e);
},hasListener:function(x,y,z){return qx.event.Registration.hasListener(x,y,z);
},focus:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).focus(b);
},blur:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).blur(a);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(c){qx.event.Registration.getManager(c).getHandler(qx.event.handler.Focus).deactivate(c);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(L){qx.event.Registration.getManager(L).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(L);
},clone:function(M,N){var Q;

if(N||(qx.core.Variant.isSet(q,s)&&!qx.xml.Document.isXmlDocument(M))){var U=qx.event.Registration.getManager(M);
var O=qx.dom.Hierarchy.getDescendants(M);
O.push(M);
}if(qx.core.Variant.isSet(q,s)){for(var i=0,l=O.length;i<l;i++){U.toggleAttachedEvents(O[i],false);
}}var Q=M.cloneNode(true);
if(qx.core.Variant.isSet(q,s)){for(var i=0,l=O.length;i<l;i++){U.toggleAttachedEvents(O[i],true);
}}if(N===true){var X=qx.dom.Hierarchy.getDescendants(Q);
X.push(Q);
var P,S,W,R;

for(var i=0,V=O.length;i<V;i++){W=O[i];
P=U.serializeListeners(W);

if(P.length>0){S=X[i];

for(var j=0,T=P.length;j<T;j++){R=P[j];
U.addListener(S,R.type,R.handler,R.self,R.capture);
}}}}return Q;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var f="qx.event.type.KeyInput";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(c,d,e){arguments.callee.base.call(this,c,d,null,true,true);
this._charCode=e;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._charCode=this._charCode;
return b;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var d="qx.event.type.KeySequence";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._identifier=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var E="qx.client",D="blur",C="focus",B="mousedown",A="on",z="mouseup",y="DOMFocusOut",x="DOMFocusIn",w="selectstart",v="onmousedown",bb="onfocusout",ba="onfocusin",Y="onmouseup",X="onselectstart",W="draggesture",V="gecko",U="qx.event.handler.Focus",T="_applyFocus",S="deactivate",R="textarea",L="qxIsRootPage",M="_applyActive",J="input",K="focusin",H="qxSelectable",I="tabIndex",F="off",G="activate",N="1",O="focusout",Q="qxKeepFocus",P="qxKeepActive";
qx.Class.define(U,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bw){arguments.callee.base.call(this);
this._manager=bw;
this._window=bw.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:M,nullable:true},focus:{apply:T,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,canHandleEvent:function(g,h){},registerEvent:function(bL,bM,bN){},unregisterEvent:function(j,k,l){},focus:function(u){try{u.focus();
}catch(bf){}this.setFocus(u);
this.setActive(u);
},activate:function(bO){this.setActive(bO);
},blur:function(bq){try{bq.blur();
}catch(f){}
if(this.getActive()===bq){this.resetActive();
}
if(this.getFocus()===bq){this.resetFocus();
}},deactivate:function(bj){if(this.getActive()===bj){this.resetActive();
}},tryActivate:function(bk){var bl=this.__it(bk);

if(bl){this.setActive(bl);
}},__if:function(o,p,q,r){var t=qx.event.Registration;
var s=t.createEvent(q,qx.event.type.Focus,[o,p,r]);
t.dispatchEvent(o,s);
},_windowFocused:true,__ig:function(){if(this._windowFocused){this._windowFocused=false;
this.__if(this._window,null,D,false);
}},__ih:function(){if(!this._windowFocused){this._windowFocused=true;
this.__if(this._window,null,C,false);
}},_initObserver:qx.core.Variant.select(E,{"gecko":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__hY=qx.lang.Function.listener(this.__ii,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._window.addEventListener(C,this.__hW,true);
this._window.addEventListener(D,this.__hX,true);
this._window.addEventListener(W,this.__hY,true);
},"mshtml":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.attachEvent(v,this.__hU);
this._document.attachEvent(Y,this.__hV);
this._document.attachEvent(ba,this.__ib);
this._document.attachEvent(bb,this.__ic);
this._document.attachEvent(X,this.__ia);
},"webkit":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._document.addEventListener(w,this.__ia,false);
this._window.addEventListener(y,this.__ic,true);
this._window.addEventListener(C,this.__hW,true);
this._window.addEventListener(D,this.__hX,true);
},"opera":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this._document.addEventListener(B,this.__hU,true);
this._document.addEventListener(z,this.__hV,true);
this._window.addEventListener(x,this.__ib,true);
this._window.addEventListener(y,this.__ic,true);
}}),_stopObserver:qx.core.Variant.select(E,{"gecko":function(){this._document.removeEventListener(B,this.__hU,true);
this._document.removeEventListener(z,this.__hV,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
this._window.removeEventListener(W,this.__hY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,v,this.__hU);
qx.bom.Event.removeNativeListener(this._document,Y,this.__hV);
qx.bom.Event.removeNativeListener(this._document,ba,this.__ib);
qx.bom.Event.removeNativeListener(this._document,bb,this.__ic);
qx.bom.Event.removeNativeListener(this._document,X,this.__ia);
},"webkit":function(){this._document.removeEventListener(B,this.__hU,true);
this._document.removeEventListener(w,this.__ia,false);
this._window.removeEventListener(x,this.__ib,true);
this._window.removeEventListener(y,this.__ic,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
},"opera":function(){this._document.removeEventListener(B,this.__hU,true);
this._window.removeEventListener(x,this.__ib,true);
this._window.removeEventListener(y,this.__ic,true);
this._window.removeEventListener(C,this.__hW,true);
this._window.removeEventListener(D,this.__hX,true);
}}),__ii:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){if(!this.__iu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ij:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){this.__ih();
var bE=e.srcElement;
var bD=this.__is(bE);

if(bD){this.setFocus(bD);
}this.tryActivate(bE);
},"opera":function(e){var bx=e.target;

if(bx==this._document||bx==this._window){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bx);
this.tryActivate(bx);
if(!this.__iu(bx)){bx.selectionStart=0;
bx.selectionEnd=0;
}}},"default":null})),__ik:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){if(!e.toElement){this.__ig();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bJ=e.target;

if(bJ===this.getFocus()){this.resetFocus();
}
if(bJ===this.getActive()){this.resetActive();
}},"opera":function(e){var i=e.target;

if(i==this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(i===this.getFocus()){this.resetFocus();
}
if(i===this.getActive()){this.resetActive();
}}},"default":null})),__il:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__im:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){var b=e.target;

if(b===this._window||b===this._document){this.__ih();
b=this._body;
}this.setFocus(b);
this.tryActivate(b);
},"webkit":function(e){var be=e.target;

if(be===this._window||be===this._document){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(be);
this.tryActivate(be);
}},"default":null})),__in:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"gecko":function(e){var bo=e.target;
var bm=this.__is(bo);
var bn=this.__iu(bo);

if(!bn){qx.bom.Event.preventDefault(e);
if(bm){if(qx.core.Variant.isSet(E,V)){var bp=qx.bom.element.Attribute.get(bm,L)===N;

if(!bp){bm.focus();
}}else{bm.focus();
}}}else if(!bm){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bz=e.srcElement;
var by=this.__is(bz);

if(by){if(!this.__iu(bz)){bz.unselectable=A;
try{document.selection.empty();
}catch(e){}try{by.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iu(bz)){bz.unselectable=A;
}}},"webkit":function(e){var n=e.target;
var m=this.__is(n);

if(m){this.setFocus(m);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bv=e.target;
var bt=this.__is(bv);

if(!this.__iu(bv)){qx.bom.Event.preventDefault(e);
if(bt){var bu=this.getFocus();

if(bu&&bu.selectionEnd){bu.selectionStart=0;
bu.selectionEnd=0;
bu.blur();
}if(bt){this.setFocus(bt);
}}}else if(bt){this.setFocus(bt);
}},"default":null})),__io:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(e){var bK=e.srcElement;

if(bK.unselectable){bK.unselectable=F;
}this.tryActivate(this.__ip(bK));
},"gecko":function(e){var bA=e.target;

while(bA&&bA.offsetWidth===undefined){bA=bA.parentNode;
}
if(bA){this.tryActivate(bA);
}},"webkit|opera":function(e){this.tryActivate(this.__ip(e.target));
},"default":null})),__ip:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml|webkit":function(br){var bs=this.getFocus();

if(bs&&br!=bs&&(bs.nodeName.toLowerCase()===J||bs.nodeName.toLowerCase()===R)){br=bs;
}return br;
},"default":function(bc){return bc;
}})),__iq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml|webkit":function(e){var bd=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iu(bd)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ir:function(bP){var bQ=qx.bom.element.Attribute.get(bP,I);

if(bQ>=1){return true;
}var bR=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bQ>=0&&bR[bP.tagName]){return true;
}return false;
},__is:function(a){while(a&&a.nodeType===1){if(a.getAttribute(Q)==A){return null;
}
if(this.__ir(a)){return a;
}a=a.parentNode;
}return this._body;
},__it:function(bB){var bC=bB;

while(bB&&bB.nodeType===1){if(bB.getAttribute(P)==A){return null;
}bB=bB.parentNode;
}return bC;
},__iu:function(c){while(c&&c.nodeType===1){var d=c.getAttribute(H);

if(d!=null){return d===A;
}c=c.parentNode;
}return true;
},_applyActive:function(bF,bG){if(bG){this.__if(bG,bF,S,true);
}
if(bF){this.__if(bF,bG,G,true);
}},_applyFocus:function(bH,bI){if(bI){this.__if(bI,bH,O,true);
}
if(bH){this.__if(bH,bI,K,true);
}if(bI){this.__if(bI,bH,D,false);
}
if(bH){this.__if(bH,bI,C,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iv=null;
},defer:function(bg){qx.event.Registration.addHandler(bg);
var bh=bg.FOCUSABLE_ELEMENTS;

for(var bi in bh){bh[bi.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="",m="qx.client",l="readOnly",k="accessKey",j="qx.bom.element.Attribute",i="rowSpan",h="vAlign",g="className",f="textContent",e="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",s="dateTime",q="maxLength",r="mshtml",o="cellPadding",p="colSpan";
qx.Class.define(j,{statics:{__fV:{names:{"class":g,"for":B,html:u,text:qx.core.Variant.isSet(m,r)?v:f,colspan:p,rowspan:i,valign:h,datetime:s,accesskey:k,tabindex:t,maxlength:q,readonly:l,longdesc:A,cellpadding:o,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,maxLength:10000000,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(I){var J=[];
var L=this.__fV.runtime;

for(var K in I){if(!L[K]){J.push(K,x,I[K],e);
}}return J.join(n);
},get:qx.core.Variant.select(m,{"mshtml":function(F,name){var H=this.__fV;
var G;
name=H.names[name]||name;
if(H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];
}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},"default":function(a,name){var c=this.__fV;
var b;
name=c.names[name]||name;
if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(C,name,D){var E=this.__fV;
name=E.names[name]||name;
if(E.bools[name]){D=!!D;
}if(E.property[name]){if(D==null){D=E.propertyDefault[name];

if(D===undefined){D=null;
}}C[name]=D;
}else{if(D===true){C.setAttribute(name,name);
}else if(D===false||D===null){C.removeAttribute(name);
}else{C.setAttribute(name,D);
}}},reset:function(d,name){this.set(d,name,null);
}}});
})();
(function(){var n="left",m="right",l="middle",k="qx.client",j="dblclick",i="click",h="none",g="contextmenu",f="qx.event.type.Mouse";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(o,p){var p=arguments.callee.base.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__iI:qx.core.Variant.select(k,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case i:case j:return n;
case g:return m;
default:return this.__iI[this._native.button]||h;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var l="qx.client",k="ie",j="msie",i="android",h="operamini",g="mobile chrome",f=")(/| )([0-9]+\.[0-9])",e="iemobile",d="opera mobi",c="Mobile Safari",z="operamobile",y="mobile safari",x="IEMobile|Maxthon|MSIE",w="qx.bom.client.Browser",v="opera mini",u="(",t="opera",s="mshtml",r="Opera Mini|Opera Mobi|Opera",q="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",o="webkit",p="5.0",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",n="Mobile/";
qx.Bootstrap.define(w,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__jO:function(A){var B=navigator.userAgent;
var D=new RegExp(u+A+f);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(l,o)){if(name===i){name=g;
}else if(B.indexOf(c)!==-1||B.indexOf(n)!==-1){name=y;
}}else if(qx.core.Variant.isSet(l,s)){if(name===j){name=k;
if(qx.bom.client.System.WINCE&&name===k){name=e;
C=p;
}}}else if(qx.core.Variant.isSet(l,t)){if(name===d){name=z;
}else if(name===v){name=h;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(l,{"webkit":function(F){F.__jO(q);
},"gecko":function(b){b.__jO(m);
},"mshtml":function(G){G.__jO(x);
},"opera":function(a){a.__jO(r);
}})});
})();
(function(){var C="qx.client",B="qx.dom.Hierarchy",A="previousSibling",z="*",y="nextSibling",x="parentNode";
qx.Class.define(B,{statics:{getNodeIndex:function(b){var c=0;

while(b&&(b=b.previousSibling)){c++;
}return c;
},getElementIndex:function(r){var s=0;
var t=qx.dom.Node.ELEMENT;

while(r&&(r=r.previousSibling)){if(r.nodeType==t){s++;
}}return s;
},getNextElementSibling:function(L){while(L&&(L=L.nextSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},getPreviousElementSibling:function(Q){while(Q&&(Q=Q.previousSibling)&&!qx.dom.Node.isElement(Q)){continue;
}return Q||null;
},contains:qx.core.Variant.select(C,{"webkit|mshtml|opera":function(E,F){if(qx.dom.Node.isDocument(E)){var G=qx.dom.Node.getDocument(F);
return E&&G==E;
}else if(qx.dom.Node.isDocument(F)){return false;
}else{return E.contains(F);
}},"gecko":function(d,e){return !!(d.compareDocumentPosition(e)&16);
},"default":function(O,P){while(P){if(O==P){return true;
}P=P.parentNode;
}return false;
}}),isRendered:function(H){if(!H.offsetParent){return false;
}var I=H.ownerDocument||H.document;
if(I.body.contains){return I.body.contains(H);
}if(I.compareDocumentPosition){return !!(I.compareDocumentPosition(H)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(U,V){return this.contains(V,U);
},getCommonParent:qx.core.Variant.select(C,{"mshtml|opera":function(f,g){if(f===g){return f;
}
while(f&&qx.dom.Node.isElement(f)){if(f.contains(g)){return f;
}f=f.parentNode;
}return null;
},"default":function(h,i){if(h===i){return h;
}var j={};
var m=qx.core.ObjectRegistry;
var l,k;

while(h||i){if(h){l=m.toHashCode(h);

if(j[l]){return j[l];
}j[l]=h;
h=h.parentNode;
}
if(i){k=m.toHashCode(i);

if(j[k]){return j[k];
}j[k]=i;
i=i.parentNode;
}}return null;
}}),getAncestors:function(T){return this._recursivelyCollect(T,x);
},getChildElements:function(M){M=M.firstChild;

if(!M){return [];
}var N=this.getNextSiblings(M);

if(M.nodeType===1){N.unshift(M);
}return N;
},getDescendants:function(K){return qx.lang.Array.fromCollection(K.getElementsByTagName(z));
},getFirstDescendant:function(q){q=q.firstChild;

while(q&&q.nodeType!=1){q=q.nextSibling;
}return q;
},getLastDescendant:function(a){a=a.lastChild;

while(a&&a.nodeType!=1){a=a.previousSibling;
}return a;
},getPreviousSiblings:function(R){return this._recursivelyCollect(R,A);
},getNextSiblings:function(D){return this._recursivelyCollect(D,y);
},_recursivelyCollect:function(u,v){var w=[];

while(u=u[v]){if(u.nodeType==1){w.push(u);
}}return w;
},getSiblings:function(S){return this.getPreviousSiblings(S).reverse().concat(this.getNextSiblings(S));
},isEmpty:function(J){J=J.firstChild;

while(J){if(J.nodeType===qx.dom.Node.ELEMENT||J.nodeType===qx.dom.Node.TEXT){return false;
}J=J.nextSibling;
}return true;
},cleanWhitespace:function(n){var o=n.firstChild;

while(o){var p=o.nextSibling;

if(o.nodeType==3&&!/\S/.test(o.nodeValue)){n.removeChild(o);
}o=p;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(j,k){arguments.callee.base.call(this,true,j);

if(k){this._native=k.getNativeEvent()||null;
this._originalTarget=k.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(n){var o=arguments.callee.base.call(this,n);
o._native=this._native;
return o;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(b);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(c){this.getManager().addType(c);
},addAction:function(d){this.getManager().addAction(d);
},supportsType:function(m){return this.getManager().supportsType(m);
},supportsAction:function(a){return this.getManager().supportsAction(a);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(g){return this.getManager().getData(g);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var m="interval",l="qx.event.Timer",k="_applyInterval",j="_applyEnabled",i="Boolean",h="qx.event.type.Event",g="Integer";
qx.Class.define(l,{extend:qx.core.Object,construct:function(r){arguments.callee.base.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__dC=function(){self._oninterval.call(self);
};
},events:{"interval":h},statics:{once:function(n,o,p){var q=new qx.event.Timer(p);
q.addListener(m,function(e){q.stop();
n.call(o,e);
q.dispose();
o=null;
},o);
q.start();
return q;
}},properties:{enabled:{init:true,check:i,apply:j},interval:{check:g,init:1000,apply:k}},members:{__dD:null,__dC:null,_applyInterval:function(b,c){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(d,f){if(f){window.clearInterval(this.__dD);
this.__dD=null;
}else if(d){this.__dD=window.setInterval(this.__dC,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(a){this.stop();
this.startWith(a);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(m);
}})},destruct:function(){if(this.__dD){window.clearInterval(this.__dD);
}this.__dD=this.__dC=null;
}});
})();
(function(){var l="losecapture",k="qx.client",j="blur",i="focus",h="click",g="qx.event.dispatch.MouseCapture",f="capture",e="scroll";
qx.Class.define(g,{extend:qx.event.dispatch.AbstractBubbling,construct:function(c,d){arguments.callee.base.call(this,c);
this.__fp=c.getWindow();
this.__fq=d;
c.addListener(this.__fp,j,this.releaseCapture,this);
c.addListener(this.__fp,i,this.releaseCapture,this);
c.addListener(this.__fp,e,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fq:null,__fr:null,__fs:true,__fp:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__fr&&this.__ft[o]);
},dispatchEvent:function(q,event,r){if(r==h){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fs||!qx.dom.Hierarchy.contains(this.__fr,q)){q=this.__fr;
}arguments.callee.base.call(this,q,event,r);
},__ft:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(u,v){var v=v!==false;

if(this.__fr===u&&this.__fs==v){return;
}
if(this.__fr){this.releaseCapture();
}this.nativeSetCapture(u,v);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(u,l,function(){qx.bom.Event.removeNativeListener(u,l,arguments.callee);
self.releaseCapture();
});
}this.__fs=v;
this.__fr=u;
this.__fq.fireEvent(u,f,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fr;
},releaseCapture:function(){var t=this.__fr;

if(!t){return;
}this.__fr=null;
this.__fq.fireEvent(t,l,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(t);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(k,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(k,{"mshtml":function(s){s.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fr=this.__fp=this.__fq=null;
},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var x="qx.client",w="",v="mshtml",u="'",t="SelectionLanguage",s="qx.xml.Document",r=" />",q="MSXML2.DOMDocument.3.0",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="MSXML2.XMLHTTP.3.0",j="MSXML2.XMLHTTP.6.0",n=" xmlns='",m="text/xml",h="XPath",g="MSXML2.DOMDocument.6.0",k="HTML";
qx.Bootstrap.define(s,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(y){if(y.nodeType===9){return y.documentElement.nodeName!==k;
}else if(y.ownerDocument){return this.isXmlDocument(y.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(x,{"mshtml":function(c,d){var e=new ActiveXObject(this.DOMDOC);
e.setProperty(t,h);

if(d){var f=p;
f+=d;

if(c){f+=n+c+u;
}f+=r;
e.loadXML(f);
}return e;
},"default":function(F,G){return document.implementation.createDocument(F||w,G||w,null);
}}),fromString:qx.core.Variant.select(x,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(z){var A=new DOMParser();
return A.parseFromString(z,m);
}})},defer:function(B){if(qx.core.Variant.isSet(x,v)){var C=[g,q];
var D=[j,o];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var w="'>",v="[",u=", ",t="</span>",s="<span class='type-",r="</span> ",q="}",p="",o="]",n="{",T="map",S="<span class='object'>",R="]:",Q="&gt;",P="<span class='object' title='Object instance with hash code: ",O="string",N="level-",M="0",L="&lt;",K="<span class='offset'>",D=":",E="qx.log.appender.Util",B="&amp;",C="&#39;",z="DIV",A="<span>",x="&quot;",y="<span class='type-key'>",F="</span>:<span class='type-",G="</span>: ",I=" ",H="]</span>: ",J="?";
qx.Class.define(E,{statics:{toHtml:function(a){var m=[];
var h,l,c,e;
m.push(K,this.formatOffset(a.offset,6),r);

if(a.object){var b=a.win.qx.core.ObjectRegistry.fromHashCode(a.object);

if(b){m.push(P+b.$$hash+w,b.classname,v,b.$$hash,H);
}}else if(a.clazz){m.push(S+a.clazz.classname,G);
}var d=a.items;

for(var i=0,k=d.length;i<k;i++){h=d[i];
l=h.text;

if(l instanceof Array){var e=[];

for(var j=0,g=l.length;j<g;j++){c=l[j];

if(typeof c===O){e.push(A+this.escapeHTML(c)+t);
}else if(c.key){e.push(y+c.key+F+c.type+w+this.escapeHTML(c.text)+t);
}else{e.push(s+c.type+w+this.escapeHTML(c.text)+t);
}}m.push(s+h.type+w);

if(h.type===T){m.push(n,e.join(u),q);
}else{m.push(v,e.join(u),o);
}m.push(t);
}else{m.push(s+h.type+w+this.escapeHTML(l)+r);
}}var f=document.createElement(z);
f.innerHTML=m.join(p);
f.className=N+a.level;
return f;
},formatOffset:function(bf,length){var bi=bf.toString();
var bg=(length||6)-bi.length;
var bh=p;

for(var i=0;i<bg;i++){bh+=M;
}return bh+bi;
},escapeHTML:function(U){return String(U).replace(/[<>&"']/g,this.__qQ);
},__qQ:function(bj){var bk={"<":L,">":Q,"&":B,"'":C,'"':x};
return bk[bj]||J;
},toText:function(bl){return this.toTextArray(bl).join(I);
},toTextArray:function(V){var be=[];
be.push(this.formatOffset(V.offset,6));

if(V.object){var W=V.win.qx.core.ObjectRegistry.fromHashCode(V.object);

if(W){be.push(W.classname+v+W.$$hash+R);
}}else if(V.clazz){be.push(V.clazz.classname+D);
}var X=V.items;
var bb,bd;

for(var i=0,bc=X.length;i<bc;i++){bb=X[i];
bd=bb.text;

if(bd instanceof Array){var Y=[];

for(var j=0,ba=bd.length;j<ba;j++){Y.push(bd[j].text);
}
if(bb.type===T){be.push(n,Y.join(u),q);
}else{be.push(v,Y.join(u),o);
}}else{be.push(bd);
}}return be;
}}});
})();
(function(){var i="debug",h="log",g="qx.log.appender.Native",f="qx.client";
qx.Bootstrap.define(g,{statics:{process:qx.core.Variant.select(f,{"gecko":function(b){if(window.console&&console.firebug){console[b.level].call(console,qx.log.appender.Util.toText(b));
}},"mshtml":function(k){if(window.console){var m=k.level;

if(m==i){m=h;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"webkit":function(c){if(window.console){var e=c.level;

if(e==i){e=h;
}var d=qx.log.appender.Util.toText(c);
console[e](d);
}},"opera":function(a){}})},defer:function(j){if(window.console&&window.console.clear){console.clear();
}qx.log.Logger.register(j);
}});
})();
(function(){var m="",l='</div>',k="Up",j="none",i="keypress",h='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',g="Enter",f="px",d='.qxconsole .messages .user-result{background:white}',c='.qxconsole .messages .level-error{background:#FFE2D5}',X="div",W="user-command",V='<div class="command">',U='.qxconsole .command input:focus{outline:none;}',T='.qxconsole .messages .type-key{color:#565656;font-style:italic}',S='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',R='.qxconsole .messages div{padding:0px 4px;}',Q='.qxconsole .messages .level-debug{background:white}',P='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',O="DIV",t='.qxconsole .messages .level-user{background:#E3EFE9}',u='<div class="qxconsole">',r="D",s='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',p='.qxconsole .messages .type-string{color:black;font-weight:normal;}',q='.qxconsole .control a{text-decoration:none;color:black;}',n='<div class="messages">',o='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',v='<input type="text"/>',w="clear",D='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',B='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',H='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',F='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',K='.qxconsole .messages .user-command{color:blue}',J="F7",y="qx.log.appender.Console",N='.qxconsole .messages .level-info{background:#DEEDFA}',M="block",L='.qxconsole .messages .level-warn{background:#FFF7D5}',x='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',z='.qxconsole .messages .user-error{background:#FFE2D5}',A='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',C='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',E=">>> ",G="Down",I='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(y,{statics:{init:function(){var be=[H,A,q,h,R,K,d,z,Q,N,L,c,t,p,I,o,B,s,T,P,S,x,F,D,U];
qx.bom.Stylesheet.createElement(be.join(m));
var bg=[u,C,n,l,V,v,l,l];
var bh=document.createElement(O);
bh.innerHTML=bg.join(m);
var bf=bh.firstChild;
document.body.appendChild(bh.firstChild);
this.__qH=bf;
this.__qI=bf.childNodes[1];
this.__qJ=bf.childNodes[2].firstChild;
this.__qO();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,i,this.__qP,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__qI.innerHTML=m;
},process:function(Y){this.__qI.appendChild(qx.log.appender.Util.toHtml(Y));
this.__qK();
},__qK:function(){this.__qI.scrollTop=this.__qI.scrollHeight;
},__qL:true,toggle:function(){if(!this.__qH){this.init();
}else if(this.__qH.style.display==j){this.show();
}else{this.__qH.style.display=j;
}},show:function(){if(!this.__qH){this.init();
}else{this.__qH.style.display=M;
this.__qI.scrollTop=this.__qI.scrollHeight;
}},__qM:[],execute:function(){var bd=this.__qJ.value;

if(bd==m){return;
}
if(bd==w){return this.clear();
}var bb=document.createElement(X);
bb.innerHTML=qx.log.appender.Util.escapeHTML(E+bd);
bb.className=W;
this.__qM.push(bd);
this.__qN=this.__qM.length;
this.__qI.appendChild(bb);
this.__qK();

try{var bc=window.eval(bd);
}catch(bi){qx.log.Logger.error(bi);
}
if(bc!==undefined){qx.log.Logger.debug(bc);
}},__qO:function(e){this.__qI.style.height=(this.__qH.clientHeight-this.__qH.firstChild.offsetHeight-this.__qH.lastChild.offsetHeight)+f;
},__qP:function(e){var b=e.getKeyIdentifier();
if((b==J)||(b==r&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__qH){return;
}if(!qx.dom.Hierarchy.contains(this.__qH,e.getTarget())){return;
}if(b==g&&this.__qJ.value!=m){this.execute();
this.__qJ.value=m;
}if(b==k||b==G){this.__qN+=b==k?-1:1;
this.__qN=Math.min(Math.max(0,this.__qN),this.__qM.length);
var a=this.__qM[this.__qN];
this.__qJ.value=a||m;
this.__qJ.select();
}}},defer:function(ba){qx.event.Registration.addListener(document.documentElement,i,ba.__qP,ba);
}});
})();
(function(){var v="qx.client",u="head",t="text/css",s="stylesheet",r="}",q='@import "',p="{",o='";',n="qx.bom.Stylesheet",m="link",l="style";
qx.Class.define(n,{statics:{includeFile:function(ba,bb){if(!bb){bb=document;
}var bc=bb.createElement(m);
bc.type=t;
bc.rel=s;
bc.href=qx.util.ResourceManager.getInstance().toUri(ba);
var bd=bb.getElementsByTagName(u)[0];
bd.appendChild(bc);
},createElement:qx.core.Variant.select(v,{"mshtml":function(j){var k=document.createStyleSheet();

if(j){k.cssText=j;
}return k;
},"default":function(A){var B=document.createElement(l);
B.type=t;

if(A){B.appendChild(document.createTextNode(A));
}document.getElementsByTagName(u)[0].appendChild(B);
return B.sheet;
}}),addRule:qx.core.Variant.select(v,{"mshtml":function(L,M,N){L.addRule(M,N);
},"default":function(C,D,E){C.insertRule(D+p+E+r,C.cssRules.length);
}}),removeRule:qx.core.Variant.select(v,{"mshtml":function(V,W){var X=V.rules;
var Y=X.length;

for(var i=Y-1;i>=0;--i){if(X[i].selectorText==W){V.removeRule(i);
}}},"default":function(O,P){var Q=O.cssRules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(v,{"mshtml":function(be){var bf=be.rules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){be.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(v,{"mshtml":function(c,d){c.addImport(d);
},"default":function(a,b){a.insertRule(q+b+o,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(v,{"mshtml":function(w,x){var y=w.imports;
var z=y.length;

for(var i=z-1;i>=0;i--){if(y[i].href==x){w.removeImport(i);
}}},"default":function(e,f){var g=e.cssRules;
var h=g.length;

for(var i=h-1;i>=0;i--){if(g[i].href==f){e.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(v,{"mshtml":function(F){var G=F.imports;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeImport(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){if(J[i].type==J[i].IMPORT_RULE){I.deleteRule(i);
}}}})}});
})();
(function(){var x=": ",w="Summary: (",v="qx.dev.ObjectSummary",u="\n",t=" Objects)\n\n",s=")\r\n",r=" (",q=" Objects)\r\n\r\n",p=", ";
qx.Class.define(v,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=w+F+t;

for(var i=0;i<E.length;i++){D+=E[i].number+x+E[i].classname+u;
}return D;
},getNewObjects:function(){var d={};
var o=0;
var e;
var j=qx.core.ObjectRegistry.getRegistry();
var g={};
var n;

for(var k in j){e=j[k];

if(e&&e.__disposed===false){var h=e.classname;

if(d[h]==null){d[h]=1;
}else{d[h]++;
}n=g[h];

if(n==null){n=g[h]=new Array();
}n[n.length]=e.toHashCode();
o++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var c={};

for(var h in d){if(!(h in this._m_dObjectList)){this._m_dObjectList[h]=0;
}
if(this._m_dObjectList[h]>=0&&this._m_dObjectList[h]<d[h]){c[h]=d[h]-this._m_dObjectList[h];
}}this._m_dObjectList=d;
var m=[];

for(var f in c){m.push({classname:f,number:c[f],aHashCode:g[f]});
}m.sort(function(a,b){return b.number-a.number;
});
var l=w+o+q;

for(var i=0;i<m.length;i++){l+=m[i].number+x+m[i].classname+r+m[i].aHashCode.join(p)+s;
}return l;
}}});
})();
(function(){var cs="window",cr="",cq="childNodes",cp="nodeName",co="nodeType",cn="document",cm="function",cl="firstChild",ck="qx.client",cj="external",bA="location",bz="[native code]",by="lastChild",bx="scrollY",bw="scrollWidth",bv="defaultView",bu="closed",bt="content",bs="qx",br="</td><td>",cz="filters",cA="locationbar",cx="screenX",cy="previousSibling",cv="scrollX",cw="Global namespace is polluted by the following unknown objects:\n\n",ct="doctype",cu="parent",cB="qx.dev.Pollution",cC="outerText",bY="applets",bX="parentElement",cb="designMode",ca="cookie",cd="fullScreen",cc="links",cf="pageXOffset",ce="frames",bW="documentElement",bV="screenY",h="statusbar",j="history",k="sun",l="pkcs11",m="java",n="style",o="innerWidth",p="plugins",q="implementation",r="clientWidth",cG="compatMode",cF="length",cE="textContent",cD="controllers",cK="netscape",cJ="self",cI="domConfig",cH="attributes",cM="clientHeight",cL="outerHeight",Q="parentNode",R="innerHeight",O="title",P="ownerDocument",U="<table>",V="globalStorage",S="Global namespace is not polluted by any unknown objects.",T="toolbar",M="outerHTML",N="crypto",z="forms",y="scrollbars",B="frameElement",A="Components",v="body",u="clientInformation",x="offscreenBuffering",w="embeds",t="localName",s="scrollTop",bb="isMultiLine",bc="scrollLeft",bd="images",be="event",W="offsetHeight",X="scrollMaxY",Y="sessionStorage",ba="screen",bf="name",bg="offsetLeft",J="console",I="XMLHttpRequest",H="mshtml",G="nextSibling",F="innerText",E="menubar",D="scopeName",C="top",L="outerWidth",K=": ",bh="\n",bi="status",bj="contentEditable",bk="anchors",bl="</table>",bm="<tr style='vertical-align:top'><td>",bn="scrollMaxX",bo="screenTop",bp="defaultStatus",bq="styleSheets",bE="className",bD="personalbar",bC="</td></tr>",bB="currentStyle",bI="directories",bH="navigator",bG="pageYOffset",bF="screenLeft",bK="opener",bJ="scrollHeight",bR="__firebug__",bS="Option",bP="innerHTML",bQ="tabIndex",bN="offsetTop",bO="[function]",bL="clipboardData",bM="Packages",bT="tagName",bU="offsetWidth",ch="mshtml|opera",cg="undefined",ci="Image";
qx.Class.define(cB,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bs,m,k,bM,bR,A,cD,Y,V,J,be,x,bL,u,bS,ci,cj,bo,bF,cF,cs,cn,bA,bH,cK,cu,ce,C,y,bf,cv,bx,cJ,ba,j,bt,E,T,cA,bD,h,bI,bu,N,l,bK,bi,bp,o,R,L,cL,cx,bV,cf,bG,bn,X,cd,B,I],"document":[cI,bA,cG,q,bv,O,v,bq,bW,cp,co,cl,by,ct,bd,bY,cc,z,bk,ca,w,p,cb,cq],"body":[cE,bP,M,F,cC,D,bX,bT,cz,bj,cn,bB,bb,cM,r,by,cl,bN,bg,bU,W,bQ,bE,cH,cy,G,P,t,cq,Q,co,cp,n,s,bc,bw,bJ]},getInfo:function(cN){var cO=qx.dev.Pollution.getTextList(cN||cs);

if(cO){return cw+cO;
}else{return S;
}},extract:function(b){var d=[];
var c=qx.dev.Pollution.ignore[b];
if(qx.core.Variant.isSet(ck,H)){if(b==cs){c=c.slice(0);

for(var e=0;e<window.length;e++){c.push(cr+e);
}}}var f=qx.dev.Pollution.names[b];

for(var g in f){try{if(qx.core.Variant.isSet(ck,ch)){if(b==cs&&g==cj){continue;
}}if(typeof f[g]==cg||f[g]===null){continue;
}if(typeof f[g]==cm&&f[g].toString().indexOf(bz)!=-1){continue;
}if(typeof f[g].constructor==cm){if((f[g].constructor.toString().indexOf(bz)!=-1)||(f[g].constructor.toString().indexOf(bO)!=-1)){continue;
}}if(qx.lang.Array.contains(c,g)){continue;
}}catch(a){continue;
}d.push({"key":g,"value":f[g]});
}return d;
},getHtmlTable:function(cU){var cW=[];
var cV=bm;
var cY=br;
var da=bC;
cW.push(U);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(bl);
return cW.join(cr);
},getTextList:function(cP){var cR=[];
var cS=K;
var cT=bh;
var cQ=this.extract(cP);

for(var i=0;i<cQ.length;i++){cR.push(cQ[i].key+cS+cQ[i].value+cT);
}return cR.join(cr);
}}});
})();


qx.$$loader.init();

