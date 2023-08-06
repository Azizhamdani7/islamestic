const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  };
  
  module.exports = errorHandler;
  

//   Please help me write the schema in which the returned json will lok like this: 





// [
//   {
//   "mood_name" :  "Angry",
//   "data" : [
//   {
//   "ayat" : "Arabic" (textWithDiacritics),
//   "Ayat_English" : "String",
//   "Ayat_Meaning" : "String",
//   "Ayat_Validity" : "String"   
//   },
//   {
//     "ayat" : "Arabic" (textWithDiacritics),
//     "Ayat_English" : "String",
//     "Ayat_Meaning" : "String",
//     "Ayat_Validity" : "String"   
//     },
//     {
//       "ayat" : "Arabic" (textWithDiacritics),
//       "Ayat_English" : "String",
//       "Ayat_Meaning" : "String",
//       "Ayat_Validity" : "String"   
//       },
//       {
//         "ayat" : "Arabic" (textWithDiacritics),
//         "Ayat_English" : "String",
//         "Ayat_Meaning" : "String",
//         "Ayat_Validity" : "String"   
//         },
  
//   ]
  
//   },
//   {
//     "mood_name" :  "confidence",
//     "data" : [
//     {
//     "ayat" : "Arabic" (textWithDiacritics),
//     "Ayat_English" : "String",
//     "Ayat_Meaning" : "String",
//     "Ayat_Validity" : "String"   
//     },
//     {
//       "ayat" : "Arabic" (textWithDiacritics),
//       "Ayat_English" : "String",
//       "Ayat_Meaning" : "String",
//       "Ayat_Validity" : "String"   
//       },
//       {
//         "ayat" : "Arabic" (textWithDiacritics),
//         "Ayat_English" : "String",
//         "Ayat_Meaning" : "String",
//         "Ayat_Validity" : "String"   
//         },
//         {
//           "ayat" : "Arabic" (textWithDiacritics),
//           "Ayat_English" : "String",
//           "Ayat_Meaning" : "String",
//           "Ayat_Validity" : "String"   
//           },
    
//     ]
    
//     }
  
//   ]