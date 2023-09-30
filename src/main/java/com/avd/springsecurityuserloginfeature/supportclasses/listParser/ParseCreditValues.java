package com.avd.springsecurityuserloginfeature.supportclasses.listParser;

import java.util.ArrayList;
import java.util.List;

public class ParseCreditValues {

    public static List<String> getFieldName(String line, String name) {
        List<String> fieldName = new ArrayList<>();
        String[] fields = line.split(",");
        for (String field : fields) {
            if (field.contains(name)) {
                field = field.split(name)[1];
                if (field.contains("\"")) {
                    field.replaceAll("\"", "");
                }
                field = field.substring(1, field.length() - 1);
                fieldName.add(field);
            }
        }


        if (fieldName.size() > 4) {
            fieldName = fieldName.subList(0, 4);
        } else {
            fieldName = fieldName.subList(0, fieldName.size());
        }

        return fieldName;
    }
}
