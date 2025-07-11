const xmlString = `<?xml version="1.0" encoding="UTF-8" ?> 
    <users>
        <user name="Tom" age="39">
            <company>
                <title>Microsoft</title>
            </company>
        </user>
        <user name="Bob" age="43">
            <company>
                <title>Google</title>
            </company>
        </user>
    </users>`;
 
// преобразуем строку в XML
const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, "text/xml");
// преобразуем обратно из XML в строку
const xmlSerializer = new XMLSerializer();
const xmlString2 = xmlSerializer.serializeToString(xmlDOM);
console.log(xmlString2);