(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.test.io_HttpRequest","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.demo.test.io_HttpRequest-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"b1a33e42bef7"},
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

qx.$$packageData['b1a33e42bef7']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser.demo"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]}};
(function(){var z="toString",y=".",x="default",w="Object",v='"',u="Array",t="()",s="String",r="Function",q=".prototype",X="function",W="Boolean",V="Error",U="RegExp",T="warn",S="hasOwnProperty",R="string",Q="toLocaleString",P='\", "',O="info",G="BROKEN_IE",H="isPrototypeOf",E="Date",F="",C="qx.Bootstrap",D="]",A="Class",B="error",I="[Class ",J="valueOf",L="Number",K="count",N="debug",M="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return I+this.classname+D;
},createNamespace:function(name,bn){var bp=name.split(y);
var parent=window;
var bo=bp[0];

for(var i=0,bq=bp.length-1;i<bq;i++,bo=bp[i]){if(!parent[bo]){parent=parent[bo]={};
}else{parent=parent[bo];
}}parent[bo]=bn;
return bo;
},setDisplayName:function(bl,bm,name){bl.displayName=bm+y+name+t;
},setDisplayNames:function(bg,bh){for(var name in bg){var bi=bg[name];

if(bi instanceof Function){bi.displayName=bh+y+name+t;
}}},define:function(name,Y){if(!Y){var Y={statics:{}};
}var be;
var bc=null;
qx.Bootstrap.setDisplayNames(Y.statics,name);

if(Y.members){qx.Bootstrap.setDisplayNames(Y.members,name+q);
be=Y.construct||new Function;
var ba=Y.statics;

for(var bb in ba){be[bb]=ba[bb];
}bc=be.prototype;
var bf=Y.members;

for(var bb in bf){bc[bb]=bf[bb];
}}else{be=Y.statics||{};
}var bd=this.createNamespace(name,be);
be.name=be.classname=name;
be.basename=bd;
be.$$type=A;
if(!be.hasOwnProperty(z)){be.toString=this.genericToString;
}if(Y.defer){Y.defer(be,bc);
}qx.Bootstrap.$$registry[name]=Y.statics;
return be;
}};
qx.Bootstrap.define(C,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bj){return bj.__count__;
},"default":function(bA){var length=0;

for(var bB in bA){length++;
}return length;
}})[(({}).__count__==0)?K:x],objectMergeWith:function(bw,bx,by){if(by===undefined){by=true;
}
for(var bz in bx){if(by||bw[bz]===undefined){bw[bz]=bx[bz];
}}return bw;
},__a:[H,S,Q,z,J],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bP){var bQ=[];

for(var bT in bP){bQ.push(bT);
}var bR=qx.Bootstrap.__a;
var bS=Object.prototype.hasOwnProperty;

for(var i=0,a=bR,l=a.length;i<l;i++){if(bS.call(bP,a[i])){bQ.push(a[i]);
}}return bQ;
},"default":function(bF){var bG=[];

for(var bH in bF){bG.push(bH);
}return bG;
}})[typeof (Object.keys)==
X?M:
(function(){for(var bE in {toString:1}){return bE;
}})()!==z?G:x],getKeysAsString:function(bN){var bO=qx.Bootstrap.getKeys(bN);

if(bO.length==0){return F;
}return v+bO.join(P)+v;
},__b:{"[object String]":s,"[object Array]":u,"[object Object]":w,"[object RegExp]":U,"[object Number]":L,"[object Boolean]":W,"[object Date]":E,"[object Function]":r,"[object Error]":V},firstUp:function(f){return f.charAt(0).toUpperCase()+f.substr(1);
},firstLow:function(bU){return bU.charAt(0).toLowerCase()+bU.substr(1);
},getClass:function(g){var h=Object.prototype.toString.call(g);
return (qx.Bootstrap.__b[h]||h.slice(8,-1));
},isString:function(e){return (e!==null&&(typeof e===R||qx.Bootstrap.getClass(e)==s||e instanceof String||(!!e&&!!e.$$isString)));
},isArray:function(bJ){return (bJ!==null&&(bJ instanceof Array||(bJ&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bJ.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bJ)==u||(!!bJ&&!!bJ.$$isArray)));
},isObject:function(b){return (b!==undefined&&b!==null&&qx.Bootstrap.getClass(b)==w);
},isFunction:function(bV){return qx.Bootstrap.getClass(bV)==r;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bI,name){while(bI){if(bI.$$properties&&bI.$$properties[name]){return bI.$$properties[name];
}bI=bI.superclass;
}return null;
},hasProperty:function(d,name){return !!qx.Bootstrap.getPropertyDefinition(d,name);
},getEventType:function(br,name){var br=br.constructor;

while(br.superclass){if(br.$$events&&br.$$events[name]!==undefined){return br.$$events[name];
}br=br.superclass;
}return null;
},supportsEvent:function(bk,name){return !!qx.Bootstrap.getEventType(bk,name);
},getByInterface:function(bK,bL){var bM,i,l;

while(bK){if(bK.$$implements){bM=bK.$$flatImplements;

for(i=0,l=bM.length;i<l;i++){if(bM[i]===bL){return bK;
}}}bK=bK.superclass;
}return null;
},hasInterface:function(j,k){return !!qx.Bootstrap.getByInterface(j,k);
},getMixins:function(o){var p=[];

while(o){if(o.$$includes){p.push.apply(p,o.$$flatIncludes);
}o=o.superclass;
}return p;
},$$logs:[],debug:function(bu,bv){qx.Bootstrap.$$logs.push([N,arguments]);
},info:function(m,n){qx.Bootstrap.$$logs.push([O,arguments]);
},warn:function(bC,bD){qx.Bootstrap.$$logs.push([T,arguments]);
},error:function(bs,bt){qx.Bootstrap.$$logs.push([B,arguments]);
},trace:function(c){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__c[l]){this.__c[l]={};
}else if(this.__c[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__c[l].defaultValue=m;
},get:function(n){var o=this.__c[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var b in window.qxsettings){this.set(b,window.qxsettings[b]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var s=document.location.search.slice(1).split(j);

for(var i=0;i<s.length;i++){var r=s[i].split(d);

if(r.length!=3||r[0]!=e){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(k,false);
t.define(g,false);
t.define(f,0);
t.__d();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__f:function(){var t=d;
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
}},defer:function(A){A.__f();
}});
})();
(function(){var z="on",y="off",x="|",w="default",u="object",t="&",s="qx.aspects",r="$",q="qx.allowUrlVariants",p="qx.debug",h="qx.client",o="qx.dynlocale",m="webkit",g="qxvariant",f="opera",k=":",j="qx.core.Variant",n="mshtml",e="gecko";
qx.Bootstrap.define(j,{statics:{__g:{},__h:{},compilerIsSet:function(){return true;
},define:function(E,F,G){{};

if(!this.__g[E]){this.__g[E]={};
}else{}this.__g[E].allowedValues=F;
this.__g[E].defaultValue=G;
},get:function(P){var Q=this.__g[P];
{};

if(Q.value!==undefined){return Q.value;
}return Q.defaultValue;
},__i:function(){if(window.qxvariants){for(var d in qxvariants){{};

if(!this.__g[d]){this.__g[d]={};
}this.__g[d].value=qxvariants[d];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(D){}this.__j(this.__g);
}},__j:function(){if(qx.core.Setting.get(q)!=true){return;
}var A=document.location.search.slice(1).split(t);

for(var i=0;i<A.length;i++){var B=A[i].split(k);

if(B.length!=3||B[0]!=g){continue;
}var C=B[1];

if(!this.__g[C]){this.__g[C]={};
}this.__g[C].value=decodeURIComponent(B[2]);
}},select:function(a,b){{};

for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[w]!==undefined){return b[w];
}{};
},isSet:function(H,I){var J=H+r+I;

if(this.__h[J]!==undefined){return this.__h[J];
}var L=false;
if(I.indexOf(x)<0){L=this.get(H)===I;
}else{var K=I.split(x);

for(var i=0,l=K.length;i<l;i++){if(this.get(H)===K[i]){L=true;
break;
}}}this.__h[J]=L;
return L;
},__k:function(v){return typeof v===u&&v!==null&&v instanceof Array;
},__l:function(v){return typeof v===u&&v!==null&&!(v instanceof Array);
},__m:function(M,N){for(var i=0,l=M.length;i<l;i++){if(M[i]==N){return true;
}}return false;
}},defer:function(O){O.define(h,[e,n,f,m],qx.bom.client.Engine.NAME);
O.define(p,[z,y],z);
O.define(s,[z,y],y);
O.define(o,[z,y],z);
O.__i();
}});
})();
(function(){var t="function",s="Boolean",r="qx.Interface",q="]",p="toggle",o="Interface",n="is",m="[Interface ";
qx.Bootstrap.define(r,{statics:{define:function(name,M){if(M){if(M.extend&&!(M.extend instanceof Array)){M.extend=[M.extend];
}{};
var N=M.statics?M.statics:{};
if(M.extend){N.$$extends=M.extend;
}
if(M.properties){N.$$properties=M.properties;
}
if(M.members){N.$$members=M.members;
}
if(M.events){N.$$events=M.events;
}}else{var N={};
}N.$$type=o;
N.name=name;
N.toString=this.genericToString;
N.basename=qx.Bootstrap.createNamespace(name,N);
qx.Interface.$$registry[name]=N;
return N;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(H){if(!H){return [];
}var I=H.concat();

for(var i=0,l=H.length;i<l;i++){if(H[i].$$extends){I.push.apply(I,this.flatten(H[i].$$extends));
}}return I;
},__n:function(u,v,w,x){var B=w.$$members;

if(B){for(var A in B){if(qx.Bootstrap.isFunction(B[A])){var z=this.__o(v,A);
var y=z||qx.Bootstrap.isFunction(u[A]);

if(!y){throw new Error('Implementation of method "'+A+'" is missing in class "'+v.classname+'" required by interface "'+w.name+'"');
}var C=x===true&&!z&&!qx.Bootstrap.hasInterface(v,w);

if(C){u[A]=this.__r(w,u[A],A,B[A]);
}}else{if(typeof u[A]===undefined){if(typeof u[A]!==t){throw new Error('Implementation of member "'+A+'" is missing in class "'+v.classname+'" required by interface "'+w.name+'"');
}}}}}},__o:function(e,f){var k=f.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!k){return false;
}var g=qx.Bootstrap.firstLow(k[2]);
var h=qx.Bootstrap.getPropertyDefinition(e,g);

if(!h){return false;
}var j=k[0]==n||k[0]==p;

if(j){return qx.Bootstrap.getPropertyDefinition(e,g).check==s;
}return true;
},__p:function(J,K){if(K.$$properties){for(var L in K.$$properties){if(!qx.Bootstrap.getPropertyDefinition(J,L)){throw new Error('The property "'+L+'" is not supported by Class "'+J.classname+'"!');
}}}},__q:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(D,E){var G=D.constructor;
this.__n(D,G,E,false);
this.__p(G,E);
this.__q(G,E);
var F=E.$$extends;

if(F){for(var i=0,l=F.length;i<l;i++){this.assertObject(D,F[i]);
}}},assert:function(a,b,c){this.__n(a.prototype,a,b,c);
this.__p(a,b);
this.__q(a,b);
var d=b.$$extends;

if(d){for(var i=0,l=d.length;i<l;i++){this.assert(a,d[i],c);
}}},genericToString:function(){return m+this.name+q;
},$$registry:{},__r:function(){},__s:null,__t:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,h);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+j);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,e);
}}else{var c={};
}c.$$type=d;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(m,n){var o=qx.Bootstrap.getMixins(n);
o.push(m);
return qx.Mixin.checkCompatibility(o);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__u:null,__v:function(){}}});
})();
(function(){var bn=';',bm="string",bl='return this.',bk="boolean",bj='!==undefined)',bi="set",bh="",bg="this.",bf="setThemed",be='else if(this.',cE="resetThemed",cD="reset",cC="setRuntime",cB="init",cA="resetRuntime",cz="(a[",cy="return this.",cx="();",cw="get",cv="refresh",bu='else ',bv='if(this.',bs=' of an instance of ',bt=' is not (yet) ready!");',bq="]);",br='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bo="$$init_",bp='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bC='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bD=" of class ",bW="$$theme_",bS='qx.core.Assert.assertInstance(value, Date, msg) || true',cf='value !== null && value.nodeType !== undefined',ca="is",cr="': ",cl='var inherit=prop.$$inherit;',bL='value !== null && value.nodeType === 9 && value.documentElement',cu="shorthand",ct='return init;',cs='value !== null && value.$$type === "Mixin"',bJ='qx.core.Assert.assertMap(value, msg) || true',bO="Boolean",bQ='return value;',bU='qx.core.Assert.assertNumber(value, msg) || true',bX='qx.core.Assert.assertPositiveInteger(value, msg) || true',cb="Error in property ",ch='if(init==qx.core.Property.$$inherit)init=null;',cn="$$inherit_",bw="()",bx='qx.core.Assert.assertInteger(value, msg) || true',bN='value !== null && value.$$type === "Interface"',ce="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cd='value !== null && value.$$type === "Theme"',cc='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cj='value !== null && value.type !== undefined',ci='value !== null && value.document',bY=" in method ",cg='qx.core.Assert.assertInstance(value, Error, msg) || true',bb="())",cm="(!this.",by='qx.core.Assert.assertBoolean(value, msg) || true',bz='return null;',bT='var init=this.',bc=" with incoming value '",bd='qx.core.Assert.assertObject(value, msg) || true',bI='value !== null && value.nodeType === 1 && value.attributes',bA='throw new Error("Property ',bB="$$runtime_",bH="$$useinit_",bV='qx.core.Assert.assertString(value, msg) || true',cp="inherit",co="$$user_",bP='value !== null && value.$$type === "Class"',cq='qx.core.Assert.assertFunction(value, msg) || true',bK='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',ck='qx.core.Assert.assertArray(value, msg) || true',bE="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bG='qx.core.Assert.assertPositiveNumber(value, msg) || true',bM="toggle",bR="object",bF="qx.core.Property";
qx.Bootstrap.define(bF,{statics:{__w:{"Boolean":by,"String":bV,"Number":bU,"Integer":bx,"PositiveNumber":bG,"PositiveInteger":bX,"Error":cg,"RegExp":cc,"Object":bd,"Array":ck,"Map":bJ,"Function":cq,"Date":bS,"Node":cf,"Element":bI,"Document":bL,"Window":ci,"Event":cj,"Class":bP,"Mixin":cs,"Interface":bN,"Theme":cd,"Color":bp,"Decorator":bK,"Font":bC},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cp,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bm,dispose:bk,inheritable:bk,nullable:bk,themeable:bk,refine:bk,init:null,apply:bm,event:bm,check:null,transform:bm,deferredInit:bk,validate:null},$$allowedGroupKeys:{name:bm,group:bR,mode:bm,themeable:bk},$$inheritable:{},refresh:function(cI){var parent=cI.getLayoutParent();

if(parent){var cL=cI.constructor;
var cN=this.$$store.inherit;
var cM=this.$$store.init;
var cK=this.$$method.refresh;
var cO;
var cJ;
{};

while(cL){cO=cL.$$properties;

if(cO){for(var name in this.$$inheritable){if(cO[name]&&cI[cK[name]]){cJ=parent[cN[name]];

if(cJ===undefined){cJ=parent[cM[name]];
}{};
cI[cK[name]](cJ);
}}}cL=cL.superclass;
}}},attach:function(z){var A=z.$$properties;

if(A){for(var name in A){this.attachMethods(z,name,A[name]);
}}z.$$propertiesAttached=true;
},attachMethods:function(J,name,K){K.group?this.__y(J,K,name):this.__z(J,K,name);
},__y:function(cT,cU,name){var dc=qx.Bootstrap.firstUp(name);
var db=cT.prototype;
var dd=cU.themeable===true;
{};
var de=[];
var cX=[];

if(dd){var cV=[];
var da=[];
}var cY=ce;
de.push(cY);

if(dd){cV.push(cY);
}
if(cU.mode==cu){var cW=bE;
de.push(cW);

if(dd){cV.push(cW);
}}
for(var i=0,a=cU.group,l=a.length;i<l;i++){{};
de.push(bg,this.$$method.set[a[i]],cz,i,bq);
cX.push(bg,this.$$method.reset[a[i]],cx);

if(dd){{};
cV.push(bg,this.$$method.setThemed[a[i]],cz,i,bq);
da.push(bg,this.$$method.resetThemed[a[i]],cx);
}}this.$$method.set[name]=bi+dc;
db[this.$$method.set[name]]=new Function(de.join(bh));
this.$$method.reset[name]=cD+dc;
db[this.$$method.reset[name]]=new Function(cX.join(bh));

if(dd){this.$$method.setThemed[name]=bf+dc;
db[this.$$method.setThemed[name]]=new Function(cV.join(bh));
this.$$method.resetThemed[name]=cE+dc;
db[this.$$method.resetThemed[name]]=new Function(da.join(bh));
}},__z:function(b,c,name){var e=qx.Bootstrap.firstUp(name);
var g=b.prototype;
{};
if(c.dispose===undefined&&typeof c.check===bm){c.dispose=this.__x[c.check]||qx.Bootstrap.classIsDefined(c.check)||(qx.Interface&&qx.Interface.isDefined(c.check));
}var f=this.$$method;
var d=this.$$store;
d.runtime[name]=bB+name;
d.user[name]=co+name;
d.theme[name]=bW+name;
d.init[name]=bo+name;
d.inherit[name]=cn+name;
d.useinit[name]=bH+name;
f.get[name]=cw+e;
g[f.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,b,name,cw);
};
f.set[name]=bi+e;
g[f.set[name]]=function(u){return qx.core.Property.executeOptimizedSetter(this,b,name,bi,arguments);
};
f.reset[name]=cD+e;
g[f.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cD);
};

if(c.inheritable||c.apply||c.event||c.deferredInit){f.init[name]=cB+e;
g[f.init[name]]=function(I){return qx.core.Property.executeOptimizedSetter(this,b,name,cB,arguments);
};
}
if(c.inheritable){f.refresh[name]=cv+e;
g[f.refresh[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,b,name,cv,arguments);
};
}f.setRuntime[name]=cC+e;
g[f.setRuntime[name]]=function(L){return qx.core.Property.executeOptimizedSetter(this,b,name,cC,arguments);
};
f.resetRuntime[name]=cA+e;
g[f.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cA);
};

if(c.themeable){f.setThemed[name]=bf+e;
g[f.setThemed[name]]=function(cP){return qx.core.Property.executeOptimizedSetter(this,b,name,bf,arguments);
};
f.resetThemed[name]=cE+e;
g[f.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,cE);
};
}
if(c.check===bO){g[bM+e]=new Function(cy+f.set[name]+cm+f.get[name]+bb);
g[ca+e]=new Function(cy+f.get[name]+bw);
}},__A:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(B,C,D,E,F){var G=B.constructor.classname;
var H=cb+D+bD+G+bY+this.$$method[E][D]+bc+F+cr;
throw new Error(H+(this.__A[C]||"Unknown reason: "+C));
},__B:function(dt,du,name,dv,dw,dx){var dy=this.$$method[dv][name];
{du[dy]=new Function("value",dw.join(""));
};
{};
qx.Bootstrap.setDisplayName(du[dy],dt.classname+".prototype",dy);
if(dx===undefined){return dt[dy]();
}else{return dt[dy](dx[0]);
}},executeOptimizedGetter:function(O,P,name,Q){var S=P.$$properties[name];
var U=P.prototype;
var R=[];
var T=this.$$store;
R.push(bv,T.runtime[name],bj);
R.push(bl,T.runtime[name],bn);

if(S.inheritable){R.push(be,T.inherit[name],bj);
R.push(bl,T.inherit[name],bn);
R.push(bu);
}R.push(bv,T.user[name],bj);
R.push(bl,T.user[name],bn);

if(S.themeable){R.push(be,T.theme[name],bj);
R.push(bl,T.theme[name],bn);
}
if(S.deferredInit&&S.init===undefined){R.push(be,T.init[name],bj);
R.push(bl,T.init[name],bn);
}R.push(bu);

if(S.init!==undefined){if(S.inheritable){R.push(bT,T.init[name],bn);

if(S.nullable){R.push(ch);
}else if(S.init!==undefined){R.push(bl,T.init[name],bn);
}else{R.push(br,name,bs,P.classname,bt);
}R.push(ct);
}else{R.push(bl,T.init[name],bn);
}}else if(S.inheritable||S.nullable){R.push(bz);
}else{R.push(bA,name,bs,P.classname,bt);
}return this.__B(O,U,name,Q,R);
},executeOptimizedSetter:function(j,k,name,m,n){var s=k.$$properties[name];
var r=k.prototype;
var p=[];
var o=m===bi||m===bf||m===cC||(m===cB&&s.init===undefined);
var q=s.apply||s.event||s.inheritable;
var t=this.__C(m,name);
this.__D(p,s,name,m,o);

if(o){this.__E(p,k,s,name);
}
if(q){this.__F(p,o,t,m);
}
if(s.inheritable){p.push(cl);
}{};

if(!q){this.__H(p,name,m,o);
}else{this.__I(p,s,name,m,o);
}
if(s.inheritable){this.__J(p,s,name,m);
}else if(q){this.__K(p,s,name,m);
}
if(q){this.__L(p,s,name);
if(s.inheritable&&r._getChildren){this.__M(p,name);
}}if(o){p.push(bQ);
}return this.__B(j,r,name,m,p,n);
},__C:function(M,name){if(M==="setRuntime"||M==="resetRuntime"){var N=this.$$store.runtime[name];
}else if(M==="setThemed"||M==="resetThemed"){N=this.$$store.theme[name];
}else if(M==="init"){N=this.$$store.init[name];
}else{N=this.$$store.user[name];
}return N;
},__D:function(df,dg,name,dh,di){{if(!dg.nullable||dg.check||dg.inheritable){df.push('var prop=qx.core.Property;');
}if(dh==="set"){df.push('if(value===undefined)prop.error(this,2,"',name,'","',dh,'",value);');
}};
},__E:function(cF,cG,cH,name){if(cH.transform){cF.push('value=this.',cH.transform,'(value);');
}if(cH.validate){if(typeof cH.validate==="string"){cF.push('this.',cH.validate,'(value);');
}else if(cH.validate instanceof Function){cF.push(cG.classname,'.$$properties.',name);
cF.push('.validate.call(this, value);');
}}},__F:function(dj,dk,dl,dm){var dn=(dm==="reset"||dm==="resetThemed"||dm==="resetRuntime");

if(dk){dj.push('if(this.',dl,'===value)return value;');
}else if(dn){dj.push('if(this.',dl,'===undefined)return;');
}},__G:undefined,__H:function(X,name,Y,ba){if(Y==="setRuntime"){X.push('this.',this.$$store.runtime[name],'=value;');
}else if(Y==="resetRuntime"){X.push('if(this.',this.$$store.runtime[name],'!==undefined)');
X.push('delete this.',this.$$store.runtime[name],';');
}else if(Y==="set"){X.push('this.',this.$$store.user[name],'=value;');
}else if(Y==="reset"){X.push('if(this.',this.$$store.user[name],'!==undefined)');
X.push('delete this.',this.$$store.user[name],';');
}else if(Y==="setThemed"){X.push('this.',this.$$store.theme[name],'=value;');
}else if(Y==="resetThemed"){X.push('if(this.',this.$$store.theme[name],'!==undefined)');
X.push('delete this.',this.$$store.theme[name],';');
}else if(Y==="init"&&ba){X.push('this.',this.$$store.init[name],'=value;');
}},__I:function(dp,dq,name,dr,ds){if(dq.inheritable){dp.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dp.push('var computed, old;');
}dp.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="resetRuntime"){dp.push('delete this.',this.$$store.runtime[name],';');
dp.push('if(this.',this.$$store.user[name],'!==undefined)');
dp.push('computed=this.',this.$$store.user[name],';');
dp.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dp.push('computed=this.',this.$$store.theme[name],';');
dp.push('else if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else{dp.push('old=computed=this.',this.$$store.runtime[name],';');
if(dr==="set"){dp.push('this.',this.$$store.user[name],'=value;');
}else if(dr==="reset"){dp.push('delete this.',this.$$store.user[name],';');
}else if(dr==="setThemed"){dp.push('this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
}else if(dr==="init"&&ds){dp.push('this.',this.$$store.init[name],'=value;');
}}dp.push('}');
dp.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dr==="set"){if(!dq.inheritable){dp.push('old=this.',this.$$store.user[name],';');
}dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="reset"){if(!dq.inheritable){dp.push('old=this.',this.$$store.user[name],';');
}dp.push('delete this.',this.$$store.user[name],';');
dp.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dp.push('computed=this.',this.$$store.runtime[name],';');
dp.push('if(this.',this.$$store.theme[name],'!==undefined)');
dp.push('computed=this.',this.$$store.theme[name],';');
dp.push('else if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else{if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dq.inheritable){dp.push('computed=this.',this.$$store.user[name],';');
}else{dp.push('old=computed=this.',this.$$store.user[name],';');
}if(dr==="setThemed"){dp.push('this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
}else if(dr==="init"&&ds){dp.push('this.',this.$$store.init[name],'=value;');
}}dp.push('}');
if(dq.themeable){dp.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dq.inheritable){dp.push('old=this.',this.$$store.theme[name],';');
}
if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="resetThemed"){dp.push('delete this.',this.$$store.theme[name],';');
dp.push('if(this.',this.$$store.init[name],'!==undefined){');
dp.push('computed=this.',this.$$store.init[name],';');
dp.push('this.',this.$$store.useinit[name],'=true;');
dp.push('}');
}else if(dr==="init"){if(ds){dp.push('this.',this.$$store.init[name],'=value;');
}dp.push('computed=this.',this.$$store.theme[name],';');
}else if(dr==="refresh"){dp.push('computed=this.',this.$$store.theme[name],';');
}dp.push('}');
}dp.push('else if(this.',this.$$store.useinit[name],'){');

if(!dq.inheritable){dp.push('old=this.',this.$$store.init[name],';');
}
if(dr==="init"){if(ds){dp.push('computed=this.',this.$$store.init[name],'=value;');
}else{dp.push('computed=this.',this.$$store.init[name],';');
}}else if(dr==="set"||dr==="setRuntime"||dr==="setThemed"||dr==="refresh"){dp.push('delete this.',this.$$store.useinit[name],';');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="refresh"){dp.push('computed=this.',this.$$store.init[name],';');
}}dp.push('}');
if(dr==="set"||dr==="setRuntime"||dr==="setThemed"||dr==="init"){dp.push('else{');

if(dr==="setRuntime"){dp.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dr==="set"){dp.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dr==="setThemed"){dp.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dr==="init"){if(ds){dp.push('computed=this.',this.$$store.init[name],'=value;');
}else{dp.push('computed=this.',this.$$store.init[name],';');
}dp.push('this.',this.$$store.useinit[name],'=true;');
}dp.push('}');
}},__J:function(w,x,name,y){w.push('if(computed===undefined||computed===inherit){');

if(y==="refresh"){w.push('computed=value;');
}else{w.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}w.push('if((computed===undefined||computed===inherit)&&');
w.push('this.',this.$$store.init[name],'!==undefined&&');
w.push('this.',this.$$store.init[name],'!==inherit){');
w.push('computed=this.',this.$$store.init[name],';');
w.push('this.',this.$$store.useinit[name],'=true;');
w.push('}else{');
w.push('delete this.',this.$$store.useinit[name],';}');
w.push('}');
w.push('if(old===computed)return value;');
w.push('if(computed===inherit){');
w.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
w.push('}');
w.push('else if(computed===undefined)');
w.push('delete this.',this.$$store.inherit[name],';');
w.push('else this.',this.$$store.inherit[name],'=computed;');
w.push('var backup=computed;');
if(x.init!==undefined&&y!=="init"){w.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{w.push('if(old===undefined)old=null;');
}w.push('if(computed===undefined||computed==inherit)computed=null;');
},__K:function(cQ,cR,name,cS){if(cS!=="set"&&cS!=="setRuntime"&&cS!=="setThemed"){cQ.push('if(computed===undefined)computed=null;');
}cQ.push('if(old===computed)return value;');
if(cR.init!==undefined&&cS!=="init"){cQ.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cQ.push('if(old===undefined)old=null;');
}},__L:function(V,W,name){if(W.apply){V.push('this.',W.apply,'(computed, old, "',name,'");');
}if(W.event){V.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",W.event,"')){","reg.fireEvent(this, '",W.event,"', qx.event.type.Data, [computed, old]",")}");
}},__M:function(v,name){v.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
v.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
v.push('}');
}}});
})();
(function(){var bi="[Class ",bh="]",bg="static",bf="extend",be="qx.Class",bd="singleton";
qx.Bootstrap.define(be,{statics:{define:function(name,bx){if(!bx){var bx={};
}if(bx.include&&!(bx.include instanceof Array)){bx.include=[bx.include];
}if(bx.implement&&!(bx.implement instanceof Array)){bx.implement=[bx.implement];
}if(!bx.hasOwnProperty(bf)&&!bx.type){bx.type=bg;
}{};
var bz=this.__S(name,bx.type,bx.extend,bx.statics,bx.construct,bx.destruct);
if(bx.extend){if(bx.properties){this.__U(bz,bx.properties,true);
}if(bx.members){this.__W(bz,bx.members,true,true,false);
}if(bx.events){this.__T(bz,bx.events,true);
}if(bx.include){for(var i=0,l=bx.include.length;i<l;i++){this.__ba(bz,bx.include[i],false);
}}}if(bx.settings){for(var by in bx.settings){qx.core.Setting.define(by,bx.settings[by]);
}}if(bx.variants){for(var by in bx.variants){qx.core.Variant.define(by,bx.variants[by].allowedValues,bx.variants[by].defaultValue);
}}if(bx.implement){for(var i=0,l=bx.implement.length;i<l;i++){this.__Y(bz,bx.implement[i]);
}}{};
if(bx.defer){bx.defer.self=bz;
bx.defer(bz,bz.prototype,{add:function(name,k){var m={};
m[name]=k;
qx.Class.__U(bz,m,true);
}});
}return bz;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(V,W){{};
qx.Class.__ba(V,W,false);
},patch:function(bv,bw){{};
qx.Class.__ba(bv,bw,true);
},isSubClassOf:function(v,w){if(!v){return false;
}
if(v==w){return true;
}
if(v.prototype instanceof w){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(n){var o=[];

while(n){if(n.$$properties){o.push.apply(o,qx.Bootstrap.getKeys(n.$$properties));
}n=n.superclass;
}return o;
},getByProperty:function(E,name){while(E){if(E.$$properties&&E.$$properties[name]){return E;
}E=E.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(G,H){return G.$$includes&&G.$$includes.indexOf(H)!==-1;
},getByMixin:function(g,h){var j,i,l;

while(g){if(g.$$includes){j=g.$$flatIncludes;

for(i=0,l=j.length;i<l;i++){if(j[i]===h){return g;
}}}g=g.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bA,bB){return bA.$$implements&&bA.$$implements.indexOf(bB)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bj){var bk=[];

while(bj){if(bj.$$implements){bk.push.apply(bk,bj.$$flatImplements);
}bj=bj.superclass;
}return bk;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(d,e){var f=d.constructor;

if(this.hasInterface(f,e)){return true;
}
try{qx.Interface.assertObject(d,e);
return true;
}catch(B){}
try{qx.Interface.assert(f,e,false);
return true;
}catch(F){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bi+this.classname+bh;
},$$registry:qx.Bootstrap.$$registry,__O:null,__P:null,__Q:function(){},__R:function(){},__S:function(name,bC,bD,bE,bF,bG){var bL;

if(!bD&&true){bL=bE||{};
qx.Bootstrap.setDisplayNames(bL,name);
}else{bL={};

if(bD){if(!bF){bF=this.__bb();
}bL=this.__bd(bF,name,bC);
qx.Bootstrap.setDisplayName(bF,name,"constructor");
}if(bE){qx.Bootstrap.setDisplayNames(bE,name);
var bM;

for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bM=a[i];
var bI=bE[bM];
{bL[bM]=bI;
};
}}}var bK=qx.Bootstrap.createNamespace(name,bL,false);
bL.name=bL.classname=name;
bL.basename=bK;
bL.$$type="Class";

if(bC){bL.$$classtype=bC;
}if(!bL.hasOwnProperty("toString")){bL.toString=this.genericToString;
}
if(bD){var bN=bD.prototype;
var bH=this.__bc();
bH.prototype=bN;
var bJ=new bH;
bL.prototype=bJ;
bJ.name=bJ.classname=name;
bJ.basename=bK;
bF.base=bL.superclass=bD;
bF.self=bL.constructor=bJ.constructor=bL;
if(bG){{};
bL.$$destructor=bG;
qx.Bootstrap.setDisplayName(bG,name,"destruct");
}}this.$$registry[name]=bL;
return bL;
},__T:function(bl,bm,bn){var bo,bo;
{};

if(bl.$$events){for(var bo in bm){bl.$$events[bo]=bm[bo];
}}else{bl.$$events=bm;
}},__U:function(Q,R,S){var U;

if(S===undefined){S=false;
}var T=!!Q.$$propertiesAttached;

for(var name in R){U=R[name];
{};
U.name=name;
if(!U.refine){if(Q.$$properties===undefined){Q.$$properties={};
}Q.$$properties[name]=U;
}if(U.init!==undefined){Q.prototype["$$init_"+name]=U.init;
}if(U.event!==undefined){var event={};
event[U.event]="qx.event.type.Data";
this.__T(Q,event,S);
}if(U.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(T){qx.core.Property.attachMethods(Q,name,U);
}}},__V:null,__W:function(I,J,K,L,M){var N=I.prototype;
var P,O;
qx.Bootstrap.setDisplayNames(J,I.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(J),l=a.length;i<l;i++){P=a[i];
O=J[P];
{};
if(L!==false&&O instanceof Function&&O.$$type==null){if(M==true){O=this.__X(O,N[P]);
}else{if(N[P]){O.base=N[P];
}O.self=I;
}{};
}N[P]=O;
}},__X:function(b,c){if(c){return function(){var D=b.base;
b.base=c;
var C=b.apply(this,arguments);
b.base=D;
return C;
};
}else{return b;
}},__Y:function(s,t){{};
var u=qx.Interface.flatten([t]);

if(s.$$implements){s.$$implements.push(t);
s.$$flatImplements.push.apply(s.$$flatImplements,u);
}else{s.$$implements=[t];
s.$$flatImplements=u;
}},__ba:function(bq,br,bs){{};

if(this.hasMixin(bq,br)){return;
}var bu=qx.Mixin.flatten([br]);
var bt;

for(var i=0,l=bu.length;i<l;i++){bt=bu[i];
if(bt.$$events){this.__T(bq,bt.$$events,bs);
}if(bt.$$properties){this.__U(bq,bt.$$properties,bs);
}if(bt.$$members){this.__W(bq,bt.$$members,bs,bs,bs);
}}if(bq.$$includes){bq.$$includes.push(br);
bq.$$flatIncludes.push.apply(bq.$$flatIncludes,bu);
}else{bq.$$includes=[br];
bq.$$flatIncludes=bu;
}},__bb:function(){function bp(){arguments.callee.base.apply(this,arguments);
}return bp;
},__bc:function(){return function(){};
},__bd:function(x,name,y){var z;
var A=function(){var r=arguments.callee.constructor;
{};
if(!r.$$propertiesAttached){qx.core.Property.attach(r);
}var q=r.$$original.apply(this,arguments);
if(r.$$includes){var p=r.$$flatIncludes;

for(var i=0,l=p.length;i<l;i++){if(p[i].$$constructor){p[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return q;
};
{};
if(y===bd){A.getInstance=this.getInstance;
}A.$$original=x;
x.wrapper=A;
return A;
}},defer:function(){var X,Y,ba;
{};
}});
})();
(function(){var p="qx.client",o="on",n="function",m="mousedown",l="qx.bom.Event",k="return;",j="mouseover",i="HTMLEvents";
qx.Class.define(l,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(q,r,s){q.attachEvent(o+r,s);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(t,u,v){try{t.detachEvent(o+u,v);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(f,g,h){f.removeEventListener(g,h,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(p,{"mshtml":function(e){if(e.type===j){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(p,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==m&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(C){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(a){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(b,c){if(document.createEventObject){var d=document.createEventObject();
return b.fireEvent(o+c,d);
}else{var d=document.createEvent(i);
d.initEvent(c,true,true);
return !b.dispatchEvent(d);
}},supportsEvent:qx.core.Variant.select(p,{"webkit":function(A,B){return A.hasOwnProperty(o+B);
},"default":function(w,x){var y=o+x;
var z=(y in w);

if(!z){z=typeof w[y]==n;

if(!z&&w.setAttribute){w.setAttribute(y,k);
z=typeof w[y]==n;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var co="|bubble",cn="|capture",cm="|",cl="_",ck="unload",cj="UNKNOWN_",ci="DOM_",ch="c",cg="__bj",cf="WIN_",cc="capture",ce="qx.event.Manager",cd="__bi",cb="QX_";
qx.Class.define(ce,{extend:Object,construct:function(cp,cq){this.__be=cp;
this.__bf=qx.core.ObjectRegistry.toHashCode(cp);
this.__bg=cq;
if(cp.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cp,ck,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cp,ck,arguments.callee);
self.dispose();
}));
}this.__bh={};
this.__bi={};
this.__bj={};
this.__bk={};
},statics:{__bl:0,getNextUniqueId:function(){return (this.__bl++).toString(36);
}},members:{__bg:null,__bh:null,__bj:null,__bm:null,__bi:null,__bk:null,__be:null,__bf:null,getWindow:function(){return this.__be;
},getWindowId:function(){return this.__bf;
},getHandler:function(c){var d=this.__bi[c.classname];

if(d){return d;
}return this.__bi[c.classname]=new c(this);
},getDispatcher:function(a){var b=this.__bj[a.classname];

if(b){return b;
}return this.__bj[a.classname]=new a(this,this.__bg);
},getListeners:function(n,o,p){var q=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var s=this.__bh[q];

if(!s){return null;
}var t=o+(p?cn:co);
var r=s[t];
return r?r.concat():null;
},serializeListeners:function(D){var K=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var M=this.__bh[K];
var I=[];

if(M){var G,L,E,H,J;

for(var F in M){G=F.indexOf(cm);
L=F.substring(0,G);
E=F.charAt(G+1)==ch;
H=M[F];

for(var i=0,l=H.length;i<l;i++){J=H[i];
I.push({self:J.context,handler:J.handler,type:L,capture:E});
}}}return I;
},toggleAttachedEvents:function(u,v){var A=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var C=this.__bh[A];

if(C){var x,B,w,y;

for(var z in C){x=z.indexOf(cm);
B=z.substring(0,x);
w=z.charCodeAt(x+1)===99;
y=C[z];

if(v){this.__bn(u,B,w);
}else{this.__bo(u,B,w);
}}}},hasListener:function(bt,bu,bv){{};
var bw=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var by=this.__bh[bw];

if(!by){return false;
}var bz=bu+(bv?cn:co);
var bx=by[bz];
return bx&&bx.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__bh[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?cn:co);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__bn(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__bl++).toString(36)});
}},addListener:function(bi,bj,bk,self,bl){var bp;
{};
var bq=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bs=this.__bh[bq];

if(!bs){bs=this.__bh[bq]={};
}var bo=bj+(bl?cn:co);
var bn=bs[bo];

if(!bn){bn=bs[bo]=[];
}if(bn.length===0){this.__bn(bi,bj,bl);
}var br=(qx.event.Manager.__bl++).toString(36);
var bm={handler:bk,context:self,unique:br};
bn.push(bm);
return bo+cm+br;
},findHandler:function(N,O){var Y=false,R=false,ba=false;
var X;

if(N.nodeType===1){Y=true;
X=ci+N.tagName.toLowerCase()+cl+O;
}else if(N==this.__be){R=true;
X=cf+O;
}else if(N.classname){ba=true;
X=cb+N.classname+cl+O;
}else{X=cj+N+cl+O;
}var T=this.__bk;

if(T[X]){return T[X];
}var W=this.__bg.getHandlers();
var S=qx.event.IEventHandler;
var U,V,Q,P;

for(var i=0,l=W.length;i<l;i++){U=W[i];
Q=U.SUPPORTED_TYPES;

if(Q&&!Q[O]){continue;
}P=U.TARGET_CHECK;

if(P){if(!Y&&P===S.TARGET_DOMNODE){continue;
}else if(!R&&P===S.TARGET_WINDOW){continue;
}else if(!ba&&P===S.TARGET_OBJECT){continue;
}}V=this.getHandler(W[i]);

if(U.IGNORE_CAN_HANDLE||V.canHandleEvent(N,O)){T[X]=V;
return V;
}}return null;
},__bn:function(cr,cs,ct){var cu=this.findHandler(cr,cs);

if(cu){cu.registerEvent(cr,cs,ct);
return;
}{};
},removeListener:function(bQ,bR,bS,self,bT){var bX;
{};
var bY=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);
var ca=this.__bh[bY];

if(!ca){return false;
}var bU=bR+(bT?cn:co);
var bV=ca[bU];

if(!bV){return false;
}var bW;

for(var i=0,l=bV.length;i<l;i++){bW=bV[i];

if(bW.handler===bS&&bW.context===self){qx.lang.Array.removeAt(bV,i);

if(bV.length==0){this.__bo(bQ,bR,bT);
}return true;
}}return false;
},removeListenerById:function(bE,bF){var bL;
{};
var bJ=bF.split(cm);
var bO=bJ[0];
var bG=bJ[1].charCodeAt(0)==99;
var bN=bJ[2];
var bM=bE.$$hash||qx.core.ObjectRegistry.toHashCode(bE);
var bP=this.__bh[bM];

if(!bP){return false;
}var bK=bO+(bG?cn:co);
var bI=bP[bK];

if(!bI){return false;
}var bH;

for(var i=0,l=bI.length;i<l;i++){bH=bI[i];

if(bH.unique===bN){qx.lang.Array.removeAt(bI,i);

if(bI.length==0){this.__bo(bE,bO,bG);
}return true;
}}return false;
},removeAllListeners:function(bb){var bf=bb.$$hash||qx.core.ObjectRegistry.toHashCode(bb);
var bh=this.__bh[bf];

if(!bh){return false;
}var bd,bg,bc;

for(var be in bh){if(bh[be].length>0){bd=be.split(cm);
bg=bd[0];
bc=bd[1]===cc;
this.__bo(bb,bg,bc);
}}delete this.__bh[bf];
return true;
},__bo:function(bA,bB,bC){var bD=this.findHandler(bA,bB);

if(bD){bD.unregisterEvent(bA,bB,bC);
return;
}{};
},dispatchEvent:function(e,event){var k;
{};
var m=event.getType();

if(!event.getBubbles()&&!this.hasListener(e,m)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(e);
}var j=this.__bg.getDispatchers();
var h;
var g=false;

for(var i=0,l=j.length;i<l;i++){h=this.getDispatcher(j[i]);
if(h.canDispatchEvent(e,event,m)){h.dispatchEvent(e,event,m);
g=true;
break;
}}
if(!g){qx.log.Logger.error(this,"No dispatcher can handle event of type "+m+" on "+e);
return true;
}var f=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !f;
},dispose:function(){this.__bg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cd);
qx.util.DisposeUtil.disposeMap(this,cg);
this.__bh=this.__be=this.__bm=null;
this.__bg=this.__bk=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(c){return !!(c&&c.nodeType!=null);
},isElement:function(b){return !!(b&&b.nodeType===this.ELEMENT);
},isDocument:function(r){return !!(r&&r.nodeType===this.DOCUMENT);
},isText:function(o){return !!(o&&o.nodeType===this.TEXT);
},isWindow:function(s){return !!(s&&s.history&&s.location&&s.document);
},isNodeName:function(d,e){if(!e||!d||!d.nodeName){return false;
}return e.toLowerCase()==qx.dom.Node.getName(d);
},getName:function(q){if(!q||!q.nodeName){return null;
}return q.nodeName.toLowerCase();
},getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var i,a=[],g=f.childNodes,length=g.length;

for(i=0;i<length;i++){a[i]=this.getText(g[i]);
}return a.join(h);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="[object Array]",p="qx.lang.Array",o="qx",n="number",m="string";
qx.Class.define(p,{statics:{toArray:function(bk,bl){return this.cast(bk,Array,bl);
},cast:function(T,U,V){if(T.constructor===U){return T;
}
if(qx.Class.hasInterface(T,qx.data.IListData)){var T=T.toArray();
}var W=new U;
if(qx.core.Variant.isSet(r,s)){if(T.item){for(var i=V||0,l=T.length;i<l;i++){W.push(T[i]);
}return W;
}}if(Object.prototype.toString.call(T)===q&&V==null){W.push.apply(W,T);
}else{W.push.apply(W,Array.prototype.slice.call(T,V||0));
}return W;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(bp){if(qx.core.Variant.isSet(r,s)){if(bp.item){var bq=[];

for(var i=0,l=bp.length;i<l;i++){bq[i]=bp[i];
}return bq;
}}return Array.prototype.slice.call(bp,0);
},fromShortHand:function(Q){var S=Q.length;
var R=qx.lang.Array.clone(Q);
switch(S){case 1:R[1]=R[2]=R[3]=R[0];
break;
case 2:R[2]=R[0];
case 3:R[3]=R[1];
}return R;
},clone:function(P){return P.concat();
},insertAt:function(f,g,i){f.splice(i,0,g);
return f;
},insertBefore:function(t,u,v){var i=t.indexOf(v);

if(i==-1){t.push(u);
}else{t.splice(i,0,u);
}return t;
},insertAfter:function(bf,bg,bh){var i=bf.indexOf(bh);

if(i==-1||i==(bf.length-1)){bf.push(bg);
}else{bf.splice(i+1,0,bg);
}return bf;
},removeAt:function(bi,i){return bi.splice(i,1)[0];
},removeAll:function(bo){bo.length=0;
return this;
},append:function(J,K){{};
Array.prototype.push.apply(J,K);
return J;
},exclude:function(bb,bc){{};

for(var i=0,be=bc.length,bd;i<be;i++){bd=bb.indexOf(bc[i]);

if(bd!=-1){bb.splice(bd,1);
}}return bb;
},remove:function(L,M){var i=L.indexOf(M);

if(i!=-1){L.splice(i,1);
return M;
}},contains:function(bm,bn){return bm.indexOf(bn)!==-1;
},equals:function(b,c){var length=b.length;

if(length!==c.length){return false;
}
for(var i=0;i<length;i++){if(b[i]!==c[i]){return false;
}}return true;
},sum:function(d){var e=0;

for(var i=0,l=d.length;i<l;i++){e+=d[i];
}return e;
},max:function(X){{};
var i,ba=X.length,Y=X[0];

for(i=1;i<ba;i++){if(X[i]>Y){Y=X[i];
}}return Y===undefined?null:Y;
},min:function(h){{};
var i,k=h.length,j=h[0];

for(i=1;i<k;i++){if(h[i]<j){j=h[i];
}}return j===undefined?null:j;
},unique:function(w){var G=[],y={},B={},D={};
var C,x=0;
var H=o+qx.lang.Date.now();
var z=false,F=false,I=false;
for(var i=0,E=w.length;i<E;i++){C=w[i];
if(C===null){if(!z){z=true;
G.push(C);
}}else if(C===undefined){}else if(C===false){if(!F){F=true;
G.push(C);
}}else if(C===true){if(!I){I=true;
G.push(C);
}}else if(typeof C===m){if(!y[C]){y[C]=1;
G.push(C);
}}else if(typeof C===n){if(!B[C]){B[C]=1;
G.push(C);
}}else{A=C[H];

if(A==null){A=C[H]=x++;
}
if(!D[A]){D[A]=C;
G.push(C);
}}}for(var A in D){try{delete D[A][H];
}catch(bj){try{D[A][H]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+A+"]["+H+"]");
}}}return G;
}}});
})();
(function(){var o="()",n=".",m=".prototype.",l='anonymous()',k="qx.lang.Function",j=".constructor()";
qx.Class.define(k,{statics:{getCaller:function(x){return x.caller?x.caller.callee:x.callee.caller;
},getName:function(t){if(t.displayName){return t.displayName;
}
if(t.$$original||t.wrapper||t.classname){return t.classname+j;
}
if(t.$$mixin){for(var v in t.$$mixin.$$members){if(t.$$mixin.$$members[v]==t){return t.$$mixin.name+m+v+o;
}}for(var v in t.$$mixin){if(t.$$mixin[v]==t){return t.$$mixin.name+n+v+o;
}}}
if(t.self){var w=t.self.constructor;

if(w){for(var v in w.prototype){if(w.prototype[v]==t){return w.classname+m+v+o;
}}for(var v in w){if(w[v]==t){return w.classname+n+v+o;
}}}}var u=t.toString().match(/function\s*(\w*)\s*\(.*/);

if(u&&u.length>=1&&u[1]){return u[1]+o;
}return l;
},globalEval:function(D){if(window.execScript){return window.execScript(D);
}else{return eval.call(window,D);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(c,d){{};
if(!d){return c;
}if(!(d.self||d.args||d.delay!=null||d.periodical!=null||d.attempt)){return c;
}return function(event){{};
var q=qx.lang.Array.fromArguments(arguments);
if(d.args){q=d.args.concat(q);
}
if(d.delay||d.periodical){var p=qx.event.GlobalError.observeMethod(function(){return c.apply(d.self||this,q);
});

if(d.delay){return window.setTimeout(p,d.delay);
}
if(d.periodical){return window.setInterval(p,d.periodical);
}}else if(d.attempt){var r=false;

try{r=c.apply(d.self||this,q);
}catch(s){}return r;
}else{return c.apply(d.self||this,q);
}};
},bind:function(B,self,C){return this.create(B,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(g,self,h){if(arguments.length<3){return function(event){return g.call(self||this,event||window.event);
};
}else{var i=qx.lang.Array.fromArguments(arguments,2);
return function(event){var H=[event||window.event];
H.push.apply(H,i);
g.apply(self||this,H);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(E,F,self,G){return this.create(E,{delay:F,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(y,z,self,A){return this.create(y,{periodical:z,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var v="qx.event.Registration";
qx.Class.define(v,{statics:{__bp:{},getManager:function(B){if(B==null){{};
B=window;
}else if(B.nodeType){B=qx.dom.Node.getWindow(B);
}else if(!qx.dom.Node.isWindow(B)){B=window;
}var D=B.$$hash||qx.core.ObjectRegistry.toHashCode(B);
var C=this.__bp[D];

if(!C){C=new qx.event.Manager(B,this);
this.__bp[D]=C;
}return C;
},removeManager:function(N){var O=N.getWindowId();
delete this.__bp[O];
},addListener:function(x,y,z,self,A){return this.getManager(x).addListener(x,y,z,self,A);
},removeListener:function(k,l,m,self,n){return this.getManager(k).removeListener(k,l,m,self,n);
},removeListenerById:function(L,M){return this.getManager(L).removeListenerById(L,M);
},removeAllListeners:function(w){return this.getManager(w).removeAllListeners(w);
},hasListener:function(E,F,G){return this.getManager(E).hasListener(E,F,G);
},serializeListeners:function(i){return this.getManager(i).serializeListeners(i);
},createEvent:function(H,I,J){{};
if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);

if(!K){return;
}J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(u,event){return this.getManager(u).dispatchEvent(u,event);
},fireEvent:function(o,p,q,r){var s;
{};
var t=this.createEvent(p,q||null,r);
return this.getManager(o).dispatchEvent(o,t);
},fireNonBubblingEvent:function(c,d,e,f){{};
var g=this.getManager(c);

if(!g.hasListener(c,d,false)){return true;
}var h=this.createEvent(d,e||null,f);
return g.dispatchEvent(c,h);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bq:[],addHandler:function(j){{};
this.__bq.push(j);
this.__bq.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bq;
},__br:[],addDispatcher:function(P,Q){{};
this.__br.push(P);
this.__br.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__br;
}}});
})();
(function(){var n="$$hash",m="qx.core.ObjectRegistry";
qx.Class.define(m,{statics:{inShutDown:false,__bs:{},__bt:0,__bu:[],register:function(u){var x=this.__bs;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__bu;

if(v.length>0){w=v.pop();
}else{w=(this.__bt++).toString(36);
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(r){var s=r.$$hash;

if(s==null){return;
}var t=this.__bs;

if(t&&t[s]){delete t[s];
this.__bu.push(s);
}try{delete r.$$hash;
}catch(j){if(r.removeAttribute){r.removeAttribute(n);
}}},toHashCode:function(o){{};
var q=o.$$hash;

if(q!=null){return q;
}var p=this.__bu;

if(p.length>0){q=p.pop();
}else{q=(this.__bt++).toString(36);
}return o.$$hash=q;
},clearHashCode:function(y){{};
var z=y.$$hash;

if(z!=null){this.__bu.push(z);
try{delete y.$$hash;
}catch(h){if(y.removeAttribute){y.removeAttribute(n);
}}}},fromHashCode:function(g){return this.__bs[g]||null;
},shutdown:function(){this.inShutDown=true;
var d=this.__bs;
var f=[];

for(var e in d){f.push(e);
}f.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var c,i=0,l=f.length;

while(true){try{for(;i<l;i++){e=f[i];
c=d[e];

if(c&&c.dispose){c.dispose();
}}}catch(k){qx.Bootstrap.error(this,"Could not dispose object "+c.toString()+": "+k);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bs;
},getRegistry:function(){return this.__bs;
}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(c){this.__bz=[];
this.setMaxMessages(c||50);
},members:{__bA:0,__bz:null,__bB:50,setMaxMessages:function(b){this.__bB=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bB;
},process:function(h){var i=this.getMaxMessages();

if(this.__bz.length<i){this.__bz.push(h);
}else{this.__bz[this.__bA++]=h;

if(this.__bA>=i){this.__bA=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(d){if(d>this.__bz.length){d=this.__bz.length;
}
if(this.__bz.length==this.getMaxMessages()){var f=this.__bA-1;
}else{f=this.__bz.length-1;
}var e=f-d+1;

if(e<0){e+=this.__bz.length;
}var g;

if(e<=f){g=this.__bz.slice(e,f+1);
}else{g=this.__bz.slice(e,this.__bz.length).concat(this.__bz.slice(0,f+1));
}return g;
},clearHistory:function(){this.__bz=[];
this.__bA=0;
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",G="number",F="stringify",E="]",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",x="qx.log.Logger",s=")}",t="#",q="warn",r="document",o="{...(",p="[",m="text[",n="[...(",u="\n",v=")]",w="object";
qx.Class.define(x,{statics:{__bC:A,setLevel:function(J){this.__bC=J;
},getLevel:function(){return this.__bC;
},setTreshold:function(bD){this.__bF.setMaxMessages(bD);
},getTreshold:function(){return this.__bF.getMaxMessages();
},__bD:{},__bE:0,register:function(bI){if(bI.$$id){return;
}var bJ=this.__bE++;
this.__bD[bJ]=bI;
bI.$$id=bJ;
var bK=this.__bF.getAllLogEvents();

for(var i=0,l=bK.length;i<l;i++){bI.process(bK[i]);
}},unregister:function(bG){var bH=bG.$$id;

if(bH==null){return;
}delete this.__bD[bH];
delete bG.$$id;
},debug:function(H,I){qx.log.Logger.__bH(A,arguments);
},info:function(ba,bb){qx.log.Logger.__bH(e,arguments);
},warn:function(bj,bk){qx.log.Logger.__bH(q,arguments);
},error:function(bE,bF){qx.log.Logger.__bH(j,arguments);
},trace:function(bl){qx.log.Logger.__bH(e,[bl,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(bm,bn){var bo;
{};
},deprecatedClassWarning:function(K,L){var M;
{};
},deprecatedEventWarning:function(N,event,O){var P;
{};
},deprecatedMixinWarning:function(bg,bh){var bi;
{};
},deprecatedConstantWarning:function(bp,bq,br){var self,bs;
{};
},clear:function(){this.__bF.clearHistory();
},__bF:new qx.log.appender.RingBuffer(50),__bG:{debug:0,info:1,warn:2,error:3},__bH:function(bt,bu){var bz=this.__bG;

if(bz[bt]<bz[this.__bC]){return;
}var bw=bu.length<2?null:bu[0];
var by=bw?1:0;
var bv=[];

for(var i=by,l=bu.length;i<l;i++){bv.push(this.__bJ(bu[i],true));
}var bA=new Date;
var bB={time:bA,offset:bA-qx.Bootstrap.LOADSTART,level:bt,items:bv,win:window};
if(bw){if(bw instanceof qx.core.Object){bB.object=bw.$$hash;
}else if(bw.$$type){bB.clazz=bw;
}}this.__bF.process(bB);
var bC=this.__bD;

for(var bx in bC){bC[bx].process(bB);
}},__bI:function(be){if(be===undefined){return y;
}else if(be===null){return b;
}
if(be.$$type){return a;
}var bf=typeof be;

if(bf===C||bf==c||bf===G||bf===B){return bf;
}else if(bf===w){if(be.nodeType){return k;
}else if(be.classname){return d;
}else if(be instanceof Array){return g;
}else if(be instanceof Error){return j;
}else{return z;
}}
if(be.toString){return F;
}return D;
},__bJ:function(Q,R){var Y=this.__bI(Q);
var U=D;
var T=[];

switch(Y){case b:case y:U=Y;
break;
case c:case G:case B:U=Q;
break;
case k:if(Q.nodeType===9){U=r;
}else if(Q.nodeType===3){U=m+Q.nodeValue+E;
}else if(Q.nodeType===1){U=Q.nodeName.toLowerCase();

if(Q.id){U+=t+Q.id;
}}else{U=k;
}break;
case C:U=qx.lang.Function.getName(Q)||Y;
break;
case d:U=Q.basename+p+Q.$$hash+E;
break;
case a:case F:U=Q.toString();
break;
case j:T=qx.dev.StackTrace.getStackTraceFromError(Q);
U=Q.toString();
break;
case g:if(R){U=[];

for(var i=0,l=Q.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}U.push(this.__bJ(Q[i],false));
}}else{U=n+Q.length+v;
}break;
case z:if(R){var S;
var X=[];

for(var W in Q){X.push(W);
}X.sort();
U=[];

for(var i=0,l=X.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}W=X[i];
S=this.__bJ(Q[W],false);
S.key=W;
U.push(S);
}}else{var V=0;

for(var W in Q){V++;
}U=o+V+s;
}break;
}return {type:Y,text:U,trace:T};
}},defer:function(bc){var bd=qx.Bootstrap.$$logs;

for(var i=0;i<bd.length;i++){this.__bH(bd[i][0],bd[i][1]);
}qx.Bootstrap.debug=bc.debug;
qx.Bootstrap.info=bc.info;
qx.Bootstrap.warn=bc.warn;
qx.Bootstrap.error=bc.error;
qx.Bootstrap.trace=bc.trace;
}});
})();
(function(){var L="set",K="get",J="reset",I="qx.core.Object",H="]",G="[",F="$$user_",E="Object";
qx.Class.define(I,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:E},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+G+this.$$hash+H;
},base:function(O,P){{};

if(arguments.length===1){return O.callee.base.call(this);
}else{return O.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(ba){return ba.callee.self;
},clone:function(){var bd=this.constructor;
var bc=new bd;
var bf=qx.Class.getProperties(bd);
var be=qx.core.Property.$$store.user;
var bg=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bf.length;i<l;i++){name=bf[i];

if(this.hasOwnProperty(be[name])){bc[bg[name]](this[be[name]]);
}}return bc;
},set:function(g,h){var k=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(g)){if(!this[k[g]]){if(this[L+qx.Bootstrap.firstUp(g)]!=undefined){this[L+qx.Bootstrap.firstUp(g)](h);
return;
}{};
}return this[k[g]](h);
}else{for(var j in g){if(!this[k[j]]){if(this[L+qx.Bootstrap.firstUp(j)]!=undefined){this[L+qx.Bootstrap.firstUp(j)](g[j]);
continue;
}{};
}this[k[j]](g[j]);
}return this;
}},get:function(q){var r=qx.core.Property.$$method.get;

if(!this[r[q]]){if(this[K+qx.Bootstrap.firstUp(q)]!=undefined){return this[K+qx.Bootstrap.firstUp(q)]();
}{};
}return this[r[q]]();
},reset:function(bx){var by=qx.core.Property.$$method.reset;

if(!this[by[bx]]){if(this[J+qx.Bootstrap.firstUp(bx)]!=undefined){this[J+qx.Bootstrap.firstUp(bx)]();
return;
}{};
}this[by[bx]]();
},__bK:qx.event.Registration,addListener:function(bl,bm,self,bn){if(!this.$$disposed){return this.__bK.addListener(this,bl,bm,self,bn);
}return null;
},addListenerOnce:function(br,bs,self,bt){var bu=function(e){bs.call(self||this,e);
this.removeListener(br,bu,this,bt);
};
return this.addListener(br,bu,this,bt);
},removeListener:function(bo,bp,self,bq){if(!this.$$disposed){return this.__bK.removeListener(this,bo,bp,self,bq);
}return false;
},removeListenerById:function(M){if(!this.$$disposed){return this.__bK.removeListenerById(this,M);
}return false;
},hasListener:function(bv,bw){return this.__bK.hasListener(this,bv,bw);
},dispatchEvent:function(f){if(!this.$$disposed){return this.__bK.dispatchEvent(this,f);
}return true;
},fireEvent:function(m,n,o){if(!this.$$disposed){return this.__bK.fireEvent(this,m,n,o);
}return true;
},fireNonBubblingEvent:function(b,c,d){if(!this.$$disposed){return this.__bK.fireNonBubblingEvent(this,b,c,d);
}return true;
},fireDataEvent:function(V,W,X,Y){if(!this.$$disposed){if(X===undefined){X=null;
}return this.__bK.fireNonBubblingEvent(this,V,qx.event.type.Data,[W,X,!!Y]);
}return true;
},__bL:null,setUserData:function(bj,bk){if(!this.__bL){this.__bL={};
}this.__bL[bj]=bk;
},getUserData:function(s){if(!this.__bL){return null;
}var t=this.__bL[s];
return t===undefined?null:t;
},__bM:qx.log.Logger,debug:function(bh){this.__bM.debug(this,bh);
},info:function(bi){this.__bM.info(this,bi);
},warn:function(D){this.__bM.warn(this,D);
},error:function(bz){this.__bM.error(this,bz);
},trace:function(){this.__bM.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var T,R;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var S=this.constructor;
var Q;

while(S.superclass){if(S.$$destructor){S.$$destructor.call(this);
}if(S.$$includes){Q=S.$$flatIncludes;

for(var i=0,l=Q.length;i<l;i++){if(Q[i].$$destructor){Q[i].$$destructor.call(this);
}}}S=S.superclass;
}var U=qx.Class.getProperties(this.constructor);

for(var i=0,l=U.length;i<l;i++){delete this[F+U[i]];
}{};
},_disposeFields:function(C){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bb){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,N);
},_disposeMap:function(a){qx.util.DisposeUtil.disposeMap(this,a);
}},settings:{"qx.disposerDebugLevel":0},defer:function(p){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bL=null;
var w=this.constructor;
var A;
var B=qx.core.Property.$$store;
var y=B.user;
var z=B.theme;
var u=B.inherit;
var x=B.useinit;
var v=B.init;

while(w){A=w.$$properties;

if(A){for(var name in A){if(A[name].dispose){this[y[name]]=this[z[name]]=this[u[name]]=this[x[name]]=this[v[name]]=undefined;
}}}w=w.superclass;
}}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(j,k){this.__bN=j||null;
this.__bO=k||window;

if(qx.core.Setting.get(f)===e){if(j&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bP,this);
}
if(!j&&window.onerror){window.onerror=null;
}}},__bP:function(g,h,i){if(this.__bN){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__bN){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return a;
}},handleError:function(c){if(this.__bN){this.__bN.call(this.__bO,c);
}}},defer:function(b){qx.core.Setting.define(f,e);
b.setErrorHandler(null,null);
}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__bQ=false;
this.__bR=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bS:false,onScriptLoaded:function(){this.__bS=true;
var a=qx.event.handler.Application.$$instance;

if(a){a.__bV();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(b,c,d){},unregisterEvent:function(r,s,t){},__bT:null,__bQ:null,__bR:null,__bU:null,__bV:function(){var w=qx.event.handler.Application;
if(!this.__bT&&this.__bQ&&w.__bS){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__bT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__bQ=true;
this.__bV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var x=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bQ=true;
this.__bV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bU){this.__bU=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var h="qx.event.handler.Window";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this._manager=c;
this._window=c.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(n,o,p){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var k=qx.event.handler.Window.SUPPORTED_TYPES;

for(var j in k){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(d,event,e){var h,f;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var j=this._manager.getListeners(d,e,false);

if(j){for(var i=0,l=j.length;i<l;i++){var g=j[i].context||d;
j[i].handler.call(g,event);
}}}},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__bX||null;
},__bW:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__bX=new j;
var h=new Date;
this.__bX.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__bX.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__bY:function(e){var g=this.__bX;

if(g){e.setReturnValue(g.close());
}},__ca:function(){var l=this.__bX;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__bW,k);
qx.event.Registration.addListener(window,a,k.__ca,k);
qx.event.Registration.addListener(window,c,k.__bY,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var l="error",k="Loading...",j="change",i="demobrowser.demo.test.io_HttpRequest",h="content",g="load",f="io_HttpRequest.html",d="abort",c="timeout";
qx.Class.define(i,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
var a=document.getElementById(h);
a.value=k;
var b=new qx.io.HttpRequest;
b.setUrl(f);
b.addListener(j,function(e){var m=e.getData();
qx.log.Logger.debug("Event: readystatechange: "+m);

if(m==4){a.value=this.getResponseText();
}});
b.addListener(g,function(){qx.log.Logger.debug("Event: load");
});
b.addListener(l,function(){qx.log.Logger.debug("Event: error");
});
b.addListener(c,function(){qx.log.Logger.debug("Event: timeout");
});
b.addListener(d,function(){qx.log.Logger.debug("Event: abort");
});
b.send();
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cc:function(){this.QUIRKS_MODE=this.__cd();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cd:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cc();
}});
})();
(function(){var s="qx.lang.Object";
qx.Class.define(s,{statics:{empty:function(d){{};

for(var e in d){if(d.hasOwnProperty(e)){delete d[e];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(J){{};
return J.__count__===0;
}:
function(o){{};

for(var p in o){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(H,I){{};
return H.__count__>=I;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(h){{};
var k=[];
var j=this.getKeys(h);

for(var i=0,l=j.length;i<l;i++){k.push(h[j[i]]);
}return k;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(C,D){{};
return qx.lang.Object.mergeWith(C,D,false);
},merge:function(E,F){{};
var G=arguments.length;

for(var i=1;i<G;i++){qx.lang.Object.mergeWith(E,arguments[i]);
}return E;
},clone:function(a){{};
var b={};

for(var c in a){b[c]=a[c];
}return b;
},invert:function(w){{};
var x={};

for(var y in w){x[w[y].toString()]=y;
}return x;
},getKeyFromValue:function(z,A){{};

for(var B in z){if(z.hasOwnProperty(B)&&z[B]===A){return B;
}}return null;
},contains:function(m,n){{};
return this.getKeyFromValue(m,n)!==null;
},select:function(f,g){{};
return g[f];
},fromArray:function(q){{};
var r={};

for(var i=0,l=q.length;i<l;i++){{};
r[q[i].toString()]=true;
}return r;
}}});
})();
(function(){var o="emulated",n="native",m='"',k="qx.lang.Core",j="\\\\",h="\\\"",g="[object Error]";
qx.Class.define(k,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==g)?o:n,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?n:o,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?n:o,{"native":Array.prototype.lastIndexOf,"emulated":function(A,B){if(B==null){B=this.length-1;
}else if(B<0){B=Math.max(0,this.length+B);
}
for(var i=B;i>=0;i--){if(this[i]===A){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?n:o,{"native":Array.prototype.forEach,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){d.call(e||window,f,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?n:o,{"native":Array.prototype.filter,"emulated":function(p,q){var r=[];
var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){if(p.call(q||window,s,i,this)){r.push(this[i]);
}}}return r;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?n:o,{"native":Array.prototype.map,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){y[i]=w.call(x||window,z,i,this);
}}return y;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?n:o,{"native":Array.prototype.some,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(a.call(b||window,c,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?n:o,{"native":Array.prototype.every,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(!t.call(u||window,v,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?n:o,{"native":String.prototype.quote,"emulated":function(){return m+this.replace(/\\/g,j).replace(/\"/g,h)+m;
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
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__cM:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cN:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cO:function(){var a=qx.lang.Generics.__cM;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cN(c,d);
}}}}},defer:function(Q){Q.__cO();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var m="qx.event.type.Event";
qx.Class.define(m,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(j,k){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!j;
this._cancelable=!!k;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(g){if(g){var h=g;
}else{var h=qx.event.Pool.getInstance().getObject(this.constructor);
}h._type=this._type;
h._target=this._target;
h._currentTarget=this._currentTarget;
h._relatedTarget=this._relatedTarget;
h._originalTarget=this._originalTarget;
h._stopPropagation=this._stopPropagation;
h._bubbles=this._bubbles;
h._preventDefault=this._preventDefault;
h._cancelable=this._cancelable;
return h;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(e){this._type=e;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(f){this._target=f;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(i){this._bubbles=i;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ch:null,__ci:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__ch=d;
this.__ci=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__ch=this.__ch;
c.__ci=this.__ci;
return c;
},getData:function(){return this.__ch;
},getOldData:function(){return this.__ci;
}},destruct:function(){this.__ch=this.__ci=null;
}});
})();
(function(){var bI="get",bH="",bG="[",bF="last",bE="change",bD="]",bC=".",bB="Number",bA="String",bz="set",bX="deepBinding",bW="item",bV="reset",bU="' (",bT="Boolean",bS=").",bR=") to the object '",bQ="Integer",bP="qx.data.SingleValueBinding",bO="No event could be found for the property",bM="PositiveNumber",bN="Binding from '",bK="PositiveInteger",bL="Binding does not exist!",bJ="Date";
qx.Class.define(bP,{statics:{DEBUG_ON:false,__cq:{},bind:function(cu,cv,cw,cx,cy){var cI=this.__cs(cu,cv,cw,cx,cy);
var cD=cv.split(bC);
var cA=this.__cz(cD);
var cH=[];
var cE=[];
var cF=[];
var cB=[];
var cC=cu;
for(var i=0;i<cD.length;i++){if(cA[i]!==bH){cB.push(bE);
}else{cB.push(this.__cu(cC,cD[i]));
}cH[i]=cC;
if(i==cD.length-1){if(cA[i]!==bH){var cL=cA[i]===bF?cC.length-1:cA[i];
var cz=cC.getItem(cL);
this.__cy(cz,cw,cx,cy,cu);
cF[i]=this.__cA(cC,cB[i],cw,cx,cy,cA[i]);
}else{if(cD[i]!=null&&cC[bI+qx.lang.String.firstUp(cD[i])]!=null){var cz=cC[bI+qx.lang.String.firstUp(cD[i])]();
this.__cy(cz,cw,cx,cy,cu);
}cF[i]=this.__cA(cC,cB[i],cw,cx,cy);
}}else{var cJ={index:i,propertyNames:cD,sources:cH,listenerIds:cF,arrayIndexValues:cA,targetObject:cw,targetPropertyChain:cx,options:cy,listeners:cE};
var cG=qx.lang.Function.bind(this.__cr,this,cJ);
cE.push(cG);
cF[i]=cC.addListener(cB[i],cG);
}if(cC[bI+qx.lang.String.firstUp(cD[i])]==null){cC=null;
}else if(cA[i]!==bH){cC=cC[bI+qx.lang.String.firstUp(cD[i])](cA[i]);
}else{cC=cC[bI+qx.lang.String.firstUp(cD[i])]();
}
if(!cC){break;
}}var cK={type:bX,listenerIds:cF,sources:cH,targetListenerIds:cI.listenerIds,targets:cI.targets};
this.__cB(cK,cu,cv,cw,cx);
return cK;
},__cr:function(Y){if(Y.options&&Y.options.onUpdate){Y.options.onUpdate(Y.sources[Y.index],Y.targetObject);
}for(var j=Y.index+1;j<Y.propertyNames.length;j++){var bd=Y.sources[j];
Y.sources[j]=null;

if(!bd){continue;
}bd.removeListenerById(Y.listenerIds[j]);
}var bd=Y.sources[Y.index];
for(var j=Y.index+1;j<Y.propertyNames.length;j++){if(Y.arrayIndexValues[j-1]!==bH){bd=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j-1])](Y.arrayIndexValues[j-1]);
}else{bd=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j-1])]();
}Y.sources[j]=bd;
if(!bd){this.__cv(Y.targetObject,Y.targetPropertyChain);
break;
}if(j==Y.propertyNames.length-1){if(qx.Class.implementsInterface(bd,qx.data.IListData)){var be=Y.arrayIndexValues[j]===bF?bd.length-1:Y.arrayIndexValues[j];
var bb=bd.getItem(be);
this.__cy(bb,Y.targetObject,Y.targetPropertyChain,Y.options,Y.sources[Y.index]);
Y.listenerIds[j]=this.__cA(bd,bE,Y.targetObject,Y.targetPropertyChain,Y.options,Y.arrayIndexValues[j]);
}else{if(Y.propertyNames[j]!=null&&bd[bI+qx.lang.String.firstUp(Y.propertyNames[j])]!=null){var bb=bd[bI+qx.lang.String.firstUp(Y.propertyNames[j])]();
this.__cy(bb,Y.targetObject,Y.targetPropertyChain,Y.options,Y.sources[Y.index]);
}var bc=this.__cu(bd,Y.propertyNames[j]);
Y.listenerIds[j]=this.__cA(bd,bc,Y.targetObject,Y.targetPropertyChain,Y.options);
}}else{if(Y.listeners[j]==null){var ba=qx.lang.Function.bind(this.__cr,this,Y);
Y.listeners.push(ba);
}if(qx.Class.implementsInterface(bd,qx.data.IListData)){var bc=bE;
}else{var bc=this.__cu(bd,Y.propertyNames[j]);
}Y.listenerIds[j]=bd.addListener(bc,Y.listeners[j]);
}}},__cs:function(cc,cd,ce,cf,cg){var ck=cf.split(bC);
var ci=this.__cz(ck);
var cp=[];
var co=[];
var cm=[];
var cl=[];
var cj=ce;
for(var i=0;i<ck.length-1;i++){if(ci[i]!==bH){cl.push(bE);
}else{try{cl.push(this.__cu(cj,ck[i]));
}catch(e){break;
}}cp[i]=cj;
var cn=function(){for(var j=i+1;j<ck.length-1;j++){var cS=cp[j];
cp[j]=null;

if(!cS){continue;
}cS.removeListenerById(cm[j]);
}var cS=cp[i];
for(var j=i+1;j<ck.length-1;j++){var cQ=qx.lang.String.firstUp(ck[j-1]);
if(ci[j-1]!==bH){var cT=ci[j-1]===bF?cS.getLength()-1:ci[j-1];
cS=cS[bI+cQ](cT);
}else{cS=cS[bI+cQ]();
}cp[j]=cS;
if(co[j]==null){co.push(cn);
}if(qx.Class.implementsInterface(cS,qx.data.IListData)){var cR=bE;
}else{try{var cR=qx.data.SingleValueBinding.__cu(cS,ck[j]);
}catch(e){break;
}}cm[j]=cS.addListener(cR,co[j]);
}qx.data.SingleValueBinding.__ct(cc,cd,ce,cf);
};
co.push(cn);
cm[i]=cj.addListener(cl[i],cn);
var ch=qx.lang.String.firstUp(ck[i]);
if(cj[bI+ch]==null){cj=null;
}else if(ci[i]!==bH){cj=cj[bI+ch](ci[i]);
}else{cj=cj[bI+ch]();
}
if(!cj){break;
}}return {listenerIds:cm,targets:cp};
},__ct:function(a,b,c,d){var k=this.__cx(a,b);

if(k!=null){var m=b.substring(b.lastIndexOf(bC)+1,b.length);
if(m.charAt(m.length-1)==bD){var f=m.substring(m.lastIndexOf(bG)+1,m.length-1);
var h=m.substring(0,m.lastIndexOf(bG));
var l=k[bI+qx.lang.String.firstUp(h)]();

if(f==bF){f=l.length-1;
}
if(l!=null){var g=l.getItem(f);
}}else{var g=k[bI+qx.lang.String.firstUp(m)]();
}}this.__cw(c,d,g);
},__cu:function(bp,bq){var br=this.__cD(bp,bq);
if(br==null){if(qx.Class.supportsEvent(bp.constructor,bq)){br=bq;
}else if(qx.Class.supportsEvent(bp.constructor,bE+qx.lang.String.firstUp(bq))){br=bE+qx.lang.String.firstUp(bq);
}else{throw new qx.core.AssertionError(bO,bq);
}}return br;
},__cv:function(bs,bt){var bu=this.__cx(bs,bt);

if(bu!=null){var bv=bt.substring(bt.lastIndexOf(bC)+1,bt.length);
if(bv.charAt(bv.length-1)==bD){this.__cw(bs,bt,null);
return;
}if(bu[bV+qx.lang.String.firstUp(bv)]!=undefined){bu[bV+qx.lang.String.firstUp(bv)]();
}else{bu[bz+qx.lang.String.firstUp(bv)](null);
}}},__cw:function(bh,bi,bj){var bn=this.__cx(bh,bi);

if(bn!=null){var bo=bi.substring(bi.lastIndexOf(bC)+1,bi.length);
if(bo.charAt(bo.length-1)==bD){var bk=bo.substring(bo.lastIndexOf(bG)+1,bo.length-1);
var bm=bo.substring(0,bo.lastIndexOf(bG));
var bl=bn[bI+qx.lang.String.firstUp(bm)]();

if(bk==bF){bk=bl.length-1;
}
if(bl!=null){bl.setItem(bk,bj);
}}else{bn[bz+qx.lang.String.firstUp(bo)](bj);
}}},__cx:function(M,N){var Q=N.split(bC);
var R=M;
for(var i=0;i<Q.length-1;i++){try{var P=Q[i];
if(P.indexOf(bD)==P.length-1){var O=P.substring(P.indexOf(bG)+1,P.length-1);
P=P.substring(0,P.indexOf(bG));
}R=R[bI+qx.lang.String.firstUp(P)]();

if(O!=null){if(O==bF){O=R.length-1;
}R=R.getItem(O);
O=null;
}}catch(C){return null;
}}return R;
},__cy:function(cW,cX,cY,da,db){cW=this.__cC(cW,cX,cY,da);
if(cW==null){this.__cv(cX,cY);
}if(cW!=undefined){try{this.__cw(cX,cY,cW);
if(da&&da.onUpdate){da.onUpdate(db,cX,cW);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(da&&da.onSetFail){da.onSetFail(e);
}else{this.warn("Failed so set value "+cW+" on "+cX+". Error message: "+e);
}}}},__cz:function(bY){var ca=[];
for(var i=0;i<bY.length;i++){var name=bY[i];
if(qx.lang.String.endsWith(name,bD)){var cb=name.substring(name.indexOf(bG)+1,name.indexOf(bD));
if(name.indexOf(bD)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cb!==bF){if(cb==bH||isNaN(parseInt(cb))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bG)!=0){bY[i]=name.substring(0,name.indexOf(bG));
ca[i]=bH;
ca[i+1]=cb;
bY.splice(i+1,0,bW);
i++;
}else{ca[i]=cb;
bY.splice(i,1,bW);
}}else{ca[i]=bH;
}}return ca;
},__cA:function(t,u,v,w,x,y){var z;
{};
var B=function(cM,e){if(cM!==bH){if(cM===bF){cM=t.length-1;
}var cP=t.getItem(cM);
if(cP==undefined){qx.data.SingleValueBinding.__cv(v,w);
}var cN=e.getData().start;
var cO=e.getData().end;

if(cM<cN||cM>cO){return;
}}else{var cP=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+t+" by "+u+" to "+v+" ("+w+")");
qx.log.Logger.debug("Data before conversion: "+cP);
}cP=qx.data.SingleValueBinding.__cC(cP,v,w,x);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cP);
}try{if(cP!=undefined){qx.data.SingleValueBinding.__cw(v,w,cP);
}else{qx.data.SingleValueBinding.__cv(v,w);
}if(x&&x.onUpdate){x.onUpdate(t,v,cP);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(x&&x.onSetFail){x.onSetFail(e);
}else{this.warn("Failed so set value "+cP+" on "+v+". Error message: "+e);
}}};
if(!y){y=bH;
}B=qx.lang.Function.bind(B,t,y);
var A=t.addListener(u,B);
return A;
},__cB:function(o,p,q,r,s){if(this.__cq[p.toHashCode()]===undefined){this.__cq[p.toHashCode()]=[];
}this.__cq[p.toHashCode()].push([o,p,q,r,s]);
},__cC:function(D,E,F,G){if(G&&G.converter){var I;

if(E.getModel){I=E.getModel();
}return G.converter(D,I);
}else{var K=this.__cx(E,F);
var L=F.substring(F.lastIndexOf(bC)+1,F.length);
if(K==null){return D;
}var J=qx.Class.getPropertyDefinition(K.constructor,L);
var H=J==null?bH:J.check;
return this.__cE(D,H);
}},__cD:function(bw,bx){var by=qx.Class.getPropertyDefinition(bw.constructor,bx);

if(by==null){return null;
}return by.event;
},__cE:function(V,W){var X=qx.lang.Type.getClass(V);
if((X==bB||X==bA)&&(W==bQ||W==bK)){V=parseInt(V);
}if((X==bT||X==bB||X==bJ)&&W==bA){V=V+bH;
}if((X==bB||X==bA)&&(W==bB||W==bM)){V=parseFloat(V);
}return V;
},removeBindingFromObject:function(S,T){if(T.type==bX){for(var i=0;i<T.sources.length;i++){if(T.sources[i]){T.sources[i].removeListenerById(T.listenerIds[i]);
}}for(var i=0;i<T.targets.length;i++){if(T.targets[i]){T.targets[i].removeListenerById(T.targetListenerIds[i]);
}}}else{S.removeListenerById(T);
}var U=this.__cq[S.toHashCode()];
if(U!=undefined){for(var i=0;i<U.length;i++){if(U[i][0]==T){qx.lang.Array.remove(U,U[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dc){{};
var dd=this.__cq[dc.toHashCode()];

if(dd!=undefined){for(var i=dd.length-1;i>=0;i--){this.removeBindingFromObject(dc,dd[i][0]);
}}},getAllBindingsForObject:function(n){if(this.__cq[n.toHashCode()]===undefined){this.__cq[n.toHashCode()]=[];
}return this.__cq[n.toHashCode()];
},removeAllBindings:function(){for(var bg in this.__cq){var bf=qx.core.ObjectRegistry.fromHashCode(bg);
if(bf==null){delete this.__cq[bg];
continue;
}this.removeAllBindingsForObject(bf);
}this.__cq={};
},getAllBindings:function(){return this.__cq;
},showBindingInLog:function(cq,cr){var ct;
for(var i=0;i<this.__cq[cq.toHashCode()].length;i++){if(this.__cq[cq.toHashCode()][i][0]==cr){ct=this.__cq[cq.toHashCode()][i];
break;
}}
if(ct===undefined){var cs=bL;
}else{var cs=bN+ct[1]+bU+ct[2]+bR+ct[3]+bU+ct[4]+bS;
}qx.log.Logger.debug(cs);
},showAllBindingsInLog:function(){for(var cV in this.__cq){var cU=qx.core.ObjectRegistry.fromHashCode(cV);

for(var i=0;i<this.__cq[cV].length;i++){this.showBindingInLog(cU,this.__cq[cV][i][0]);
}}}}});
})();
(function(){var r="",q="g",p="0",o='\\$1',n="%",m='-',l="qx.lang.String",k=' ',j='\n',h="undefined";
qx.Class.define(l,{statics:{camelCase:function(f){return f.replace(/\-([a-z])/g,function(d,e){return e.toUpperCase();
});
},hyphenate:function(a){return a.replace(/[A-Z]/g,function(g){return (m+g.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(G){return G.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,k));
},trimLeft:function(t){return t.replace(/^\s+/,r);
},trimRight:function(H){return H.replace(/\s+$/,r);
},trim:function(b){return b.replace(/^\s+|\s+$/g,r);
},startsWith:function(M,N){return M.indexOf(N)===0;
},endsWith:function(E,F){return E.substring(E.length-F.length,E.length)===F;
},repeat:function(O,P){return O.length>=0?new Array(P+1).join(O):r;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===h){K=p;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(x,y){return x.indexOf(y)!=-1;
},format:function(u,v){var w=u;

for(var i=0;i<v.length;i++){w=w.replace(new RegExp(n+(i+1),q),v[i]);
}return w;
},escapeRegexpChars:function(I){return I.replace(/([.*+?^${}()|[\]\/\\])/g,o);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(D){return D.replace(/<\/?[^>]+>/gi,r);
},stripScripts:function(z,A){var C=r;
var B=z.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){C+=arguments[1]+j;
return r;
});

if(A===true){qx.lang.Function.globalEval(C);
}return B;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__cm=b+(c&&c.message?c.message:c);
Error.call(this,this.__cm);
this.__cn=d;
this.__co=c;
},members:{__co:null,__cn:null,__cm:null,toString:function(){return this.__cm;
},getArguments:function(){return this.__cn;
},getSourceException:function(){return this.__co;
}},destruct:function(){this.__co=null;
this.__cn=null;
this.__cm=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__ce=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__ce:null,message:null,getComment:function(){return this.__ce;
},toString:function(){return this.__ce+c+this.message;
}}});
})();
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__cf=qx.dev.StackTrace.getStackTrace();
},members:{__cf:null,getStackTrace:function(){return this.__cf;
}}});
})();
(function(){var p=":",o="qx.client",n="anonymous",m="...",l="qx.dev.StackTrace",k="",j="\n",h="/source/class/",g=".";
qx.Class.define(l,{statics:{getStackTrace:qx.core.Variant.select(o,{"gecko":function(){try{throw new Error();
}catch(a){var x=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(n)>=0){continue;
}var B=u.split(p);

if(B.length!=2){continue;
}var z=B[0];
var s=B[1];
var r=x[i];
var C=r.split(p);
var y=C[0];
var q=C[1];

if(qx.Class.getByName(y)){var w=y;
}else{w=z;
}var A=w+p;

if(s){A+=s+p;
}A+=q;
t[i]=A;
}return t;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var D;

try{D.bar();
}catch(f){var E=this.getStackTraceFromError(f);
qx.lang.Array.removeAt(E,0);
return E;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(o,{"opera":function(F){return [];
},"default":function(V){var bb=[];
var ba=qx.lang.Function.getCaller(V);
var W={};

while(ba){var X=qx.lang.Function.getName(ba);
bb.push(X);

try{ba=ba.caller;
}catch(U){break;
}
if(!ba){break;
}var Y=qx.core.ObjectRegistry.toHashCode(ba);

if(W[Y]){bb.push(m);
break;
}W[Y]=ba;
}return bb;
}}),getStackTraceFromError:qx.core.Variant.select(o,{"gecko":function(G){if(!G.stack){return [];
}var M=/@(.+):(\d+)$/gm;
var H;
var I=[];

while((H=M.exec(G.stack))!=null){var J=H[1];
var L=H[2];
var K=this.__cg(J);
I.push(K+p+L);
}return I;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__cg(bc.sourceURL)+p+bc.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(j);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__cg(O[2]);
P.push(S+p+T);
}}return P;
},"default":function(){return [];
}}),__cg:function(b){var e=h;
var c=b.indexOf(e);
var d=(c==-1)?b:b.substring(c+e.length).replace(/\//g,g).replace(/\.js$/,k);
return d;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(h){return this.getClass(h)==e;
},isNumber:function(a){return (a!==null&&(this.getClass(a)==c||a instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==d||k instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var f="qx.util.ObjectPool",e="Integer";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__cp={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:e,init:Infinity}},members:{__cp:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__cp[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(b){if(!this.__cp){return;
}var c=b.classname;
var d=this.__cp[c];

if(b.$$pooled){throw new Error("Object is already pooled: "+b);
}
if(!d){this.__cp[c]=d=[];
}if(d.length>this.getSize()){if(b.destroy){b.destroy();
}else{b.dispose();
}return;
}b.$$pooled=true;
d.push(b);
}},destruct:function(){var n=this.__cp;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var k="qx.util.DisposeUtil";
qx.Class.define(k,{statics:{disposeFields:function(a,b){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=b.length;i<l;i++){var name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}a[name]=null;
}},disposeObjects:function(s,t){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){s[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(c,d){var f=c[d];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{var e;

for(var i=f.length-1;i>=0;i--){e=f[i];

if(e){e.dispose();
}}}catch(q){throw new Error("The array field: "+d+" of object: "+c+" has non disposable entries: "+q);
}f.length=0;
c[d]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(r){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+r);
}m[n]=null;
},disposeTriggeredBy:function(g,h){var j=h.dispose;
h.dispose=function(){j.call(h);
g.dispose();
};
}}});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
var g={};
f._native=this._cloneNativeEvent(this._native,g);
f._returnValue=this._returnValue;
return f;
},_cloneNativeEvent:function(c,d){d.preventDefault=qx.lang.Function.empty;
return d;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cP:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__cP();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cQ:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cR:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cQ){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__cQ[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cR();
}});
})();
(function(){var C="qx.event.type.Event",B="Boolean",A="String",z="Last-Modified",y="basic",x="GET",w="load",v="text/plain",u="abort",t="http",bg="POST",bf="error",be="timeout",bd="application/xml",bc="X-Requested-With",bb="application/json",ba="text/html",Y="If-Modified-Since",X='Basic ',W="Integer",J="qx.event.type.Data",K="HEAD",H="XMLHttpRequest",I='Authorization',F="change",G="Accept",D="OPTIONS",E="text/javascript",L="",M="PUT",P=':',O="__yY",R="application/x-www-form-urlencoded",Q="DELETE",T="qx.io.HttpRequest",S="no-cache",N="Cache-Control",V="Content-Type",U="Thu, 01 Jan 1970 00:00:00 GMT";
qx.Class.define(T,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__yW={};
if(j!=null){this.setUrl(j);
}},statics:{__yX:{}},events:{"change":J,"timeout":C,"load":C,"error":C,"abort":C},properties:{refresh:{check:B,init:false},data:{nullable:true},method:{check:[x,bg,M,K,Q,D],init:x},async:{check:B,init:true},mime:{check:[v,E,bb,bd,ba],init:v},url:{check:A,init:L},username:{check:A,nullable:true},password:{check:A,nullable:true},auth:{check:[t,y],init:t},timeout:{check:W,nullable:true},cache:{check:B,init:false}},members:{__yY:null,__yW:null,setRequestHeader:function(g,h){this.__yW[g]=h;
},removeRequestHeader:function(c){delete this.__yW[c];
},getRequestHeader:function(e){var f=this.__yW[e];

if(f===undefined){f=null;
}return f;
},getResponseText:function(){var i=this.__yY;

if(i){return i.responseText;
}},getResponseXml:function(){var l=this.__yY;

if(l){return l.responseXML;
}},getResponseHeader:function(bj){var bk=this.__yY;

if(bk){return bk.getResponseHeader(bj);
}},getAllResponseHeaders:function(){var bi=this.__yY;

if(bi){return bi.getAllResponseHeaders();
}},isNotModified:function(){var a=this.__yY;

if(!a){return false;
}var b=a.getResponseHeader(z);
return a.status===304||qx.io.HttpRequest.__yX[this.getUrl()]===b;
},isSuccessful:function(){var r=this.__yY;
return !r||r.isSuccessful();
},getStatusCode:function(){var bh=this.__yY;

if(bh){return bh.status;
}},getStatusText:function(){var s=this.__yY;

if(s){return s.statusText;
}},getReadyState:function(){var k=this.__yY;

if(k){return k.readyState;
}},send:function(){if(this.__yY){if(this.getReadyState()!==4){throw new Error("Request is still pending at ready state: "+this.getReadyState());
}this.__yY.dispose();
}var o=this.__yY=new qx.bom.Request;
o.onreadystatechange=qx.lang.Function.bind(this.__za,this);
o.ontimeout=qx.lang.Function.bind(this.__zb,this);
o.onload=qx.lang.Function.bind(this.__zc,this);
o.onerror=qx.lang.Function.bind(this.__zd,this);
o.onabort=qx.lang.Function.bind(this.__ze,this);
var m=this.getUsername();
var q=this.getPassword();

if(this.getAuth()==y){o.setRequestHeader(I,X+qx.util.Base64.encode(m+P+q));
m=q=null;
}var n=this.getUrl();
o.timeout=this.getTimeout();
o.open(this.getMethod(),n,this.getAsync(),m,q);
if(!this.getCache()){o.setRequestHeader(N,S);
}if(this.getRefresh()){o.setRequestHeader(Y,qx.io.HttpRequest.__yX[n]||U);
}o.setRequestHeader(bc,H);
if(this.getMethod()===bg){o.setRequestHeader(V,R);
}o.setRequestHeader(G,this.getMime());
var p=this.__yW;

for(var name in p){o.setRequestHeader(name,p[name]);
}o.send(this.getData());
},abort:function(){if(this.__yY){this.__yY.abort();
}},__za:qx.event.GlobalError.observeMethod(function(){this.fireDataEvent(F,this.getReadyState());
if(this.getRefresh()&&this.getReadyState()===4&&this.isSuccessful()){var d=this.getResponseHeader(z);

if(d){qx.io.HttpRequest.__yX[this.getUrl()]=d;
}}}),__zb:qx.event.GlobalError.observeMethod(function(){if(this.hasListener(be)){this.fireEvent(be);
}}),__zc:qx.event.GlobalError.observeMethod(function(){if(this.hasListener(w)){this.fireEvent(w);
}}),__zd:qx.event.GlobalError.observeMethod(function(){if(this.hasListener(bf)){this.fireEvent(bf);
}}),__ze:qx.event.GlobalError.observeMethod(function(){if(this.hasListener(u)){this.fireEvent(u);
}})},destruct:function(){this._disposeObjects(O);
this.__yW=null;
}});
})();
(function(){var w="qx.client",v="gecko",u="Content-Type",t="",s="mshtml",r="application/xml",q="qx.bom.Request",p="file:",o="parsererror";
qx.Class.define(q,{extend:qx.core.Object,construct:function(){this.__sp={};
this.__sq=this.__sA();
},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{__sr:null,__ss:null,__sq:null,__st:null,__su:null,__sv:null,__sw:null,__sp:null,readyState:0,responseText:t,responseXML:null,status:0,statusText:t,timeout:0,onreadystatechange:function(){},ontimeout:function(){},onload:function(){},onerror:function(){},onabort:function(){},open:function(c,d,e,f,g){if(e==null){e=true;
}this.__sr=e;
this.__ss=qx.lang.Function.bind(this.__sx,this);
this.__st=qx.lang.Function.bind(this.__sy,this);
this.__sq.onreadystatechange=this.__ss;
if(arguments.length>4){this.__sq.open(c,d,e,f,g);
}else if(arguments.length>3){this.__sq.open(c,d,e,f);
}else{this.__sq.open(c,d,e);
}if(qx.core.Variant.isSet(w,v)){if(!e){this.readyState=qx.bom.Request.OPENED;
this.__sB();
}}},send:function(h){var i=this.__sp;
if(h&&h.nodeType){h=window.XMLSerializer?new XMLSerializer().serializeToString(h):h.xml;

if(!i[u]){i[u]=r;
}}for(var j in i){this.__sq.setRequestHeader(j,i[j]);
}if(this.timeout!=null&&this.timeout>0){this.__su=window.setTimeout(this.__st,this.timeout);
}this.__sq.send(h);
if(qx.core.Variant.isSet(w,v)){if(!this.__sr){this.readyState=qx.bom.Request.OPENED;
this.__sD(this);
while(this.readyState<qx.bom.Request.DONE){this.readyState++;
this.__sB();
if(this.__sv){return;
}}}}},isSuccessful:function(){var status=this.status;
return status===304||(status>=200&&status<300);
},abort:function(){if(this.__su){window.clearTimeout(this.__su);
}this.__sz();
this.onabort();
this.dispose();
},__sx:qx.event.GlobalError.observeMethod(function(){if(qx.core.Variant.isSet(w,v)){if(!this.__sr){return;
}}this.readyState=this.__sq.readyState;
this.__sD();
if(this.__sv){this.readyState=qx.bom.Request.UNSENT;
return ;
}if(this.readyState==qx.bom.Request.DONE&&this.__su){window.clearTimeout(this.__su);
}this.__sB();
if(this.readyState==qx.bom.Request.DONE){this.dispose();
}}),__sy:qx.event.GlobalError.observeMethod(function(){this.__sz();
this.ontimeout();
this.dispose();
}),getAllResponseHeaders:function(){try{return this.__sq.getAllResponseHeaders();
}catch(l){return null;
}},getResponseHeader:function(k){try{return this.__sq.getResponseHeader(k);
}catch(z){return null;
}},setRequestHeader:function(B,C){if(C==null){delete this.__sp[B];
}else{this.__sp[B]=C;
}},removeRequestHeader:function(m,n){delete this.__sp[m];
},getRequestHeader:function(b){return this.__sp[b]||null;
},__sz:function(){this.__sD();
if(this.readyState>qx.bom.Request.UNSENT){this.__sv=true;
}this.__sq.abort();
},__sA:qx.core.Variant.select(w,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),__sB:function(){if(this.__sw===this.readyState){return;
}this.onreadystatechange();
this.__sw=this.readyState;
if(this.readyState===4){if(this.isSuccessful()){this.onload();
}else{this.onerror();
}}},__sC:function(){var a=this.__sq.responseXML;

if(qx.core.Variant.isSet(w,s)){if(a&&!a.documentElement&&this.__sq.getResponseHeader(u).match(/[^\/]+\/[^\+]+\+xml/)){a=new ActiveXObject(qx.xml.Document.DOMDOC);
a.loadXML(this.__sq.responseText);
}if(a&&a.parseError!=0){return null;
}}else if(!a.documentElement||a.documentElement.tagName==o){return null;
}return a;
},__sD:function(){var x=this.__sq;

try{this.responseText=x.responseText;
}catch(A){}
try{this.responseXML=this.__sC();
}catch(D){}
try{this.status=x.status;
}catch(E){}
try{this.statusText=x.statusText;
}catch(y){}if(qx.core.Variant.isSet(w,s)){if(this.status===1223){this.status=204;
}}if(!this.status&&location.protocol===p){this.status=204;
}}},destruct:function(){if(this.__su){window.clearTimeout(this.__su);
this.__su=null;
}if(this.__sq){this.__sq.onreadystatechange=qx.lang.Function.empty;
this.__sq=null;
}this.onreadystatechange=this.onload=this.onerror=this.onabort=null;
this.__ss=null;
this.__sp=null;
}});
})();
(function(){var u="qx.client",t="",s="mshtml",r="'",q="SelectionLanguage",p="qx.xml.Document",o=" />",n="MSXML2.DOMDocument.3.0",m='<\?xml version="1.0" encoding="utf-8"?>\n<',k="MSXML2.XMLHTTP.3.0",f="MSXML2.XMLHTTP.6.0",j=" xmlns='",h="text/xml",e="XPath",d="MSXML2.DOMDocument.6.0",g="HTML";
qx.Class.define(p,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(v){if(v.nodeType===9){return v.documentElement.nodeName!==g;
}else if(v.ownerDocument){return this.isXmlDocument(v.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(u,{"mshtml":function(z,A){var B=new ActiveXObject(this.DOMDOC);
B.setProperty(q,e);

if(A){var C=m;
C+=A;

if(z){C+=j+z+r;
}C+=o;
B.loadXML(C);
}return B;
},"default":function(F,G){return document.implementation.createDocument(F||t,G||t,null);
}}),fromString:qx.core.Variant.select(u,{"mshtml":function(D){var E=qx.xml.Document.create();
E.loadXML(D);
return E;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,h);
}})},defer:function(a){if(qx.core.Variant.isSet(u,s)){var b=[d,n];
var c=[f,k];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(y){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
break;
}}}});
})();
(function(){var c="",b="qx.util.Base64",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
qx.Class.define(b,{statics:{__zf:a,encode:function(d){var j=this.__zf;
var n=c;
var g,f,e;
var k,l,m,h;
var i=0;

do{g=d.charCodeAt(i++);
f=d.charCodeAt(i++);
e=d.charCodeAt(i++);
k=g>>2;
l=((g&3)<<4)|(f>>4);
m=((f&15)<<2)|(e>>6);
h=e&63;

if(isNaN(f)){m=h=64;
}else if(isNaN(e)){h=64;
}n+=j.charAt(k)+j.charAt(l)+j.charAt(m)+j.charAt(h);
}while(i<d.length);
return n;
}}});
})();
(function(){var n="'>",m="[",l=", ",k="</span>",h="<span class='type-",g="</span> ",f="}",e="",d="]",c="{",K="map",J="<span class='object'>",I="]:",H="&gt;",G="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",u=":",v="qx.log.appender.Util",s="&amp;",t="&#39;",q="DIV",r="<span>",o="&quot;",p="<span class='type-key'>",w="</span>:<span class='type-",x="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(v,{statics:{toHtml:function(ba){var bk=[];
var bh,bj,bc,be;
bk.push(B,this.formatOffset(ba.offset,6),g);

if(ba.object){var bb=ba.win.qx.core.ObjectRegistry.fromHashCode(ba.object);

if(bb){bk.push(G+bb.$$hash+n,bb.classname,m,bb.$$hash,y);
}}else if(ba.clazz){bk.push(J+ba.clazz.classname,x);
}var bd=ba.items;

for(var i=0,bi=bd.length;i<bi;i++){bh=bd[i];
bj=bh.text;

if(bj instanceof Array){var be=[];

for(var j=0,bg=bj.length;j<bg;j++){bc=bj[j];

if(typeof bc===F){be.push(r+this.escapeHTML(bc)+k);
}else if(bc.key){be.push(p+bc.key+w+bc.type+n+this.escapeHTML(bc.text)+k);
}else{be.push(h+bc.type+n+this.escapeHTML(bc.text)+k);
}}bk.push(h+bh.type+n);

if(bh.type===K){bk.push(c,be.join(l),f);
}else{bk.push(m,be.join(l),d);
}bk.push(k);
}else{bk.push(h+bh.type+n+this.escapeHTML(bj)+g);
}}var bf=document.createElement(q);
bf.innerHTML=bk.join(e);
bf.className=E+ba.level;
return bf;
},formatOffset:function(M,length){var P=M.toString();
var N=(length||6)-P.length;
var O=e;

for(var i=0;i<N;i++){O+=D;
}return O+P;
},escapeHTML:function(bl){return String(bl).replace(/[<>&"']/g,this.__jU);
},__jU:function(a){var b={"<":C,">":H,"&":s,"'":t,'"':o};
return b[a]||A;
},toText:function(L){return this.toTextArray(L).join(z);
},toTextArray:function(Q){var Y=[];
Y.push(this.formatOffset(Q.offset,6));

if(Q.object){var R=Q.win.qx.core.ObjectRegistry.fromHashCode(Q.object);

if(R){Y.push(R.classname+m+R.$$hash+I);
}}else if(Q.clazz){Y.push(Q.clazz.classname+u);
}var S=Q.items;
var V,X;

for(var i=0,W=S.length;i<W;i++){V=S[i];
X=V.text;

if(X instanceof Array){var T=[];

for(var j=0,U=X.length;j<U;j++){T.push(X[j].text);
}
if(V.type===K){Y.push(c,T.join(l),f);
}else{Y.push(m,T.join(l),d);
}}else{Y.push(X);
}}return Y;
}}});
})();
(function(){var k="debug",j="log",i="qx.log.appender.Native",h="qx.client";
qx.Class.define(i,{statics:{process:qx.core.Variant.select(h,{"gecko":function(a){if(window.console&&console.firebug){console[a.level].call(console,qx.log.appender.Util.toText(a));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==k){g=j;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(b){if(window.console){var d=b.level;

if(d==k){d=j;
}var c=qx.log.appender.Util.toText(b);
console[d](c);
}},"opera":function(l){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__eu=k;
this.__ev=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eu:null,__ev:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},destruct:function(){this.__eu=this.__ev=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var Y="keydown",X="qx.client",W="keypress",V="NumLock",U="keyup",T="Enter",S="0",R="9",Q="-",P="PageUp",cg="+",cf="PrintScreen",ce="gecko",cd="A",cc="Z",cb="Left",ca="F5",bY="Down",bX="Up",bW="F11",bg="F6",bh="useraction",be="F3",bf="keyinput",bc="Insert",bd="F8",ba="End",bb="/",bo="Delete",bp="*",bB="F1",bx="F4",bJ="Home",bE="F2",bS="F12",bO="PageDown",bt="F7",bV="F9",bU="F10",bT="Right",bs="text",bv="Escape",bw="webkit",bz="5",bC="3",bF="Meta",bL="7",bQ="CapsLock",bi="input",bj="Control",bu="Space",bI="Tab",bH="Shift",bG="Pause",bN="Unidentified",bM="qx.event.handler.Keyboard",bD="mshtml",bK="mshtml|webkit",M="6",bP="off",bk="Apps",bl="4",by="Alt",N="2",O="Scroll",br="1",bm="8",bn="Win",bq="autoComplete",bA=",",bR="Backspace";
qx.Class.define(bM,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cz){arguments.callee.base.call(this);
this.__fv=cz;
this.__fw=cz.getWindow();
if(qx.core.Variant.isSet(X,ce)){this.__fx=this.__fw;
}else{this.__fx=this.__fw.document.documentElement;
}this.__fy={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(u){if(this._identifierToKeyCodeMap[u]){return true;
}
if(u.length!=1){return false;
}
if(u>=S&&u<=R){return true;
}
if(u>=cd&&u<=cc){return true;
}
switch(u){case cg:case Q:case bp:case bb:return true;
default:return false;
}}},members:{__fz:null,__fv:null,__fw:null,__fx:null,__fy:null,__fA:null,__fB:null,__fC:null,canHandleEvent:function(cx,cy){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(e,f,g){},_fireInputEvent:function(E,F){var G=this.__fD();
if(G&&G.offsetWidth!=0){var event=qx.event.Registration.createEvent(bf,qx.event.type.KeyInput,[E,G,F]);
this.__fv.dispatchEvent(G,event);
}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[bf]);
}},_fireSequenceEvent:function(i,j,k){var l=this.__fD();
var m=i.keyCode;
var event=qx.event.Registration.createEvent(j,qx.event.type.KeySequence,[i,l,k]);
this.__fv.dispatchEvent(l,event);
if(qx.core.Variant.isSet(X,bK)){if(j==Y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(m)&&!this._emulateKeyPress[m]){this._fireSequenceEvent(i,W,k);
}}}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[j]);
}},__fD:function(){var cH=this.__fv.getHandler(qx.event.handler.Focus);
var cI=cH.getActive();
if(!cI||cI.offsetWidth==0){cI=cH.getFocus();
}if(!cI||cI.offsetWidth==0){cI=this.__fv.getWindow().document.body;
}return cI;
},_initKeyObserver:function(){this.__fz=qx.lang.Function.listener(this.__fE,this);
this.__fC=qx.lang.Function.listener(this.__fG,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fx,U,this.__fz);
Event.addNativeListener(this.__fx,Y,this.__fz);
Event.addNativeListener(this.__fx,W,this.__fC);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fx,U,this.__fz);
Event.removeNativeListener(this.__fx,Y,this.__fz);
Event.removeNativeListener(this.__fx,W,this.__fC);

for(var cB in (this.__fB||{})){var cA=this.__fB[cB];
Event.removeNativeListener(cA.target,W,cA.callback);
}delete (this.__fB);
},__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(ci){ci=window.event||ci;
var cl=ci.keyCode;
var cj=0;
var ck=ci.type;
if(!(this.__fy[cl]==Y&&ck==Y)){this._idealKeyHandler(cl,cj,ck,ci);
}if(ck==Y){if(this._isNonPrintableKeyCode(cl)||this._emulateKeyPress[cl]){this._idealKeyHandler(cl,cj,W,ci);
}}this.__fy[cl]=ck;
},"gecko":function(cq){var cu=this._keyCodeFix[cq.keyCode]||cq.keyCode;
var cs=0;
var ct=cq.type;
if(qx.bom.client.Platform.WIN){var cr=cu?this._keyCodeToIdentifier(cu):this._charCodeToIdentifier(cs);

if(!(this.__fy[cr]==Y&&ct==Y)){this._idealKeyHandler(cu,cs,ct,cq);
}this.__fy[cr]=ct;
}else{this._idealKeyHandler(cu,cs,ct,cq);
}this.__fF(cq.target,ct,cu);
},"webkit":function(a){var d=0;
var b=0;
var c=a.type;
if(qx.bom.client.Engine.VERSION<525.13){if(c==U||c==Y){d=this._charCode2KeyCode[a.charCode]||a.keyCode;
}else{if(this._charCode2KeyCode[a.charCode]){d=this._charCode2KeyCode[a.charCode];
}else{b=a.charCode;
}}this._idealKeyHandler(d,b,c,a);
}else{d=a.keyCode;
if(!(this.__fy[d]==Y&&c==Y)){this._idealKeyHandler(d,b,c,a);
}if(c==Y){if(this._isNonPrintableKeyCode(d)||this._emulateKeyPress[d]){this._idealKeyHandler(d,b,W,a);
}}this.__fy[d]=c;
}},"opera":function(h){this.__fA=h.keyCode;
this._idealKeyHandler(h.keyCode,0,h.type,h);
}})),__fF:qx.core.Variant.select(X,{"gecko":function(cC,cD,cE){if(cD===Y&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==bs&&cC.tagName.toLowerCase()===bi&&cC.getAttribute(bq)!==bP){if(!this.__fB){this.__fB={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__fB[cG]){return;
}var self=this;
this.__fB[cG]={target:cC,callback:function(D){qx.bom.Event.stopPropagation(D);
self.__fG(D);
}};
var cF=qx.event.GlobalError.observeMethod(this.__fB[cG].callback);
qx.bom.Event.addNativeListener(cC,W,cF);
}},"default":null}),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(I){I=window.event||I;

if(this._charCode2KeyCode[I.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[I.keyCode],0,I.type,I);
}else{this._idealKeyHandler(0,I.keyCode,I.type,I);
}},"gecko":function(cm){var cp=this._keyCodeFix[cm.keyCode]||cm.keyCode;
var cn=cm.charCode;
var co=cm.type;
this._idealKeyHandler(cp,cn,co,cm);
},"webkit":function(z){if(qx.bom.client.Engine.VERSION<525.13){var C=0;
var A=0;
var B=z.type;

if(B==U||B==Y){C=this._charCode2KeyCode[z.charCode]||z.keyCode;
}else{if(this._charCode2KeyCode[z.charCode]){C=this._charCode2KeyCode[z.charCode];
}else{A=z.charCode;
}}this._idealKeyHandler(C,A,B,z);
}else{if(this._charCode2KeyCode[z.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[z.keyCode],0,z.type,z);
}else{this._idealKeyHandler(0,z.keyCode,z.type,z);
}}},"opera":function(J){var L=J.keyCode;
var K=J.type;
if(L!=this.__fA){this._idealKeyHandler(0,this.__fA,K,J);
}else{if(this._keyCodeToIdentifierMap[J.keyCode]){this._idealKeyHandler(J.keyCode,0,J.type,J);
}else{this._idealKeyHandler(0,J.keyCode,J.type,J);
}}}})),_idealKeyHandler:function(n,o,p,q){var r;
if(n||(!n&&!o)){r=this._keyCodeToIdentifier(n);
this._fireSequenceEvent(q,p,r);
}else{r=this._charCodeToIdentifier(o);
this._fireSequenceEvent(q,W,r);
this._fireInputEvent(q,o);
}},_specialCharCodeMap:{8:bR,9:bI,13:T,27:bv,32:bu},_emulateKeyPress:qx.core.Variant.select(X,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bH,17:bj,18:by,20:bQ,224:bF,37:cb,38:bX,39:bT,40:bY,33:P,34:bO,35:ba,36:bJ,45:bc,46:bo,112:bB,113:bE,114:be,115:bx,116:ca,117:bg,118:bt,119:bd,120:bV,121:bU,122:bW,123:bS,144:V,44:cf,145:O,19:bG,91:bn,93:bk},_numpadToCharCode:{96:S.charCodeAt(0),97:br.charCodeAt(0),98:N.charCodeAt(0),99:bC.charCodeAt(0),100:bl.charCodeAt(0),101:bz.charCodeAt(0),102:M.charCodeAt(0),103:bL.charCodeAt(0),104:bm.charCodeAt(0),105:R.charCodeAt(0),106:bp.charCodeAt(0),107:cg.charCodeAt(0),109:Q.charCodeAt(0),110:bA.charCodeAt(0),111:bb.charCodeAt(0)},_charCodeA:cd.charCodeAt(0),_charCodeZ:cc.charCodeAt(0),_charCode0:S.charCodeAt(0),_charCode9:R.charCodeAt(0),_isNonPrintableKeyCode:function(ch){return this._keyCodeToIdentifierMap[ch]?true:false;
},_isIdentifiableKeyCode:function(H){if(H>=this._charCodeA&&H<=this._charCodeZ){return true;
}if(H>=this._charCode0&&H<=this._charCode9){return true;
}if(this._specialCharCodeMap[H]){return true;
}if(this._numpadToCharCode[H]){return true;
}if(this._isNonPrintableKeyCode(H)){return true;
}return false;
},_keyCodeToIdentifier:function(cv){if(this._isIdentifiableKeyCode(cv)){var cw=this._numpadToCharCode[cv];

if(cw){return String.fromCharCode(cw);
}return (this._keyCodeToIdentifierMap[cv]||this._specialCharCodeMap[cv]||String.fromCharCode(cv));
}else{return bN;
}},_charCodeToIdentifier:function(s){return this._specialCharCodeMap[s]||String.fromCharCode(s).toUpperCase();
},_identifierToKeyCode:function(t){return qx.event.handler.Keyboard._identifierToKeyCodeMap[t]||t.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fA=this.__fv=this.__fw=this.__fx=this.__fy=null;
},defer:function(v,w,x){qx.event.Registration.addHandler(v);
if(!v._identifierToKeyCodeMap){v._identifierToKeyCodeMap={};

for(var y in w._keyCodeToIdentifierMap){v._identifierToKeyCodeMap[w._keyCodeToIdentifierMap[y]]=parseInt(y,10);
}
for(var y in w._specialCharCodeMap){v._identifierToKeyCodeMap[w._specialCharCodeMap[y]]=parseInt(y,10);
}}
if(qx.core.Variant.isSet(X,bD)){w._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(X,ce)){w._keyCodeFix={12:w._identifierToKeyCode(V)};
}else if(qx.core.Variant.isSet(X,bw)){if(qx.bom.client.Engine.VERSION<525.13){w._charCode2KeyCode={63289:w._identifierToKeyCode(V),63276:w._identifierToKeyCode(P),63277:w._identifierToKeyCode(bO),63275:w._identifierToKeyCode(ba),63273:w._identifierToKeyCode(bJ),63234:w._identifierToKeyCode(cb),63232:w._identifierToKeyCode(bX),63235:w._identifierToKeyCode(bT),63233:w._identifierToKeyCode(bY),63272:w._identifierToKeyCode(bo),63302:w._identifierToKeyCode(bc),63236:w._identifierToKeyCode(bB),63237:w._identifierToKeyCode(bE),63238:w._identifierToKeyCode(be),63239:w._identifierToKeyCode(bx),63240:w._identifierToKeyCode(ca),63241:w._identifierToKeyCode(bg),63242:w._identifierToKeyCode(bt),63243:w._identifierToKeyCode(bd),63244:w._identifierToKeyCode(bV),63245:w._identifierToKeyCode(bU),63246:w._identifierToKeyCode(bW),63247:w._identifierToKeyCode(bS),63248:w._identifierToKeyCode(cf),3:w._identifierToKeyCode(T),12:w._identifierToKeyCode(V),13:w._identifierToKeyCode(T)};
}else{w._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var s="",r='</div>',q="Up",p="none",o="keypress",n='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',m="Enter",l="px",k='.qxconsole .messages .user-result{background:white}',j='.qxconsole .messages .level-error{background:#FFE2D5}',be="div",bd="user-command",bc='<div class="command">',bb='.qxconsole .command input:focus{outline:none;}',ba='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Y='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',X='.qxconsole .messages div{padding:0px 4px;}',W='.qxconsole .messages .level-debug{background:white}',V='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',U="DIV",z='.qxconsole .messages .level-user{background:#E3EFE9}',A='<div class="qxconsole">',x="D",y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',v='.qxconsole .messages .type-string{color:black;font-weight:normal;}',w='.qxconsole .control a{text-decoration:none;color:black;}',t='<div class="messages">',u='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',B='<input type="text"/>',C="clear",J='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',N='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',L='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',Q='.qxconsole .messages .user-command{color:blue}',P="F7",E="qx.log.appender.Console",T='.qxconsole .messages .level-info{background:#DEEDFA}',S="block",R='.qxconsole .messages .level-warn{background:#FFF7D5}',D='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',F='.qxconsole .messages .user-error{background:#FFE2D5}',G='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',I='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',K=">>> ",M="Down",O='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(E,{statics:{init:function(){var a=[N,G,w,n,X,Q,k,F,W,T,R,j,z,v,O,u,H,y,ba,V,Y,D,L,J,bb];
qx.bom.Stylesheet.createElement(a.join(s));
var c=[A,I,t,r,bc,B,r,r];
var d=document.createElement(U);
d.innerHTML=c.join(s);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__jV=b;
this.__jW=b.childNodes[1];
this.__jX=b.childNodes[2].firstChild;
this.__kd();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__ke,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__jW.innerHTML=s;
},process:function(bg){this.__jW.appendChild(qx.log.appender.Util.toHtml(bg));
this.__jY();
},__jY:function(){this.__jW.scrollTop=this.__jW.scrollHeight;
},__ka:true,toggle:function(){if(!this.__jV){this.init();
}else if(this.__jV.style.display==p){this.show();
}else{this.__jV.style.display=p;
}},show:function(){if(!this.__jV){this.init();
}else{this.__jV.style.display=S;
this.__jW.scrollTop=this.__jW.scrollHeight;
}},__kb:[],execute:function(){var i=this.__jX.value;

if(i==s){return;
}
if(i==C){return this.clear();
}var g=document.createElement(be);
g.innerHTML=qx.log.appender.Util.escapeHTML(K+i);
g.className=bd;
this.__kb.push(i);
this.__kc=this.__kb.length;
this.__jW.appendChild(g);
this.__jY();

try{var h=window.eval(i);
}catch(bf){qx.log.Logger.error(bf);
}
if(h!==undefined){qx.log.Logger.debug(h);
}},__kd:function(e){this.__jW.style.height=(this.__jV.clientHeight-this.__jV.firstChild.offsetHeight-this.__jV.lastChild.offsetHeight)+l;
},__ke:function(e){var bi=e.getKeyIdentifier();
if((bi==P)||(bi==x&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__jV){return;
}if(!qx.dom.Hierarchy.contains(this.__jV,e.getTarget())){return;
}if(bi==m&&this.__jX.value!=s){this.execute();
this.__jX.value=s;
}if(bi==q||bi==M){this.__kc+=bi==q?-1:1;
this.__kc=Math.min(Math.max(0,this.__kc),this.__kb.length);
var bh=this.__kb[this.__kc];
this.__jX.value=bh||s;
this.__jX.select();
}}},defer:function(f){qx.event.Registration.addListener(document.documentElement,o,f.__ke,f);
}});
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
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bm="qx.client",bl="blur",bk="focus",bj="mousedown",bi="on",bh="mouseup",bg="DOMFocusOut",bf="DOMFocusIn",be="selectstart",bd="onmousedown",bF="onfocusout",bE="onfocusin",bD="onmouseup",bC="onselectstart",bB="draggesture",bA="qx.event.handler.Focus",bz="_applyFocus",by="deactivate",bx="textarea",bw="_applyActive",bt="input",bu="focusin",br="qxSelectable",bs="tabIndex",bp="off",bq="activate",bn="focusout",bo="qxKeepFocus",bv="qxKeepActive";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this._manager=m;
this._window=m.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bw,nullable:true},focus:{apply:bz,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gu:null,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__gD:null,canHandleEvent:function(z,A){},registerEvent:function(bI,bJ,bK){},unregisterEvent:function(R,S,T){},focus:function(o){try{o.focus();
}catch(l){}this.setFocus(o);
this.setActive(o);
},activate:function(B){this.setActive(B);
},blur:function(bL){try{bL.blur();
}catch(H){}
if(this.getActive()===bL){this.resetActive();
}
if(this.getFocus()===bL){this.resetFocus();
}},deactivate:function(bG){if(this.getActive()===bG){this.resetActive();
}},tryActivate:function(L){var M=this.__gS(L);

if(M){this.setActive(M);
}},__gE:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(v,qx.event.type.Focus,[t,u,w]);
y.dispatchEvent(t,x);
},_windowFocused:true,__gF:function(){if(this._windowFocused){this._windowFocused=false;
this.__gE(this._window,null,bl,false);
}},__gG:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gE(this._window,null,bk,false);
}},_initObserver:qx.core.Variant.select(bm,{"gecko":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gy=qx.lang.Function.listener(this.__gH,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
this._window.addEventListener(bB,this.__gy,true);
},"mshtml":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.attachEvent(bd,this.__gu);
this._document.attachEvent(bD,this.__gv);
this._document.attachEvent(bE,this.__gA);
this._document.attachEvent(bF,this.__gB);
this._document.attachEvent(bC,this.__gz);
},"webkit":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._document.addEventListener(be,this.__gz,false);
this._window.addEventListener(bg,this.__gB,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
},"opera":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bf,this.__gA,true);
this._window.addEventListener(bg,this.__gB,true);
}}),_stopObserver:qx.core.Variant.select(bm,{"gecko":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(bh,this.__gv,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
this._window.removeEventListener(bB,this.__gy,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bd,this.__gu);
qx.bom.Event.removeNativeListener(this._document,bD,this.__gv);
qx.bom.Event.removeNativeListener(this._document,bE,this.__gA);
qx.bom.Event.removeNativeListener(this._document,bF,this.__gB);
qx.bom.Event.removeNativeListener(this._document,bC,this.__gz);
},"webkit":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(be,this.__gz,false);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
},"opera":function(){this._document.removeEventListener(bj,this.__gu,true);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
}}),__gH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(!this.__gT(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){this.__gG();
var b=e.srcElement;
var a=this.__gR(b);

if(a){this.setFocus(a);
}this.tryActivate(b);
},"opera":function(e){var bH=e.target;

if(bH==this._document||bH==this._window){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(bH);
this.tryActivate(bH);
if(!this.__gT(bH)){bH.selectionStart=0;
bH.selectionEnd=0;
}}},"default":null})),__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){if(!e.toElement){this.__gF();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var r=e.target;

if(r===this.getFocus()){this.resetFocus();
}
if(r===this.getActive()){this.resetActive();
}},"opera":function(e){var I=e.target;

if(I==this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(I===this.getFocus()){this.resetFocus();
}
if(I===this.getActive()){this.resetActive();
}}},"default":null})),__gK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var bc=e.target;

if(bc===this._window||bc===this._document){this.__gG();
bc=this._body;
}this.setFocus(bc);
this.tryActivate(bc);
},"webkit":function(e){var P=e.target;

if(P===this._window||P===this._document){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(P);
this.tryActivate(P);
}},"default":null})),__gM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var Q=this.__gR(e.target);

if(!Q){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bb=e.srcElement;
var ba=this.__gR(bb);

if(ba){if(!this.__gT(bb)){bb.unselectable=bi;
try{document.selection.empty();
}catch(e){}try{ba.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__gT(bb)){bb.unselectable=bi;
}}},"webkit":function(e){var K=e.target;
var J=this.__gR(K);

if(J){this.setFocus(J);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__gR(E);

if(!this.__gT(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__gN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){var n=e.srcElement;

if(n.unselectable){n.unselectable=bp;
}this.tryActivate(this.__gO(n));
},"gecko":function(e){var s=e.target;

while(s&&s.offsetWidth===undefined){s=s.parentNode;
}
if(s){this.tryActivate(s);
}},"webkit|opera":function(e){this.tryActivate(this.__gO(e.target));
},"default":null})),__gO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(F){var G=this.getFocus();

if(G&&F!=G&&(G.nodeName.toLowerCase()===bt||G.nodeName.toLowerCase()===bx)){F=G;
}return F;
},"default":function(d){return d;
}})),__gP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(e){var c=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gT(c)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gQ:function(h){var i=qx.bom.element.Attribute.get(h,bs);

if(i>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(i>=0&&j[h.tagName]){return true;
}return false;
},__gR:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bo)==bi){return null;
}
if(this.__gQ(k)){return k;
}k=k.parentNode;
}return this._body;
},__gS:function(N){var O=N;

while(N&&N.nodeType===1){if(N.getAttribute(bv)==bi){return null;
}N=N.parentNode;
}return O;
},__gT:function(f){while(f&&f.nodeType===1){var g=f.getAttribute(br);

if(g!=null){return g===bi;
}f=f.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__gE(Y,X,by,true);
}
if(X){this.__gE(X,Y,bq,true);
}},_applyFocus:function(p,q){if(q){this.__gE(q,p,bn,true);
}
if(p){this.__gE(p,q,bu,true);
}if(q){this.__gE(q,p,bl,false);
}
if(p){this.__gE(p,q,bk,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gU=null;
},defer:function(U){qx.event.Registration.addHandler(U);
var V=U.FOCUSABLE_ELEMENTS;

for(var W in V){V[W.toUpperCase()]=1;
}}});
})();
(function(){var f="abstract",e="qx.event.dispatch.AbstractBubbling";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:f,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(a){return a.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var q="",p="qx.client",o="readOnly",n="accessKey",m="qx.bom.element.Attribute",l="rowSpan",k="vAlign",j="className",i="textContent",h="'",E="htmlFor",D="longDesc",C="cellSpacing",B="frameBorder",A="='",z="useMap",y="innerText",x="innerHTML",w="tabIndex",v="dateTime",t="maxLength",u="mshtml",r="cellPadding",s="colSpan";
qx.Class.define(m,{statics:{__gV:{names:{"class":j,"for":E,html:x,text:qx.core.Variant.isSet(p,u)?y:i,colspan:s,rowspan:l,valign:k,datetime:v,accesskey:n,tabindex:w,maxlength:t,readonly:o,longdesc:D,cellpadding:r,cellspacing:C,frameborder:B,usemap:z},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:q,maxLength:10000000,className:q,innerHTML:q,innerText:q,textContent:q,htmlFor:q,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(d){var e=[];
var g=this.__gV.runtime;

for(var f in d){if(!g[f]){e.push(f,A,d[f],h);
}}return e.join(q);
},get:qx.core.Variant.select(p,{"mshtml":function(J,name){var L=this.__gV;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(F,name){var H=this.__gV;
var G;
name=H.names[name]||name;
if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];

if(G==null){G=F.getAttribute(name);
}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
}}),set:function(a,name,b){var c=this.__gV;
name=c.names[name]||name;
if(c.bools[name]){b=!!b;
}if(c.property[name]){if(b==null){b=c.propertyDefault[name];

if(b===undefined){b=null;
}}a[name]=b;
}else{if(b===true){a.setAttribute(name,name);
}else if(b===false||b===null){a.removeAttribute(name);
}else{a.setAttribute(name,b);
}}},reset:function(I,name){this.set(I,name,null);
}}});
})();
(function(){var p="/",o="mshtml",n="",m="qx.client",l="?",k="string",j="qx.util.ResourceManager",i="singleton";
qx.Class.define(j,{extend:qx.core.Object,type:i,statics:{__hG:qx.$$resources||{},__hH:{}},members:{has:function(B){return !!arguments.callee.self.__hG[B];
},getData:function(w){return arguments.callee.self.__hG[w]||null;
},getImageWidth:function(q){var r=arguments.callee.self.__hG[q];
return r?r[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__hG[z];
return A?A[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__hG[a];
return b?b[2]:null;
},isClippedImage:function(x){var y=arguments.callee.self.__hG[x];
return y&&y.length>4;
},toUri:function(s){if(s==null){return s;
}var t=arguments.callee.self.__hG[s];

if(!t){return s;
}
if(typeof t===k){var v=t;
}else{var v=t[3];
if(!v){return s;
}}var u=n;

if(qx.core.Variant.isSet(m,o)&&qx.bom.client.Feature.SSL){u=arguments.callee.self.__hH[v];
}return u+qx.$$libraries[v].resourceUri+p+s;
}},defer:function(c){if(qx.core.Variant.isSet(m,o)){if(qx.bom.client.Feature.SSL){for(var g in qx.$$libraries){var e;

if(qx.$$libraries[g].resourceUri){e=qx.$$libraries[g].resourceUri;
}else{c.__hH[g]=n;
continue;
}if(e.match(/^\/\//)!=null){c.__hH[g]=window.location.protocol;
}else if(e.match(/^\.\//)!=null){var d=document.URL;
c.__hH[g]=d.substring(0,d.lastIndexOf(p)+1);
}else if(e.match(/^http/)!=null){}else{var h=window.location.href.indexOf(l);
var f;

if(h==-1){f=window.location.href;
}else{f=window.location.href.substring(0,h);
}c.__hH[g]=f.substring(0,f.lastIndexOf(p)+1);
}}}}}});
})();
(function(){var C="qx.client",B="head",A="text/css",z="stylesheet",y="}",x='@import "',w="{",v='";',u="qx.bom.Stylesheet",t="link",s="style";
qx.Class.define(u,{statics:{includeFile:function(a,b){if(!b){b=document;
}var c=b.createElement(t);
c.type=A;
c.rel=z;
c.href=qx.util.ResourceManager.getInstance().toUri(a);
var d=b.getElementsByTagName(B)[0];
d.appendChild(c);
},createElement:qx.core.Variant.select(C,{"mshtml":function(bf){var bg=document.createStyleSheet();

if(bf){bg.cssText=bf;
}return bg;
},"default":function(D){var E=document.createElement(s);
E.type=A;

if(D){E.appendChild(document.createTextNode(D));
}document.getElementsByTagName(B)[0].appendChild(E);
return E.sheet;
}}),addRule:qx.core.Variant.select(C,{"mshtml":function(l,m,n){l.addRule(m,n);
},"default":function(P,Q,R){P.insertRule(Q+w+R+y,P.cssRules.length);
}}),removeRule:qx.core.Variant.select(C,{"mshtml":function(L,M){var N=L.rules;
var O=N.length;

for(var i=O-1;i>=0;--i){if(N[i].selectorText==M){L.removeRule(i);
}}},"default":function(g,h){var j=g.cssRules;
var k=j.length;

for(var i=k-1;i>=0;--i){if(j[i].selectorText==h){g.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(C,{"mshtml":function(S){var T=S.rules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeRule(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.deleteRule(i);
}}}),addImport:qx.core.Variant.select(C,{"mshtml":function(bd,be){bd.addImport(be);
},"default":function(e,f){e.insertRule(x+f+v,e.cssRules.length);
}}),removeImport:qx.core.Variant.select(C,{"mshtml":function(Y,ba){var bb=Y.imports;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].href==ba){Y.removeImport(i);
}}},"default":function(o,p){var q=o.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){if(q[i].href==p){o.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(C,{"mshtml":function(V){var W=V.imports;
var X=W.length;

for(var i=X-1;i>=0;i--){V.removeImport(i);
}},"default":function(F){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){if(G[i].type==G[i].IMPORT_RULE){F.deleteRule(i);
}}}})}});
})();
(function(){var i="qx.client",h="qx.dom.Hierarchy",g="previousSibling",f="*",e="nextSibling",d="parentNode";
qx.Class.define(h,{statics:{getNodeIndex:function(n){var o=0;

while(n&&(n=n.previousSibling)){o++;
}return o;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(R){while(R&&(R=R.nextSibling)&&!qx.dom.Node.isElement(R)){continue;
}return R||null;
},getPreviousElementSibling:function(a){while(a&&(a=a.previousSibling)&&!qx.dom.Node.isElement(a)){continue;
}return a||null;
},contains:qx.core.Variant.select(i,{"webkit|mshtml|opera":function(p,q){if(qx.dom.Node.isDocument(p)){var r=qx.dom.Node.getDocument(q);
return p&&r==p;
}else if(qx.dom.Node.isDocument(q)){return false;
}else{return p.contains(q);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(S,T){while(T){if(S==T){return true;
}T=T.parentNode;
}return false;
}}),isRendered:function(C){if(!C.offsetParent){return false;
}var D=C.ownerDocument||C.document;
if(D.body.contains){return D.body.contains(C);
}if(D.compareDocumentPosition){return !!(D.compareDocumentPosition(C)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(E,F){return this.contains(F,E);
},getCommonParent:qx.core.Variant.select(i,{"mshtml|opera":function(O,P){if(O===P){return O;
}
while(O&&qx.dom.Node.isElement(O)){if(O.contains(P)){return O;
}O=O.parentNode;
}return null;
},"default":function(G,H){if(G===H){return G;
}var I={};
var L=qx.core.ObjectRegistry;
var K,J;

while(G||H){if(G){K=L.toHashCode(G);

if(I[K]){return I[K];
}I[K]=G;
G=G.parentNode;
}
if(H){J=L.toHashCode(H);

if(I[J]){return I[J];
}I[J]=H;
H=H.parentNode;
}}return null;
}}),getAncestors:function(b){return this._recursivelyCollect(b,d);
},getChildElements:function(x){x=x.firstChild;

if(!x){return [];
}var y=this.getNextSiblings(x);

if(x.nodeType===1){y.unshift(x);
}return y;
},getDescendants:function(v){return qx.lang.Array.fromCollection(v.getElementsByTagName(f));
},getFirstDescendant:function(c){c=c.firstChild;

while(c&&c.nodeType!=1){c=c.nextSibling;
}return c;
},getLastDescendant:function(m){m=m.lastChild;

while(m&&m.nodeType!=1){m=m.previousSibling;
}return m;
},getPreviousSiblings:function(w){return this._recursivelyCollect(w,g);
},getNextSiblings:function(Q){return this._recursivelyCollect(Q,e);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(z){var A=z.firstChild;

while(A){var B=A.nextSibling;

if(A.nodeType==3&&!/\S/.test(A.nodeValue)){z.removeChild(A);
}A=B;
}}}});
})();
(function(){var t=": ",s="Summary: (",r="qx.dev.ObjectSummary",q="\n",p=" Objects)\n\n",o=")\r\n",n=" (",m=" Objects)\r\n\r\n",l=", ";
qx.Class.define(r,{statics:{getInfo:function(){var c={};
var k=0;
var d;
var f=qx.core.ObjectRegistry.getRegistry();

for(var g in f){d=f[g];

if(d&&d.isDisposed()===false){if(c[d.classname]==null){c[d.classname]=1;
}else{c[d.classname]++;
}k++;
}}var j=[];

for(var e in c){j.push({classname:e,number:c[e]});
}j.sort(function(a,b){return b.number-a.number;
});
var h=s+k+p;

for(var i=0;i<j.length;i++){h+=j[i].number+t+j[i].classname+q;
}return h;
},getNewObjects:function(){var v={};
var F=0;
var w;
var A=qx.core.ObjectRegistry.getRegistry();
var y={};
var E;

for(var B in A){w=A[B];

if(w&&w.__disposed===false){var z=w.classname;

if(v[z]==null){v[z]=1;
}else{v[z]++;
}E=y[z];

if(E==null){E=y[z]=new Array();
}E[E.length]=w.toHashCode();
F++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var u={};

for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;
}
if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];
}}this._m_dObjectList=v;
var D=[];

for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});
}D.sort(function(a,b){return b.number-a.number;
});
var C=s+F+m;

for(var i=0;i<D.length;i++){C+=D[i].number+t+D[i].classname+n+D[i].aHashCode.join(l)+o;
}return C;
}}});
})();
(function(){var ct="window",cs="",cr="childNodes",cq="nodeName",cp="nodeType",co="document",cn="function",cm="firstChild",cl="qx.client",ck="external",bB="location",bA="[native code]",bz="lastChild",by="scrollY",bx="scrollWidth",bw="defaultView",bv="closed",bu="content",bt="qx",bs="</td><td>",cA="filters",cB="locationbar",cy="screenX",cz="previousSibling",cw="scrollX",cx="Global namespace is polluted by the following unknown objects:\n\n",cu="doctype",cv="parent",cC="qx.dev.Pollution",cD="outerText",ca="applets",bY="parentElement",cc="designMode",cb="cookie",ce="fullScreen",cd="links",cg="pageXOffset",cf="frames",bX="documentElement",bW="screenY",j="statusbar",k="history",l="sun",m="pkcs11",n="java",o="style",p="innerWidth",q="plugins",r="implementation",s="clientWidth",cH="compatMode",cG="length",cF="textContent",cE="controllers",cL="netscape",cK="self",cJ="domConfig",cI="attributes",cN="clientHeight",cM="outerHeight",R="parentNode",S="innerHeight",P="title",Q="ownerDocument",V="<table>",W="globalStorage",T="Global namespace is not polluted by any unknown objects.",U="toolbar",N="outerHTML",O="crypto",A="forms",z="scrollbars",C="frameElement",B="Components",w="body",v="clientInformation",y="offscreenBuffering",x="embeds",u="localName",t="scrollTop",bc="isMultiLine",bd="scrollLeft",be="images",bf="event",X="offsetHeight",Y="scrollMaxY",ba="sessionStorage",bb="screen",bg="name",bh="offsetLeft",K="console",J="XMLHttpRequest",I="mshtml",H="nextSibling",G="innerText",F="menubar",E="scopeName",D="top",M="outerWidth",L=": ",bi="\n",bj="status",bk="contentEditable",bl="anchors",bm="</table>",bn="<tr style='vertical-align:top'><td>",bo="scrollMaxX",bp="screenTop",bq="defaultStatus",br="styleSheets",bF="className",bE="personalbar",bD="</td></tr>",bC="currentStyle",bJ="directories",bI="navigator",bH="pageYOffset",bG="screenLeft",bL="opener",bK="scrollHeight",bS="__firebug__",bT="Option",bQ="innerHTML",bR="tabIndex",bO="offsetTop",bP="[function]",bM="clipboardData",bN="Packages",bU="tagName",bV="offsetWidth",ci="mshtml|opera",ch="undefined",cj="Image";
qx.Class.define(cC,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bt,n,l,bN,bS,B,cE,ba,W,K,bf,y,bM,v,bT,cj,ck,bp,bG,cG,ct,co,bB,bI,cL,cv,cf,D,z,bg,cw,by,cK,bb,k,bu,F,U,cB,bE,j,bJ,bv,O,m,bL,bj,bq,p,S,M,cM,cy,bW,cg,bH,bo,Y,ce,C,J],"document":[cJ,bB,cH,r,bw,P,w,br,bX,cq,cp,cm,bz,cu,be,ca,cd,A,bl,cb,x,q,cc,cr],"body":[cF,bQ,N,G,cD,E,bY,bU,cA,bk,co,bC,bc,cN,s,bz,cm,bO,bh,bV,X,bR,bF,cI,cz,H,Q,u,cr,R,cp,cq,o,t,bd,bx,bK]},getInfo:function(a){var b=qx.dev.Pollution.getTextList(a||ct);

if(b){return cx+b;
}else{return T;
}},extract:function(cO){var cQ=[];
var cP=qx.dev.Pollution.ignore[cO];
if(qx.core.Variant.isSet(cl,I)){if(cO==ct){cP=cP.slice(0);

for(var cR=0;cR<window.length;cR++){cP.push(cs+cR);
}}}var cS=qx.dev.Pollution.names[cO];

for(var cT in cS){try{if(qx.core.Variant.isSet(cl,ci)){if(cO==ct&&cT==ck){continue;
}}if(typeof cS[cT]==ch||cS[cT]===null){continue;
}if(typeof cS[cT]==cn&&cS[cT].toString().indexOf(bA)!=-1){continue;
}if(typeof cS[cT].constructor==cn){if((cS[cT].constructor.toString().indexOf(bA)!=-1)||(cS[cT].constructor.toString().indexOf(bP)!=-1)){continue;
}}if(qx.lang.Array.contains(cP,cT)){continue;
}}catch(cU){continue;
}cQ.push({"key":cT,"value":cS[cT]});
}return cQ;
},getHtmlTable:function(c){var e=[];
var d=bn;
var g=bs;
var h=bD;
e.push(V);
var f=this.extract(c);

for(var i=0;i<f.length;i++){e.push(d+f[i].key+g+f[i].value+h);
}e.push(bm);
return e.join(cs);
},getTextList:function(cV){var cX=[];
var cY=L;
var da=bi;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(cs);
}}});
})();
(function(){var H="other",G="widgets",F="fonts",E="appearances",D="qx.Theme",C="]",B="[Theme ",A="colors",z="decorations",y="Theme",v="meta",x="borders",w="icons";
qx.Bootstrap.define(D,{statics:{define:function(name,m){if(!m){var m={};
}m.include=this.__dk(m.include);
m.patch=this.__dk(m.patch);
{};
var n={$$type:y,name:name,title:m.title,toString:this.genericToString};
if(m.extend){n.supertheme=m.extend;
}n.basename=qx.Bootstrap.createNamespace(name,n);
this.__dn(n,m);
this.__dl(n,m);
this.$$registry[name]=n;
for(var i=0,a=m.include,l=a.length;i<l;i++){this.include(n,a[i]);
}
for(var i=0,a=m.patch,l=a.length;i<l;i++){this.patch(n,a[i]);
}},__dk:function(o){if(!o){return [];
}
if(qx.Bootstrap.isArray(o)){return o;
}else{return [o];
}},__dl:function(b,c){var d=c.aliases||{};

if(c.extend&&c.extend.aliases){qx.Bootstrap.objectMergeWith(d,c.extend.aliases,false);
}b.aliases=d;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return B+this.name+C;
},__dm:function(P){for(var i=0,Q=this.__do,l=Q.length;i<l;i++){if(P[Q[i]]){return Q[i];
}}},__dn:function(I,J){var M=this.__dm(J);
if(J.extend&&!M){M=J.extend.type;
}I.type=M||H;
if(!M){return;
}var O=function(){};
if(J.extend){O.prototype=new J.extend.$$clazz;
}var N=O.prototype;
var L=J[M];
for(var K in L){N[K]=L[K];
if(N[K].base){{};
N[K].base=J.extend;
}}I.$$clazz=O;
I[M]=new O;
},$$registry:{},__do:[A,x,z,F,w,G,E,v],__dp:null,__dq:null,__dr:function(){},patch:function(p,q){var s=this.__dm(q);

if(s!==this.__dm(p)){throw new Error("The mixins '"+p.name+"' are not compatible '"+q.name+"'!");
}var r=q[s];
var t=p.$$clazz.prototype;

for(var u in r){t[u]=r[u];
}},include:function(e,f){var h=f.type;

if(h!==e.type){throw new Error("The mixins '"+e.name+"' are not compatible '"+f.name+"'!");
}var g=f[h];
var j=e.$$clazz.prototype;

for(var k in g){if(j[k]!==undefined){continue;
}j[k]=g[k];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__mM:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__mM=null;
},getInsets:function(){if(this.__mM){return this.__mM;
}var a=this._getDefaultInsets();
return this.__mM={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__mM=null;
}},destruct:function(){this.__mM=null;
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
(function(){var v="_applyStyle",u="Color",t="px",s="solid",r="dotted",q="double",p="dashed",o="",n="_applyWidth",m="qx.ui.decoration.Uniform",j="px ",l=" ",k="scale",i="PositiveInteger",h="absolute";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(w,x,y){arguments.callee.base.call(this);
if(w!=null){this.setWidth(w);
}
if(x!=null){this.setStyle(x);
}
if(y!=null){this.setColor(y);
}},properties:{width:{check:i,init:0,apply:n},style:{nullable:true,check:[s,r,p,q],init:s,apply:v},color:{nullable:true,check:u,apply:v},backgroundColor:{check:u,nullable:true,apply:v}},members:{__oL:null,_getDefaultInsets:function(){var z=this.getWidth();
return {top:z,right:z,bottom:z,left:z};
},_isInitialized:function(){return !!this.__oL;
},getMarkup:function(){if(this.__oL){return this.__oL;
}var a={position:h,top:0,left:0};
var b=this.getWidth();
{};
var d=qx.theme.manager.Color.getInstance();
a.border=b+j+this.getStyle()+l+d.resolve(this.getColor());
var c=this._generateBackgroundMarkup(a);
return this.__oL=c;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==k;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+t;
A.style.height=C+t;
},tint:function(e,f){var g=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}e.style.backgroundColor=g.resolve(f)||o;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__oL=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){arguments.callee.base.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__mN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mN;
},getMarkup:function(){if(this.__mN){return this.__mN;
}var j={position:a,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__mN=k;
},resize:function(g,h,i){g.style.width=h+f;
g.style.height=i+f;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__mN=null;
}});
})();
(function(){var m="_applyStyle",l="solid",k="Color",j="double",i="px ",h="dotted",g="_applyWidth",f="dashed",e="Number",d=" ",I="shorthand",H="px",G="widthTop",F="styleRight",E="styleLeft",D="widthLeft",C="widthBottom",B="styleTop",A="colorBottom",z="styleBottom",t="widthRight",u="colorLeft",r="colorRight",s="colorTop",p="scale",q="border-top",n="border-left",o="border-right",v="qx.ui.decoration.Single",w="",y="border-bottom",x="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(O,P,Q){arguments.callee.base.call(this);
if(O!=null){this.setWidth(O);
}
if(P!=null){this.setStyle(P);
}
if(Q!=null){this.setColor(Q);
}},properties:{widthTop:{check:e,init:0,apply:g},widthRight:{check:e,init:0,apply:g},widthBottom:{check:e,init:0,apply:g},widthLeft:{check:e,init:0,apply:g},styleTop:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleRight:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleBottom:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleLeft:{nullable:true,check:[l,h,f,j],init:l,apply:m},colorTop:{nullable:true,check:k,apply:m},colorRight:{nullable:true,check:k,apply:m},colorBottom:{nullable:true,check:k,apply:m},colorLeft:{nullable:true,check:k,apply:m},backgroundColor:{check:k,nullable:true,apply:m},left:{group:[D,E,u]},right:{group:[t,F,r]},top:{group:[G,B,s]},bottom:{group:[C,z,A]},width:{group:[G,t,C,D],mode:I},style:{group:[B,F,z,E],mode:I},color:{group:[s,r,A,u],mode:I}},members:{__oM:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__oM;
},getMarkup:function(J){if(this.__oM){return this.__oM;
}var K=qx.theme.manager.Color.getInstance();
var L={};
var N=this.getWidthTop();

if(N>0){L[q]=N+i+this.getStyleTop()+d+K.resolve(this.getColorTop());
}var N=this.getWidthRight();

if(N>0){L[o]=N+i+this.getStyleRight()+d+K.resolve(this.getColorRight());
}var N=this.getWidthBottom();

if(N>0){L[y]=N+i+this.getStyleBottom()+d+K.resolve(this.getColorBottom());
}var N=this.getWidthLeft();

if(N>0){L[n]=N+i+this.getStyleLeft()+d+K.resolve(this.getColorLeft());
}{};
L.position=x;
L.top=0;
L.left=0;
var M=this._generateBackgroundMarkup(L);
return this.__oM=M;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==p;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+H;
R.style.height=T+H;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||w;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__oM=null;
}});
})();
(function(){var s="px",r="0px",q="-1px",p="no-repeat",o="scale-x",n="scale-y",m="-tr",l="-l",k='</div>',j="scale",G="qx.client",F="-br",E="-t",D="-tl",C="-r",B='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="_applyBaseImage",z="-b",y="String",x="",v="-bl",w="-c",t="mshtml",u="qx.ui.decoration.Grid";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(H,I){arguments.callee.base.call(this);
if(H!=null){this.setBaseImage(H);
}
if(I!=null){this.setInsets(I);
}},properties:{baseImage:{check:y,nullable:true,apply:A}},members:{__oN:null,__oO:null,__oP:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__oN;
},getMarkup:function(){if(this.__oN){return this.__oN;
}var N=qx.bom.element.Decoration;
var O=this.__oO;
var P=this.__oP;
var Q=[];
Q.push(B);
Q.push(N.create(O.tl,p,{top:0,left:0}));
Q.push(N.create(O.t,o,{top:0,left:P.left+s}));
Q.push(N.create(O.tr,p,{top:0,right:0}));
Q.push(N.create(O.bl,p,{bottom:0,left:0}));
Q.push(N.create(O.b,o,{bottom:0,left:P.left+s}));
Q.push(N.create(O.br,p,{bottom:0,right:0}));
Q.push(N.create(O.l,n,{top:P.top+s,left:0}));
Q.push(N.create(O.c,j,{top:P.top+s,left:P.left+s}));
Q.push(N.create(O.r,n,{top:P.top+s,right:0}));
Q.push(k);
return this.__oN=Q.join(x);
},resize:function(J,K,L){var M=this.__oP;
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.style.width=K+s;
J.style.height=L+s;
J.childNodes[1].style.width=innerWidth+s;
J.childNodes[4].style.width=innerWidth+s;
J.childNodes[7].style.width=innerWidth+s;
J.childNodes[6].style.height=innerHeight+s;
J.childNodes[7].style.height=innerHeight+s;
J.childNodes[8].style.height=innerHeight+s;

if(qx.core.Variant.isSet(G,t)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(K%2==1){J.childNodes[2].style.marginRight=q;
J.childNodes[5].style.marginRight=q;
J.childNodes[8].style.marginRight=q;
}else{J.childNodes[2].style.marginRight=r;
J.childNodes[5].style.marginRight=r;
J.childNodes[8].style.marginRight=r;
}
if(L%2==1){J.childNodes[3].style.marginBottom=q;
J.childNodes[4].style.marginBottom=q;
J.childNodes[5].style.marginBottom=q;
}else{J.childNodes[3].style.marginBottom=r;
J.childNodes[4].style.marginBottom=r;
J.childNodes[5].style.marginBottom=r;
}}}},tint:function(h,i){},_applyBaseImage:function(a,b){{};

if(a){var f=this._resolveImageUrl(a);
var g=/(.*)(\.[a-z]+)$/.exec(f);
var e=g[1];
var d=g[2];
var c=this.__oO={tl:e+D+d,t:e+E+d,tr:e+m+d,bl:e+v+d,b:e+z+d,br:e+F+d,l:e+l+d,c:e+w+d,r:e+C+d};
this.__oP=this._computeEdgeSizes(c);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(R){var S=qx.util.ResourceManager.getInstance();
return {top:S.getImageHeight(R.t),bottom:S.getImageHeight(R.b),left:S.getImageWidth(R.l),right:S.getImageWidth(R.r)};
}},destruct:function(){this.__oN=this.__oO=this.__oP=null;
}});
})();
(function(){var r="_applyStyle",q='"></div>',p="Color",o="1px",n='<div style="',m='border:',l="1px solid ",k="",j=";",i="px",D='</div>',C="qx.ui.decoration.Beveled",B='<div style="position:absolute;top:1px;left:1px;',A='border-bottom:',z='border-right:',y='border-left:',x='border-top:',w="Number",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',s='<div style="overflow:hidden;font-size:0;line-height:0;">',t="absolute";
qx.Class.define(C,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(f,g,h){arguments.callee.base.call(this);
if(f!=null){this.setOuterColor(f);
}
if(g!=null){this.setInnerColor(g);
}
if(h!=null){this.setInnerOpacity(h);
}},properties:{innerColor:{check:p,nullable:true,apply:r},innerOpacity:{check:w,init:1,apply:r},outerColor:{check:p,nullable:true,apply:r},backgroundColor:{check:p,nullable:true,apply:r}},members:{__oQ:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oQ;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oQ){return this.__oQ;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var e=l+a.resolve(this.getOuterColor())+j;
var d=l+a.resolve(this.getInnerColor())+j;
b.push(s);
b.push(n);
b.push(m,e);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(q);
b.push(v);
b.push(y,e);
b.push(z,e);
b.push(q);
b.push(n);
b.push(u);
b.push(x,e);
b.push(A,e);
b.push(q);
var c={position:t,top:o,left:o};
b.push(this._generateBackgroundMarkup(c));
b.push(B);
b.push(m,d);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(q);
b.push(D);
return this.__oQ=b.join(k);
},resize:function(E,F,G){if(F<4){F=4;
}
if(G<4){G=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=F-2;
var outerHeight=G-2;
var M=outerWidth;
var L=outerHeight;
var innerWidth=F-4;
var innerHeight=G-4;
}else{var outerWidth=F;
var outerHeight=G;
var M=F-2;
var L=G-2;
var innerWidth=M;
var innerHeight=L;
}var O=i;
var K=E.childNodes[0].style;
K.width=outerWidth+O;
K.height=outerHeight+O;
var J=E.childNodes[1].style;
J.width=outerWidth+O;
J.height=L+O;
var I=E.childNodes[2].style;
I.width=M+O;
I.height=outerHeight+O;
var H=E.childNodes[3].style;
H.width=M+O;
H.height=L+O;
var N=E.childNodes[4].style;
N.width=innerWidth+O;
N.height=innerHeight+O;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||k;
}},destruct:function(){this.__oQ=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var ht="button-frame",hs="atom",hr="widget",hq="main",hp="button",ho="text-selected",hn="image",hm="bold",hl="middle",hk="background-light",fW="text-disabled",fV="groupbox",fU="decoration/arrows/down.png",fT="cell",fS="selected",fR="border-invalid",fQ="input",fP="input-disabled",fO="menu-button",fN="input-focused-invalid",hA="toolbar-button",hB="spinner",hy="input-focused",hz="popup",hw="tooltip",hx="list",hu="tree-item",hv="treevirtual-contract",hC="scrollbar",hD="datechooser/nav-button",gS="text-hovered",gR="center",gU="treevirtual-expand",gT="textfield",gW="label",gV="decoration/arrows/right.png",gY="background-application",gX="radiobutton",gQ="white",gP="invalid",dS="combobox",dT="right-top",dU="checkbox",dV="text-title",dW="qx/static/blank.gif",dX="scrollbar/button",dY="right",ea="combobox/button",eb="icon/16/places/folder.png",ec="text-label",hR="decoration/tree/closed.png",hQ="scrollbar-slider-horizontal",hP="decoration/arrows/left.png",hO="button-focused",hV="text-light",hU="menu-slidebar-button",hT="text-input",hS="slidebar/button-forward",hX="background-splitpane",hW=".png",eU="decoration/tree/open.png",eV="default",eS="decoration/arrows/down-small.png",eT="datechooser",eY="slidebar/button-backward",fa="selectbox",eW="treevirtual-folder",eX="shadow-popup",eQ="icon/16/mimetypes/office-document.png",eR="background-medium",ew="table",ev="decoration/arrows/up.png",ey="decoration/form/",ex="",es="-invalid",er="icon/16/places/folder-open.png",eu="button-checked",et="decoration/window/maximize-active-hovered.png",eq="radiobutton-hovered",ep="decoration/cursors/",fg="slidebar",fh="tooltip-error-arrow",fi="table-scroller-focus-indicator",fj="move-frame",fc="nodrop",fd="decoration/table/boolean-true.png",fe="table-header-cell",ff="menu",fk="app-header",fl="row-layer",eJ="text-inactive",eI="move",eH="radiobutton-checked-focused",eG="decoration/window/restore-active-hovered.png",eF="shadow-window",eE="table-column-button",eD="right.png",eC="tabview-page-button-bottom-inactive",eN="tooltip-error",eM="window-statusbar",fm="button-hovered",fn="decoration/scrollbar/scrollbar-",fo="background-tip",fp="scrollbar-slider-horizontal-disabled",fq="table-scroller-header",fr="radiobutton-disabled",fs="button-pressed",ft="table-pane",fu="decoration/window/close-active.png",fv="native",gf="checkbox-hovered",ge="button-invalid-shadow",gd="checkbox-checked",gc="decoration/window/minimize-active-hovered.png",gj="menubar",gi="icon/16/actions/dialog-cancel.png",gh="tabview-page-button-top-inactive",gg="tabview-page-button-left-inactive",gn="menu-slidebar",gm="toolbar-button-checked",gK="decoration/tree/open-selected.png",gL="radiobutton-checked",gI="decoration/window/minimize-inactive.png",gJ="icon/16/apps/office-calendar.png",gG="group",gH="tabview-page-button-right-inactive",gE="decoration/window/minimize-active.png",gF="decoration/window/restore-inactive.png",gM="checkbox-checked-focused",gN="splitpane",hd="combobox/textfield",hc="button-preselected-focused",hf="decoration/window/close-active-hovered.png",he="qx/icon/Tango/16/actions/window-close.png",hh="checkbox-pressed",hg="button-disabled",hj="selected-dragover",hi="border-separator",hb="decoration/window/maximize-inactive.png",ha="dragover",hK="scrollarea",hL="scrollbar-vertical",hM="decoration/menu/checkbox-invert.gif",hN="decoration/toolbar/toolbar-handle-knob.gif",hG="icon/22/mimetypes/office-document.png",hH="button-preselected",hI="button-checked-focused",hJ="up.png",hE="best-fit",hF="decoration/tree/closed-selected.png",dR="qx.theme.modern.Appearance",dQ="text-active",dP="checkbox-disabled",dO="toolbar-button-hovered",dN="progressive-table-header",dM="decoration/table/select-column-order.png",dL="decoration/menu/radiobutton.gif",dK="decoration/arrows/forward.png",dJ="decoration/table/descending.png",dI="window-captionbar-active",ef="checkbox-checked-hovered",eg="scrollbar-slider-vertical",ed="toolbar",ee="alias",ej="decoration/window/restore-active.png",ek="decoration/table/boolean-false.png",eh="checkbox-checked-disabled",ei="icon/32/mimetypes/office-document.png",em="radiobutton-checked-disabled",en="tabview-pane",gr="decoration/arrows/rewind.png",gl="checkbox-focused",gy="top",gu="#EEE",ga="icon/16/actions/dialog-ok.png",fX="radiobutton-checked-hovered",eA="table-header-cell-hovered",gb="window",eL="text-gray",eK="decoration/menu/radiobutton-invert.gif",fF="text-placeholder",fG="slider",fH="keep-align",fI="down.png",fJ="tabview-page-button-top-active",fK="icon/32/places/folder-open.png",fL="icon/22/places/folder.png",fM="decoration/window/maximize-active.png",fC="checkbox-checked-pressed",fD="decoration/window/close-inactive.png",fY="tabview-page-button-left-active",gx="toolbar-part",gw="decoration/splitpane/knob-vertical.png",gv=".gif",gC="icon/22/places/folder-open.png",gB="radiobutton-checked-pressed",gA="table-statusbar",gz="radiobutton-pressed",gt="window-captionbar-inactive",gs="copy",el="radiobutton-focused",eP="decoration/arrows/down-invert.png",eO="decoration/menu/checkbox.gif",gk="decoration/splitpane/knob-horizontal.png",fb="icon/32/places/folder.png",gq="toolbar-separator",gp="tabview-page-button-bottom-active",go="decoration/arrows/up-small.png",ez="decoration/table/ascending.png",gD="decoration/arrows/up-invert.png",eo="small",eB="tabview-page-button-right-active",fw="-disabled",fx="scrollbar-horizontal",fy="progressive-table-header-cell",fz="menu-separator",fA="pane",fB="decoration/arrows/right-invert.png",gO="left.png",fE="icon/16/actions/view-refresh.png";
qx.Theme.define(dR,{appearances:{"widget":{},"root":{style:function(bx){return {backgroundColor:gY,textColor:ec,font:eV};
}},"label":{style:function(cl){return {textColor:cl.disabled?fW:undefined};
}},"move-frame":{style:function(cq){return {decorator:hq};
}},"resize-frame":fj,"dragdrop-cursor":{style:function(h){var i=fc;

if(h.copy){i=gs;
}else if(h.move){i=eI;
}else if(h.alias){i=ee;
}return {source:ep+i+gv,position:dT,offset:[2,16,2,6]};
}},"image":{style:function(C){return {opacity:!C.replacement&&C.disabled?0.3:1};
}},"atom":{},"atom/label":gW,"atom/icon":hn,"popup":{style:function(hY){return {decorator:hq,backgroundColor:hk,shadow:eX};
}},"button-frame":{alias:hs,style:function(dp){var dr,dq;

if(dp.checked&&dp.focused&&!dp.inner){dr=hI;
dq=undefined;
}else if(dp.disabled){dr=hg;
dq=undefined;
}else if(dp.pressed){dr=fs;
dq=gS;
}else if(dp.checked){dr=eu;
dq=undefined;
}else if(dp.hovered){dr=fm;
dq=gS;
}else if(dp.preselected&&dp.focused&&!dp.inner){dr=hc;
dq=gS;
}else if(dp.preselected){dr=hH;
dq=gS;
}else if(dp.focused&&!dp.inner){dr=hO;
dq=undefined;
}else{dr=hp;
dq=undefined;
}return {decorator:dr,textColor:dq,shadow:dp.invalid&&!dp.disabled?ge:undefined};
}},"button-frame/image":{style:function(bs){return {opacity:!bs.replacement&&bs.disabled?0.5:1};
}},"button":{alias:ht,include:ht,style:function(de){return {padding:[2,8],center:true};
}},"hover-button":{alias:hs,include:hs,style:function(f){return {decorator:f.hovered?fS:undefined,textColor:f.hovered?ho:undefined};
}},"splitbutton":{},"splitbutton/button":hp,"splitbutton/arrow":{alias:hp,include:hp,style:function(dn){return {icon:fU,padding:2,marginLeft:1};
}},"checkbox":{alias:hs,style:function(J){var L;

if(J.checked&&J.focused){L=gM;
}else if(J.checked&&J.disabled){L=eh;
}else if(J.checked&&J.pressed){L=fC;
}else if(J.checked&&J.hovered){L=ef;
}else if(J.checked){L=gd;
}else if(J.disabled){L=dP;
}else if(J.focused){L=gl;
}else if(J.pressed){L=hh;
}else if(J.hovered){L=gf;
}else{L=dU;
}var K=J.invalid&&!J.disabled?es:ex;
return {icon:ey+L+K+hW,gap:6};
}},"radiobutton":{alias:hs,style:function(bV){var bX;

if(bV.checked&&bV.focused){bX=eH;
}else if(bV.checked&&bV.disabled){bX=em;
}else if(bV.checked&&bV.pressed){bX=gB;
}else if(bV.checked&&bV.hovered){bX=fX;
}else if(bV.checked){bX=gL;
}else if(bV.disabled){bX=fr;
}else if(bV.focused){bX=el;
}else if(bV.pressed){bX=gz;
}else if(bV.hovered){bX=eq;
}else{bX=gX;
}var bW=bV.invalid&&!bV.disabled?es:ex;
return {icon:ey+bX+bW+hW,gap:6};
}},"textfield":{style:function(ds){var dx;
var dv=!!ds.focused;
var dw=!!ds.invalid;
var dt=!!ds.disabled;

if(dv&&dw&&!dt){dx=fN;
}else if(dv&&!dw&&!dt){dx=hy;
}else if(dt){dx=fP;
}else if(!dv&&dw&&!dt){dx=fR;
}else{dx=fQ;
}var du;

if(ds.disabled){du=fW;
}else if(ds.showingPlaceholder){du=fF;
}else{du=hT;
}return {decorator:dx,padding:[2,4,1],textColor:du};
}},"textarea":{include:gT,style:function(bk){return {padding:4};
}},"spinner":{style:function(bn){var br;
var bp=!!bn.focused;
var bq=!!bn.invalid;
var bo=!!bn.disabled;

if(bp&&bq&&!bo){br=fN;
}else if(bp&&!bq&&!bo){br=hy;
}else if(bo){br=fP;
}else if(!bp&&bq&&!bo){br=fR;
}else{br=fQ;
}return {decorator:br};
}},"spinner/textfield":{style:function(S){return {marginRight:2,padding:[2,4,1],textColor:S.disabled?fW:hT};
}},"spinner/upbutton":{alias:ht,include:ht,style:function(z){return {icon:go,padding:z.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:ht,include:ht,style:function(cj){return {icon:eS,padding:cj.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dS,"datefield/button":{alias:ea,include:ea,style:function(bw){return {icon:gJ,padding:[0,3],decorator:undefined};
}},"datefield/textfield":hd,"datefield/list":{alias:eT,include:eT,style:function(w){return {decorator:undefined};
}},"groupbox":{style:function(P){return {legendPosition:gy};
}},"groupbox/legend":{alias:hs,style:function(A){return {padding:[1,0,1,4],textColor:A.invalid?gP:dV,font:hm};
}},"groupbox/frame":{style:function(m){return {padding:12,decorator:gG};
}},"check-groupbox":fV,"check-groupbox/legend":{alias:dU,include:dU,style:function(W){return {padding:[1,0,1,4],textColor:W.invalid?gP:dV,font:hm};
}},"radio-groupbox":fV,"radio-groupbox/legend":{alias:gX,include:gX,style:function(bS){return {padding:[1,0,1,4],textColor:bS.invalid?gP:dV,font:hm};
}},"scrollarea":{style:function(bY){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bH){return {backgroundColor:gY};
}},"scrollarea/pane":hr,"scrollarea/scrollbar-x":hC,"scrollarea/scrollbar-y":hC,"scrollbar":{style:function(ig){if(ig[fv]){return {};
}return {width:ig.horizontal?undefined:16,height:ig.horizontal?16:undefined,decorator:ig.horizontal?fx:hL,padding:1};
}},"scrollbar/slider":{alias:fG,style:function(cO){return {padding:cO.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:ht,style:function(dg){var dh=dg.horizontal?hQ:eg;

if(dg.disabled){dh+=fw;
}return {decorator:dh,minHeight:dg.horizontal?undefined:9,minWidth:dg.horizontal?9:undefined};
}},"scrollbar/button":{alias:ht,include:ht,style:function(be){var bf=fn;

if(be.left){bf+=gO;
}else if(be.right){bf+=eD;
}else if(be.up){bf+=hJ;
}else{bf+=fI;
}
if(be.left||be.right){return {padding:[0,0,0,be.left?3:4],icon:bf,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bf,width:14,height:15};
}}},"scrollbar/button-begin":dX,"scrollbar/button-end":dX,"slider":{style:function(Y){var bd;
var bb=!!Y.focused;
var bc=!!Y.invalid;
var ba=!!Y.disabled;

if(bb&&bc&&!ba){bd=fN;
}else if(bb&&!bc&&!ba){bd=hy;
}else if(ba){bd=fP;
}else if(!bb&&bc&&!ba){bd=fR;
}else{bd=fQ;
}return {decorator:bd};
}},"slider/knob":{include:ht,style:function(cc){return {decorator:cc.disabled?fp:hQ,shadow:undefined,height:14,width:14};
}},"list":{alias:hK,style:function(D){var H;
var F=!!D.focused;
var G=!!D.invalid;
var E=!!D.disabled;

if(F&&G&&!E){H=fN;
}else if(F&&!G&&!E){H=hy;
}else if(E){H=fP;
}else if(!F&&G&&!E){H=fR;
}else{H=fQ;
}return {backgroundColor:hk,decorator:H};
}},"list/pane":hr,"listitem":{alias:hs,style:function(cF){var cG;

if(cF.dragover){cG=cF.selected?hj:ha;
}else{cG=cF.selected?fS:undefined;
}return {padding:cF.dragover?[4,4,2,4]:4,textColor:cF.selected?ho:undefined,decorator:cG};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ht,include:ht,style:function(bv){return {padding:5,center:true,icon:bv.vertical?fU:gV};
}},"slidebar/button-backward":{alias:ht,include:ht,style:function(dF){return {padding:5,center:true,icon:dF.vertical?ev:hP};
}},"tabview":{style:function(o){return {contentPadding:16};
}},"tabview/bar":{alias:fg,style:function(bT){var bU={marginBottom:bT.barTop?-1:0,marginTop:bT.barBottom?-4:0,marginLeft:bT.barRight?-3:0,marginRight:bT.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bT.barTop||bT.barBottom){bU.paddingLeft=5;
bU.paddingRight=7;
}else{bU.paddingTop=5;
bU.paddingBottom=7;
}return bU;
}},"tabview/bar/button-forward":{include:hS,alias:hS,style:function(bh){if(bh.barTop||bh.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eY,alias:eY,style:function(di){if(di.barTop||di.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(dG){return {decorator:en,minHeight:100,marginBottom:dG.barBottom?-1:0,marginTop:dG.barTop?-1:0,marginLeft:dG.barLeft?-1:0,marginRight:dG.barRight?-1:0};
}},"tabview-page":hr,"tabview-page/button":{alias:hs,style:function(bA){var bG,bC=0;
var bF=0,bB=0,bD=0,bE=0;

if(bA.checked){if(bA.barTop){bG=fJ;
bC=[6,14];
bD=bA.firstTab?0:-5;
bE=bA.lastTab?0:-5;
}else if(bA.barBottom){bG=gp;
bC=[6,14];
bD=bA.firstTab?0:-5;
bE=bA.lastTab?0:-5;
}else if(bA.barRight){bG=eB;
bC=[6,13];
bF=bA.firstTab?0:-5;
bB=bA.lastTab?0:-5;
}else{bG=fY;
bC=[6,13];
bF=bA.firstTab?0:-5;
bB=bA.lastTab?0:-5;
}}else{if(bA.barTop){bG=gh;
bC=[4,10];
bF=4;
bD=bA.firstTab?5:1;
bE=1;
}else if(bA.barBottom){bG=eC;
bC=[4,10];
bB=4;
bD=bA.firstTab?5:1;
bE=1;
}else if(bA.barRight){bG=gH;
bC=[4,10];
bE=5;
bF=bA.firstTab?5:1;
bB=1;
bD=1;
}else{bG=gg;
bC=[4,10];
bD=5;
bF=bA.firstTab?5:1;
bB=1;
bE=1;
}}return {zIndex:bA.checked?10:5,decorator:bG,padding:bC,marginTop:bF,marginBottom:bB,marginLeft:bD,marginRight:bE,textColor:bA.checked?dQ:eJ};
}},"tabview-page/button/close-button":{alias:hs,style:function(O){return {icon:he};
}},"toolbar":{style:function(ck){return {decorator:ed,spacing:2};
}},"toolbar/part":{style:function(cP){return {decorator:gx,spacing:2};
}},"toolbar/part/container":{style:function(id){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(T){return {source:hN,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hs,style:function(df){return {marginTop:2,marginBottom:2,padding:(df.pressed||df.checked||df.hovered)&&!df.disabled||(df.disabled&&df.checked)?3:5,decorator:df.pressed||(df.checked&&!df.hovered)||(df.checked&&df.disabled)?gm:df.hovered&&!df.disabled?dO:undefined};
}},"toolbar-menubutton":{alias:hA,include:hA,style:function(dc){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hn,include:hn,style:function(bj){return {source:eS};
}},"toolbar-splitbutton":{style:function(bm){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hA,include:hA,style:function(cY){return {icon:fU,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hA,include:hA,style:function(cX){return {padding:cX.pressed||cX.checked?1:cX.hovered?1:3,icon:fU,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(dk){return {decorator:gq,margin:7};
}},"tree":hx,"tree-item":{style:function(ci){return {padding:[2,6],textColor:ci.selected?ho:undefined,decorator:ci.selected?fS:undefined};
}},"tree-item/icon":{include:hn,style:function(k){return {paddingRight:5};
}},"tree-item/label":gW,"tree-item/open":{include:hn,style:function(ca){var cb;

if(ca.selected&&ca.opened){cb=gK;
}else if(ca.selected&&!ca.opened){cb=hF;
}else if(ca.opened){cb=eU;
}else{cb=hR;
}return {padding:[0,5,0,2],source:cb};
}},"tree-folder":{include:hu,alias:hu,style:function(bL){var bM;

if(bL.small){bM=bL.opened?er:eb;
}else if(bL.large){bM=bL.opened?fK:fb;
}else{bM=bL.opened?gC:fL;
}return {icon:bM};
}},"tree-file":{include:hu,alias:hu,style:function(ic){return {icon:ic.small?eQ:ic.large?ei:hG};
}},"treevirtual":ew,"treevirtual-folder":{style:function(bR){return {icon:bR.opened?er:eb};
}},"treevirtual-file":{include:eW,alias:eW,style:function(bu){return {icon:eQ};
}},"treevirtual-line":{style:function(ie){return {icon:dW};
}},"treevirtual-contract":{style:function(cU){return {icon:eU,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cI){return {icon:hR,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hv,"treevirtual-only-expand":gU,"treevirtual-start-contract":hv,"treevirtual-start-expand":gU,"treevirtual-end-contract":hv,"treevirtual-end-expand":gU,"treevirtual-cross-contract":hv,"treevirtual-cross-expand":gU,"treevirtual-end":{style:function(bI){return {icon:dW};
}},"treevirtual-cross":{style:function(cE){return {icon:dW};
}},"tooltip":{include:hz,style:function(X){return {backgroundColor:fo,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hs,"tooltip-error":{include:hw,style:function(q){return {textColor:ho,placeMethod:hr,offset:[0,0,0,14],marginTop:-2,position:dT,showTimeout:100,hideTimeout:10000,decorator:eN,shadow:fh,font:hm};
}},"tooltip-error/atom":hs,"window":{style:function(ch){return {shadow:eF,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(dm){return {decorator:gb};
}},"window/captionbar":{style:function(cs){return {decorator:cs.active?dI:gt,textColor:cs.active?gQ:eL,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bK){return {margin:[5,0,3,6]};
}},"window/title":{style:function(cW){return {alignY:hl,font:hm,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hs,style:function(cr){return {icon:cr.active?cr.hovered?gc:gE:gI,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hs,style:function(dj){return {icon:dj.active?dj.hovered?eG:ej:gF,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hs,style:function(x){return {icon:x.active?x.hovered?et:fM:hb,margin:[4,8,2,0]};
}},"window/close-button":{alias:hs,style:function(e){return {icon:e.active?e.hovered?hf:fu:fD,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(cT){return {padding:[2,6],decorator:eM,minHeight:18};
}},"window/statusbar-text":{style:function(j){return {font:eo};
}},"iframe":{style:function(I){return {decorator:hq};
}},"resizer":{style:function(bg){return {decorator:fA};
}},"splitpane":{style:function(n){return {decorator:gN};
}},"splitpane/splitter":{style:function(cp){return {width:cp.horizontal?3:undefined,height:cp.vertical?3:undefined,backgroundColor:hX};
}},"splitpane/splitter/knob":{style:function(dD){return {source:dD.horizontal?gk:gw};
}},"splitpane/slider":{style:function(cz){return {width:cz.horizontal?3:undefined,height:cz.vertical?3:undefined,backgroundColor:hX};
}},"selectbox":{alias:ht,include:ht,style:function(cD){return {padding:[2,8]};
}},"selectbox/atom":hs,"selectbox/popup":hz,"selectbox/list":{alias:hx},"selectbox/arrow":{include:hn,style:function(co){return {source:fU,paddingLeft:5};
}},"datechooser":{style:function(r){var v;
var t=!!r.focused;
var u=!!r.invalid;
var s=!!r.disabled;

if(t&&u&&!s){v=fN;
}else if(t&&!u&&!s){v=hy;
}else if(s){v=fP;
}else if(!t&&u&&!s){v=fR;
}else{v=fQ;
}return {padding:2,decorator:v,backgroundColor:hk};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:ht,alias:ht,style:function(da){var db={padding:[2,4],shadow:undefined};

if(da.lastYear){db.icon=gr;
db.marginRight=1;
}else if(da.lastMonth){db.icon=hP;
}else if(da.nextYear){db.icon=dK;
db.marginLeft=1;
}else if(da.nextMonth){db.icon=gV;
}return db;
}},"datechooser/last-year-button-tooltip":hw,"datechooser/last-month-button-tooltip":hw,"datechooser/next-year-button-tooltip":hw,"datechooser/next-month-button-tooltip":hw,"datechooser/last-year-button":hD,"datechooser/last-month-button":hD,"datechooser/next-month-button":hD,"datechooser/next-year-button":hD,"datechooser/month-year-label":{style:function(cR){return {font:hm,textAlign:gR,textColor:cR.disabled?fW:undefined};
}},"datechooser/date-pane":{style:function(cM){return {textColor:cM.disabled?fW:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(ce){return {textColor:ce.disabled?fW:ce.weekend?hV:undefined,textAlign:gR,paddingTop:2,backgroundColor:eR};
}},"datechooser/week":{style:function(cw){return {textAlign:gR,padding:[2,4],backgroundColor:eR};
}},"datechooser/day":{style:function(b){return {textAlign:gR,decorator:b.disabled?undefined:b.selected?fS:undefined,textColor:b.disabled?fW:b.selected?ho:b.otherMonth?hV:undefined,font:b.today?hm:undefined,padding:[2,4]};
}},"combobox":{style:function(dy){var dC;
var dA=!!dy.focused;
var dB=!!dy.invalid;
var dz=!!dy.disabled;

if(dA&&dB&&!dz){dC=fN;
}else if(dA&&!dB&&!dz){dC=hy;
}else if(dz){dC=fP;
}else if(!dA&&dB&&!dz){dC=fR;
}else{dC=fQ;
}return {decorator:dC};
}},"combobox/popup":hz,"combobox/list":{alias:hx},"combobox/button":{include:ht,alias:ht,style:function(cA){var cB={icon:fU,padding:2};

if(cA.selected){cB.decorator=hO;
}return cB;
}},"combobox/textfield":{include:gT,style:function(g){return {decorator:undefined};
}},"menu":{style:function(cx){var cy={decorator:ff,shadow:eX,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cx.submenu||cx.contextmenu?hE:fH};

if(cx.submenu){cy.position=dT;
cy.offset=[-2,-3];
}return cy;
}},"menu/slidebar":gn,"menu-slidebar":hr,"menu-slidebar-button":{style:function(bJ){return {decorator:bJ.hovered?fS:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hU,style:function(a){return {icon:a.hovered?gD:ev};
}},"menu-slidebar/button-forward":{include:hU,style:function(cN){return {icon:cN.hovered?eP:fU};
}},"menu-separator":{style:function(cv){return {height:0,decorator:fz,margin:[4,2]};
}},"menu-button":{alias:hs,style:function(d){return {decorator:d.selected?fS:undefined,textColor:d.selected?ho:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hn,style:function(cV){return {alignY:hl};
}},"menu-button/label":{include:gW,style:function(V){return {alignY:hl,padding:1};
}},"menu-button/shortcut":{include:gW,style:function(cg){return {alignY:hl,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hn,style:function(M){return {source:M.selected?fB:gV,alignY:hl};
}},"menu-checkbox":{alias:fO,include:fO,style:function(dl){return {icon:!dl.checked?undefined:dl.selected?hM:eO};
}},"menu-radiobutton":{alias:fO,include:fO,style:function(cH){return {icon:!cH.checked?undefined:cH.selected?eK:dL};
}},"menubar":{style:function(cn){return {decorator:gj};
}},"menubar-button":{alias:hs,style:function(cJ){return {decorator:cJ.pressed||cJ.hovered?fS:undefined,textColor:cJ.pressed||cJ.hovered?ho:undefined,padding:[3,8]};
}},"colorselector":hr,"colorselector/control-bar":hr,"colorselector/control-pane":hr,"colorselector/visual-pane":fV,"colorselector/preset-grid":hr,"colorselector/colorbucket":{style:function(bi){return {decorator:hq,width:16,height:16};
}},"colorselector/preset-field-set":fV,"colorselector/input-field-set":fV,"colorselector/preview-field-set":fV,"colorselector/hex-field-composite":hr,"colorselector/hex-field":gT,"colorselector/rgb-spinner-composite":hr,"colorselector/rgb-spinner-red":hB,"colorselector/rgb-spinner-green":hB,"colorselector/rgb-spinner-blue":hB,"colorselector/hsb-spinner-composite":hr,"colorselector/hsb-spinner-hue":hB,"colorselector/hsb-spinner-saturation":hB,"colorselector/hsb-spinner-brightness":hB,"colorselector/preview-content-old":{style:function(N){return {decorator:hq,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bP){return {decorator:hq,backgroundColor:hk,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ib){return {decorator:hq,margin:5};
}},"colorselector/brightness-field":{style:function(cQ){return {decorator:hq,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hr,"colorselector/hue-saturation-handle":hr,"colorselector/brightness-pane":hr,"colorselector/brightness-handle":hr,"colorpopup":{alias:hz,include:hz,style:function(bN){return {padding:5,backgroundColor:gY};
}},"colorpopup/field":{style:function(bQ){return {decorator:hq,margin:2,width:14,height:14,backgroundColor:hk};
}},"colorpopup/selector-button":hp,"colorpopup/auto-button":hp,"colorpopup/preview-pane":fV,"colorpopup/current-preview":{style:function(cu){return {height:20,padding:4,marginLeft:4,decorator:hq,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(dH){return {height:20,padding:4,marginRight:4,decorator:hq,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hp,include:hp,style:function(B){return {icon:ga};
}},"colorpopup/colorselector-cancelbutton":{alias:hp,include:hp,style:function(cS){return {icon:gi};
}},"table":{alias:hr,style:function(cm){return {decorator:ew};
}},"table-header":{},"table/statusbar":{style:function(ia){return {decorator:gA,padding:[0,2]};
}},"table/column-button":{alias:ht,style:function(ct){return {decorator:eE,padding:3,icon:dM};
}},"table-column-reset-button":{include:fO,alias:fO,style:function(){return {icon:fE};
}},"table-scroller":hr,"table-scroller/scrollbar-x":hC,"table-scroller/scrollbar-y":hC,"table-scroller/header":{style:function(R){return {decorator:fq};
}},"table-scroller/pane":{style:function(by){return {backgroundColor:ft};
}},"table-scroller/focus-indicator":{style:function(cd){return {decorator:fi};
}},"table-scroller/resize-line":{style:function(cC){return {backgroundColor:hi,width:2};
}},"table-header-cell":{alias:hs,style:function(c){return {minWidth:13,minHeight:20,padding:c.hovered?[3,4,2,4]:[3,4],decorator:c.hovered?eA:fe,sortIcon:c.sorted?(c.sortedAscending?ez:dJ):undefined};
}},"table-header-cell/label":{style:function(bl){return {minWidth:0,alignY:hl,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bt){return {alignY:hl,alignX:dY};
}},"table-header-cell/icon":{style:function(dd){return {minWidth:0,alignY:hl,paddingRight:5};
}},"table-editor-textfield":{include:gT,style:function(bz){return {decorator:undefined,padding:[2,2],backgroundColor:hk};
}},"table-editor-selectbox":{include:fa,alias:fa,style:function(cf){return {padding:[0,2],backgroundColor:hk};
}},"table-editor-combobox":{include:dS,alias:dS,style:function(cL){return {decorator:undefined,backgroundColor:hk};
}},"progressive-table-header":{alias:hr,style:function(cK){return {decorator:dN};
}},"progressive-table-header-cell":{alias:hs,style:function(Q){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fy};
}},"app-header":{style:function(l){return {font:hm,textColor:ho,padding:[8,12],decorator:fk};
}},"virtual-list":hx,"virtual-list/row-layer":fl,"row-layer":{style:function(dE){return {colorEven:gQ,colorOdd:gu};
}},"column-layer":hr,"cell":{style:function(p){return {textColor:p.selected?ho:ec,padding:[3,6],font:eV};
}},"cell-string":fT,"cell-number":{include:fT,style:function(bO){return {textAlign:dY};
}},"cell-image":fT,"cell-boolean":{include:fT,style:function(y){return {iconTrue:fd,iconFalse:ek};
}},"cell-atom":fT,"cell-date":fT,"cell-html":fT,"htmlarea":{"include":hr,style:function(U){return {backgroundColor:gQ};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cX={};
this.add(a,h);
},members:{__cX:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__cX[k]){return this.__cX[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__cX[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(r,s){this.__cX[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__cX[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__cX=null;
}});
})();
(function(){var K="px",J="qx.client",I="div",H="img",G="",F="no-repeat",E="scale-x",D="mshtml",C="scale",B="scale-y",bh="qx/icon",bf="repeat",be=".png",bd="crop",bc="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bb='<div style="',ba="repeat-y",Y='<img src="',X="qx.bom.element.Decoration",W="', sizingMethod='",R="png",S="')",P='"></div>',Q='"/>',N='" style="',O="none",L="webkit",M=" ",T="repeat-x",U="DXImageTransform.Microsoft.AlphaImageLoader",V="absolute";
qx.Class.define(X,{statics:{DEBUG:false,__hS:{},__hT:qx.core.Variant.isSet(J,D),__hU:qx.core.Variant.select(J,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hV:{"scale-x":H,"scale-y":H,"scale":H,"repeat":I,"no-repeat":I,"repeat-x":I,"repeat-y":I},update:function(f,g,h,i){var k=this.getTagName(h,g);

if(k!=f.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var l=this.getAttributes(g,h,i);

if(k===H){f.src=l.src;
}if(f.style.backgroundPosition!=G&&l.style.backgroundPosition===undefined){l.style.backgroundPosition=null;
}if(f.style.clip!=G&&l.style.clip===undefined){l.style.clip=null;
}var j=qx.bom.element.Style;
j.setStyles(f,l.style);
if(this.__hT){try{f.filters[U].apply();
}catch(e){}}},create:function(n,o,p){var q=this.getTagName(o,n);
var s=this.getAttributes(n,o,p);
var r=qx.bom.element.Style.compile(s.style);

if(q===H){return Y+s.src+N+r+Q;
}else{return bb+r+P;
}},getTagName:function(bq,br){if(qx.core.Variant.isSet(J,D)){if(br&&this.__hT&&this.__hU[bq]&&qx.lang.String.endsWith(br,be)){return I;
}}return this.__hV[bq];
},getAttributes:function(bi,bj,bk){if(!bk){bk={};
}
if(!bk.position){bk.position=V;
}
if(qx.core.Variant.isSet(J,D)){bk.fontSize=0;
bk.lineHeight=0;
}else if(qx.core.Variant.isSet(J,L)){bk.WebkitUserDrag=O;
}var bm=qx.util.ResourceManager.getInstance().getImageFormat(bi)||qx.io.ImageLoader.getFormat(bi);
{};
var bl;
if(this.__hT&&this.__hU[bj]&&bm===R){bl=this.__hY(bk,bj,bi);
}else{if(bj===C){bl=this.__ia(bk,bj,bi);
}else if(bj===E||bj===B){bl=this.__ib(bk,bj,bi);
}else{bl=this.__ie(bk,bj,bi);
}}return bl;
},__hW:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+K;
}
if(bW.height==null&&bY!=null){bW.height=bY+K;
}return bW;
},__hX:function(bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bn)||qx.io.ImageLoader.getWidth(bn);
var bp=qx.util.ResourceManager.getInstance().getImageHeight(bn)||qx.io.ImageLoader.getHeight(bn);
return {width:bo,height:bp};
},__hY:function(bQ,bR,bS){var bV=this.__hX(bS);
bQ=this.__hW(bQ,bV.width,bV.height);
var bU=bR==F?bd:C;
var bT=bc+qx.util.ResourceManager.getInstance().toUri(bS)+W+bU+S;
bQ.filter=bT;
bQ.backgroundImage=bQ.backgroundRepeat=G;
return {style:bQ};
},__ia:function(bE,bF,bG){var bH=qx.util.ResourceManager.getInstance().toUri(bG);
var bI=this.__hX(bG);
bE=this.__hW(bE,bI.width,bI.height);
return {src:bH,style:bE};
},__ib:function(t,u,v){var z=qx.util.ResourceManager.getInstance();
var y=z.isClippedImage(v);
var A=this.__hX(v);

if(y){var x=z.getData(v);
var w=z.toUri(x[4]);

if(u===E){t=this.__ic(t,x,A.height);
}else{t=this.__id(t,x,A.width);
}return {src:w,style:t};
}else{{};

if(u==E){t.height=A.height==null?null:A.height+K;
}else if(u==B){t.width=A.width==null?null:A.width+K;
}var w=z.toUri(v);
return {src:w,style:t};
}},__ic:function(a,b,c){var d=qx.util.ResourceManager.getInstance().getImageHeight(b[4]);
a.clip={top:-b[6],height:c};
a.height=d+K;
if(a.top!=null){a.top=(parseInt(a.top,10)+b[6])+K;
}else if(a.bottom!=null){a.bottom=(parseInt(a.bottom,10)+c-d-b[6])+K;
}return a;
},__id:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bB[4]);
bA.clip={left:-bB[5],width:bC};
bA.width=bD+K;
if(bA.left!=null){bA.left=(parseInt(bA.left,10)+bB[5])+K;
}else if(bA.right!=null){bA.right=(parseInt(bA.right,10)+bC-bD-bB[5])+K;
}return bA;
},__ie:function(bs,bt,bu){var bz=qx.util.ResourceManager.getInstance().isClippedImage(bu);
var by=this.__hX(bu);
if(bz&&bt!==bf){var bx=qx.util.ResourceManager.getInstance().getData(bu);
var bw=qx.bom.element.Background.getStyles(bx[4],bt,bx[5],bx[6]);

for(var bv in bw){bs[bv]=bw[bv];
}
if(by.width!=null&&bs.width==null&&(bt==ba||bt===F)){bs.width=by.width+K;
}
if(by.height!=null&&bs.height==null&&(bt==T||bt===F)){bs.height=by.height+K;
}return {style:bs};
}else{{};
bs=this.__hW(bs,by.width,by.height);
bs=this.__if(bs,bu,bt);
return {style:bs};
}},__if:function(bJ,bK,bL){var top=null;
var bP=null;

if(bJ.backgroundPosition){var bM=bJ.backgroundPosition.split(M);
bP=parseInt(bM[0]);

if(isNaN(bP)){bP=bM[0];
}top=parseInt(bM[1]);

if(isNaN(top)){top=bM[1];
}}var bO=qx.bom.element.Background.getStyles(bK,bL,bP,top);

for(var bN in bO){bJ[bN]=bO[bN];
}if(bJ.filter){bJ.filter=G;
}return bJ;
},__ig:function(m){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(m)&&m.indexOf(bh)==-1){if(!this.__hS[m]){qx.log.Logger.debug("Potential clipped image candidate: "+m);
this.__hS[m]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(J,{"mshtml":function(){return qx.bom.element.Decoration.__hT;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(v){if(!v){return k;
}var A=v.left;
var top=v.top;
var z=v.width;
var y=v.height;
var w,x;

if(A==null){w=(z==null?n:z+m);
A=n;
}else{w=(z==null?n:A+z+m);
A=A+m;
}
if(top==null){x=(y==null?n:y+m);
top=n;
}else{x=(y==null?n:top+y+m);
top=top+m;
}return d+top+l+w+l+x+l+A+i;
},get:function(C,D){var F=qx.bom.element.Style.get(C,c,D,false);
var K,top,I,H;
var E,G;

if(typeof F===e&&F!==n&&F!==h){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(l);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===n){K=null;
}
if(top===n){top=null;
}
if(E===n){E=null;
}
if(G===n){G=null;
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
},set:function(o,p){if(!p){o.style.clip=a;
return;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}o.style.clip=j+top+l+q+l+r+l+u+g;
},reset:function(B){B.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__hf:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(o){return i+(this.__hf[o]||o)+g;
},get:function(p,q){return qx.bom.element.Style.get(p,e,q,false);
},set:function(b,c){b.style.cursor=this.__hf[c]||c;
},reset:function(a){a.style.cursor=j;
}}});
})();
(function(){var v="",u="qx.client",t=";",s="filter",r="opacity:",q="opacity",p="MozOpacity",o=");",n=")",m="zoom:1;filter:alpha(opacity=",j="qx.bom.element.Opacity",l="alpha(opacity=",k="-moz-opacity:";
qx.Class.define(j,{statics:{compile:qx.core.Variant.select(u,{"mshtml":function(K){if(K>=1){return v;
}
if(K<0.00001){K=0;
}return m+(K*100)+o;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return k+w+t;
}else{return r+w+t;
}},"default":function(A){if(A==1){return v;
}return r+A+t;
}}),set:qx.core.Variant.select(u,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,s,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v)+l+y*100+n;
},"gecko":function(B,C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){B.style.MozOpacity=C;
}else{B.style.opacity=C;
}},"default":function(e,f){if(f==1){f=v;
}e.style.opacity=f;
}}),reset:qx.core.Variant.select(u,{"mshtml":function(I){var J=qx.bom.element.Style.get(I,s,qx.bom.element.Style.COMPUTED_MODE,false);
I.style.filter=J.replace(/alpha\([^\)]*\)/gi,v);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=v;
}else{H.style.opacity=v;
}},"default":function(G){G.style.opacity=v;
}}),get:qx.core.Variant.select(u,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,s,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(g,h){var i=qx.bom.element.Style.get(g,qx.bom.client.Engine.VERSION<1.7?p:q,h,false);

if(i==0.999999){i=1.0;
}
if(i!=null){return parseFloat(i);
}return 1.0;
},"default":function(D,E){var F=qx.bom.element.Style.get(D,q,E,false);

if(F!=null){return parseFloat(F);
}return 1.0;
}})}});
})();
(function(){var v="qx.client",u="",t="boxSizing",s="box-sizing",r=":",q="border-box",p="qx.bom.element.BoxSizing",o="KhtmlBoxSizing",n="-moz-box-sizing",m="WebkitBoxSizing",h=";",k="-khtml-box-sizing",j="content-box",g="-webkit-box-sizing",f="MozBoxSizing";
qx.Class.define(p,{statics:{__hg:qx.core.Variant.select(v,{"mshtml":null,"webkit":[t,o,m],"gecko":[f],"opera":[t]}),__hh:qx.core.Variant.select(v,{"mshtml":null,"webkit":[s,k,g],"gecko":[n],"opera":[s]}),__hi:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__hj:function(w){var x=this.__hi;
return x.tags[w.tagName.toLowerCase()]||x.types[w.type];
},compile:qx.core.Variant.select(v,{"mshtml":function(d){{};
},"default":function(a){var c=this.__hh;
var b=u;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+r+a+h;
}}return b;
}}),get:qx.core.Variant.select(v,{"mshtml":function(E){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(E))){if(!this.__hj(E)){return j;
}}return q;
},"default":function(y){var A=this.__hg;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==u){return z;
}}}return u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(F,G){{};
},"default":function(B,C){var D=this.__hg;

if(D){for(var i=0,l=D.length;i<l;i++){B.style[D[i]]=C;
}}}}),reset:function(e){this.set(e,u);
}}});
})();
(function(){var bF="",bE="qx.client",bD="hidden",bC="-moz-scrollbars-none",bB="overflow",bA=";",bz="overflowY",by=":",bx="overflowX",bw="overflow:",bR="none",bQ="scroll",bP="borderLeftStyle",bO="borderRightStyle",bN="div",bM="borderRightWidth",bL="overflow-y",bK="borderLeftWidth",bJ="-moz-scrollbars-vertical",bI="100px",bG="qx.bom.element.Overflow",bH="overflow-x";
qx.Class.define(bG,{statics:{__he:null,getScrollbarWidth:function(){if(this.__he!==null){return this.__he;
}var bf=qx.bom.element.Style;
var bh=function(O,P){return parseInt(bf.get(O,P))||0;
};
var bi=function(W){return (bf.get(W,bO)==bR?0:bh(W,bM));
};
var bg=function(bv){return (bf.get(bv,bP)==bR?0:bh(bv,bK));
};
var bk=qx.core.Variant.select(bE,{"mshtml":function(X){if(bf.get(X,bz)==bD||X.clientWidth==0){return bi(X);
}return Math.max(0,X.offsetWidth-X.clientLeft-X.clientWidth);
},"default":function(k){if(k.clientWidth==0){var l=bf.get(k,bB);
var m=(l==bQ||l==bJ?16:0);
return Math.max(0,bi(k)+m);
}return Math.max(0,(k.offsetWidth-k.clientWidth-bg(k)));
}});
var bj=function(F){return bk(F)-bi(F);
};
var t=document.createElement(bN);
var s=t.style;
s.height=s.width=bI;
s.overflow=bQ;
document.body.appendChild(t);
var c=bj(t);
this.__he=c?c:16;
document.body.removeChild(t);
return this.__he;
},_compile:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(i,j){if(j==bD){j=bC;
}return bw+j+bA;
}:
function(g,h){return g+by+h+bA;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(br,bs){return bw+bs+bA;
}:
function(bb,bc){return bb+by+bc+bA;
},"default":function(q,r){return q+by+r+bA;
}}),compileX:function(G){return this._compile(bH,G);
},compileY:function(K){return this._compile(bL,K);
},getX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bm,bn){var bo=qx.bom.element.Style.get(bm,bB,bn,false);

if(bo===bC){bo=bD;
}return bo;
}:
function(H,I){return qx.bom.element.Style.get(H,bx,I,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ca,cb){return qx.bom.element.Style.get(ca,bB,cb,false);
}:
function(v,w){return qx.bom.element.Style.get(v,bx,w,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bx,d,false);
}}),setX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==bD){f=bC;
}e.style.overflow=f;
}:
function(D,E){D.style.overflowX=E;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){S.style.overflow=T;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(B,C){B.style.overflowX=C;
}}),resetX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(a){a.style.overflow=bF;
}:
function(bW){bW.style.overflowX=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=bF;
}:
function(L,M){L.style.overflowX=bF;
},"default":function(bl){bl.style.overflowX=bF;
}}),getY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(n,o){var p=qx.bom.element.Style.get(n,bB,o,false);

if(p===bC){p=bD;
}return p;
}:
function(z,A){return qx.bom.element.Style.get(z,bz,A,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,bB,bY,false);
}:
function(bt,bu){return qx.bom.element.Style.get(bt,bz,bu,false);
},"default":function(bd,be){return qx.bom.element.Style.get(bd,bz,be,false);
}}),setY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bp,bq){if(bq===bD){bq=bC;
}bp.style.overflow=bq;
}:
function(Q,R){Q.style.overflowY=R;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(bS,bT){bS.style.overflowY=bT;
},"default":function(Y,ba){Y.style.overflowY=ba;
}}),resetY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bF;
}:
function(J){J.style.overflowY=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bU,bV){bU.style.overflow=bF;
}:
function(x,y){x.style.overflowY=bF;
},"default":function(N){N.style.overflowY=bF;
}})}});
})();
(function(){var u="",t="qx.client",s="user-select",r="userSelect",q="appearance",p="style",o="MozUserModify",n="px",m="-webkit-appearance",l="styleFloat",Q="-webkit-user-select",P="-moz-appearance",O="pixelHeight",N="MozAppearance",M=":",L="pixelTop",K="pixelLeft",J="text-overflow",I="-moz-user-select",H="MozUserSelect",B="qx.bom.element.Style",C="-moz-user-modify",z="-webkit-user-modify",A="WebkitUserSelect",x="-o-text-overflow",y="pixelRight",v="cssFloat",w="pixelWidth",D="pixelBottom",E=";",G="WebkitUserModify",F="WebkitAppearance";
qx.Class.define(B,{statics:{__hk:{styleNames:{"float":qx.core.Variant.select(t,{"mshtml":l,"default":v}),"appearance":qx.core.Variant.select(t,{"gecko":N,"webkit":F,"default":q}),"userSelect":qx.core.Variant.select(t,{"gecko":H,"webkit":A,"default":r}),"userModify":qx.core.Variant.select(t,{"gecko":o,"webkit":G,"default":r})},cssNames:{"appearance":qx.core.Variant.select(t,{"gecko":P,"webkit":m,"default":q}),"userSelect":qx.core.Variant.select(t,{"gecko":I,"webkit":Q,"default":s}),"userModify":qx.core.Variant.select(t,{"gecko":C,"webkit":z,"default":s}),"textOverflow":qx.core.Variant.select(t,{"opera":x,"default":J})},mshtmlPixel:{width:w,height:O,left:K,right:y,top:L,bottom:D},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__hl:{},compile:function(br){var bv=[];
var bz=this.__hk;
var by=bz.special;
var bw=bz.cssNames;
var bu=this.__hl;
var bx=qx.lang.String;
var name,bt,bs;

for(name in br){bs=br[name];

if(bs==null){continue;
}name=bw[name]||name;
if(by[name]){bv.push(by[name].compile(bs));
}else{bt=bu[name];

if(!bt){bt=bu[name]=bx.hyphenate(name);
}bv.push(bt,M,bs,E);
}}return bv.join(u);
},setCss:qx.core.Variant.select(t,{"mshtml":function(bo,bp){bo.style.cssText=bp;
},"default":function(R,S){R.setAttribute(p,S);
}}),getCss:qx.core.Variant.select(t,{"mshtml":function(bq){return bq.style.cssText.toLowerCase();
},"default":function(X){return X.getAttribute(p);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(T,name,U,V){{};
var W=this.__hk;
name=W.styleNames[name]||name;
if(V!==false&&W.special[name]){return W.special[name].set(T,U);
}else{T.style[name]=U!==null?U:u;
}},setStyles:function(bf,bg,bh){{};
var bn=this.__hk;
var bk=bn.styleNames;
var bm=bn.special;
var bi=bf.style;

for(var bl in bg){var bj=bg[bl];
var name=bk[bl]||bl;

if(bj===undefined){if(bh!==false&&bm[name]){bm[name].reset(bf);
}else{bi[name]=u;
}}else{if(bh!==false&&bm[name]){bm[name].set(bf,bj);
}else{bi[name]=bj!==null?bj:u;
}}}},reset:function(i,name,j){var k=this.__hk;
name=k.styleNames[name]||name;
if(j!==false&&k.special[name]){return k.special[name].reset(i);
}else{i.style[name]=u;
}},get:qx.core.Variant.select(t,{"mshtml":function(a,name,b,c){var h=this.__hk;
name=h.styleNames[name]||name;
if(c!==false&&h.special[name]){return h.special[name].get(a,b);
}if(!a.currentStyle){return a.style[name]||u;
}switch(b){case this.LOCAL_MODE:return a.style[name]||u;
case this.CASCADED_MODE:return a.currentStyle[name]||u;
default:var g=a.currentStyle[name]||u;
if(/^-?[\.\d]+(px)?$/i.test(g)){return g;
}var f=h.mshtmlPixel[name];

if(f){var d=a.style[name];
a.style[name]=g||0;
var e=a.style[f]+n;
a.style[name]=d;
return e;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(g)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return g;
}},"default":function(Y,name,ba,bb){var be=this.__hk;
name=be.styleNames[name]||name;
if(bb!==false&&be.special[name]){return be.special[name].get(Y,ba);
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||u;
case this.CASCADED_MODE:if(Y.currentStyle){return Y.currentStyle[name]||u;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bc=qx.dom.Node.getDocument(Y);
var bd=bc.defaultView.getComputedStyle(Y,null);
return bd?bd[name]:u;
}}})}});
})();
(function(){var l="CSS1Compat",k="position:absolute;width:0;height:0;width:1",j="qx.bom.Document",i="1px",h="qx.client",g="div";
qx.Class.define(j,{statics:{isQuirksMode:qx.core.Variant.select(h,{"mshtml":function(p){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (p||window).document.compatMode!==l;
}},"webkit":function(e){if(document.compatMode===undefined){var f=(e||window).document.createElement(g);
f.style.cssText=k;
return f.style.width===i?true:false;
}else{return (e||window).document.compatMode!==l;
}},"default":function(d){return (d||window).document.compatMode!==l;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
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
(function(){var f="qx.client",e="qx.bom.Viewport";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientWidth;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientWidth:n.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerHeight;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollTop||l.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var n="qx.client",m="load",k="qx.io.ImageLoader";
qx.Bootstrap.define(k,{statics:{__ih:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(A){var B=this.__ih[A];
return !!(B&&B.loaded);
},isFailed:function(h){var j=this.__ih[h];
return !!(j&&j.failed);
},isLoading:function(o){var p=this.__ih[o];
return !!(p&&p.loading);
},getFormat:function(q){var r=this.__ih[q];
return r?r.format:null;
},getSize:function(a){var b=this.__ih[a];
return b?
{width:b.width,height:b.height}:this.__ii;
},getWidth:function(G){var H=this.__ih[G];
return H?H.width:null;
},getHeight:function(C){var D=this.__ih[C];
return D?D.height:null;
},load:function(t,u,v){var w=this.__ih[t];

if(!w){w=this.__ih[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ik,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
}},__ik:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__ih[d];
if(event.type===m){e.loaded=true;
e.width=this.__il(c);
e.height=this.__im(c);
var f=this.__ij.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__il:qx.core.Variant.select(n,{"gecko":function(F){return F.naturalWidth;
},"default":function(s){return s.width;
}}),__im:qx.core.Variant.select(n,{"gecko":function(z){return z.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__in:[i,null,h,b,null,j,e,null,j],__io:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ip:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__ip(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__in;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__io;
}var G=this.__ip(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var l="_applyTheme",k="qx.theme.manager.Color",j="Theme",i="changeTheme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:j,nullable:true,apply:l,event:i}},members:{_applyTheme:function(a){var b={};

if(a){var c=a.colors;
var d=qx.util.ColorUtil;
var e;

for(var f in c){e=c[f];

if(typeof e===h){if(!d.isCssString(e)){throw new Error("Could not parse color: "+e);
}}else if(e instanceof Array){e=d.rgbToRgbString(e);
}else{throw new Error("Could not parse color: "+e);
}b[f]=e;
}}this._setDynamic(b);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&(n.colors[m]!==undefined)){o[m]=n.colors[m];
return true;
}return false;
}}});
})();
(function(){var k=",",j="rgb(",h=")",e="qx.theme.manager.Color",d="qx.util.ColorUtil";
qx.Class.define(d,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(m){return this.NAMED[m]!==undefined;
},isSystemColor:function(n){return this.SYSTEM[n]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(e);
},isThemedColor:function(R){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(R);
},stringToRgb:function(I){if(this.supportsThemes()&&this.isThemedColor(I)){var I=qx.theme.manager.Color.getInstance().resolveDynamic(I);
}
if(this.isNamedColor(I)){return this.NAMED[I];
}else if(this.isSystemColor(I)){throw new Error("Could not convert system colors to RGB: "+I);
}else if(this.isRgbString(I)){return this.__cS();
}else if(this.isHex3String(I)){return this.__cU();
}else if(this.isHex6String(I)){return this.__cV();
}throw new Error("Could not parse color: "+I);
},cssStringToRgb:function(L){if(this.isNamedColor(L)){return this.NAMED[L];
}else if(this.isSystemColor(L)){throw new Error("Could not convert system colors to RGB: "+L);
}else if(this.isRgbString(L)){return this.__cS();
}else if(this.isRgbaString(L)){return this.__cT();
}else if(this.isHex3String(L)){return this.__cU();
}else if(this.isHex6String(L)){return this.__cV();
}throw new Error("Could not parse color: "+L);
},stringToRgbString:function(Q){return this.rgbToRgbString(this.stringToRgb(Q));
},rgbToRgbString:function(P){return j+P[0]+k+P[1]+k+P[2]+h;
},rgbToHexString:function(J){return (qx.lang.String.pad(J[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(l){return this.isThemedColor(l)||this.isNamedColor(l)||this.isHex3String(l)||this.isHex6String(l)||this.isRgbString(l);
},isCssString:function(C){return this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C);
},isHex3String:function(v){return this.REGEXP.hex3.test(v);
},isHex6String:function(c){return this.REGEXP.hex6.test(c);
},isRgbString:function(D){return this.REGEXP.rgb.test(D);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__cS:function(){var V=parseInt(RegExp.$1,10);
var U=parseInt(RegExp.$2,10);
var T=parseInt(RegExp.$3,10);
return [V,U,T];
},__cT:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__cU:function(){var G=parseInt(RegExp.$1,16)*17;
var F=parseInt(RegExp.$2,16)*17;
var E=parseInt(RegExp.$3,16)*17;
return [G,F,E];
},__cV:function(){var u=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var s=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var o=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [u,s,o];
},hex3StringToRgb:function(K){if(this.isHex3String(K)){return this.__cU(K);
}throw new Error("Invalid hex3 value: "+K);
},hex6StringToRgb:function(S){if(this.isHex6String(S)){return this.__cV(S);
}throw new Error("Invalid hex6 value: "+S);
},hexStringToRgb:function(H){if(this.isHex3String(H)){return this.__cU(H);
}
if(this.isHex6String(H)){return this.__cV(H);
}throw new Error("Invalid hex value: "+H);
},rgbToHsb:function(W){var Y,ba,bc;
var bi=W[0];
var bf=W[1];
var X=W[2];
var bh=(bi>bf)?bi:bf;

if(X>bh){bh=X;
}var bb=(bi<bf)?bi:bf;

if(X<bb){bb=X;
}bc=bh/255.0;

if(bh!=0){ba=(bh-bb)/bh;
}else{ba=0;
}
if(ba==0){Y=0;
}else{var be=(bh-bi)/(bh-bb);
var bg=(bh-bf)/(bh-bb);
var bd=(bh-X)/(bh-bb);

if(bi==bh){Y=bd-bg;
}else if(bf==bh){Y=2.0+be-bd;
}else{Y=4.0+bg-be;
}Y=Y/6.0;

if(Y<0){Y=Y+1.0;
}}return [Math.round(Y*360),Math.round(ba*100),Math.round(bc*100)];
},hsbToRgb:function(w){var i,f,p,q,t;
var x=w[0]/360;
var y=w[1]/100;
var z=w[2]/100;

if(x>=1.0){x%=1.0;
}
if(y>1.0){y=1.0;
}
if(z>1.0){z=1.0;
}var A=Math.floor(255*z);
var B={};

if(y==0.0){B.red=B.green=B.blue=A;
}else{x*=6.0;
i=Math.floor(x);
f=x-i;
p=Math.floor(A*(1.0-y));
q=Math.floor(A*(1.0-(y*f)));
t=Math.floor(A*(1.0-(y*(1.0-f))));

switch(i){case 0:B.red=A;
B.green=t;
B.blue=p;
break;
case 1:B.red=q;
B.green=A;
B.blue=p;
break;
case 2:B.red=p;
B.green=A;
B.blue=t;
break;
case 3:B.red=p;
B.green=q;
B.blue=A;
break;
case 4:B.red=t;
B.green=p;
B.blue=A;
break;
case 5:B.red=A;
B.green=p;
B.blue=q;
break;
}}return [B.red,B.green,B.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();


qx.$$loader.init();

