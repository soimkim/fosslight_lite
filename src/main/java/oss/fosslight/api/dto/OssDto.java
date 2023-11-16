package oss.fosslight.api.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class OssDto {
    String ossId;
    String ossType;
    String ossName;
    String ossVersion;
    List<LicenseDto> ossLicenses;
    String licenseName;
    String licenseType;
    String downloadUrl;
    String homepageUrl;
    String summaryDescription;
    String cveId;
    String cvssScore;
    String creator;
    String createdDate;
    String modifier;
    String modifiedDate;
    List<Character> obligations;

    public void setObligations(String obligationType) {
        var typeArr = obligationType.toCharArray();
        obligations = new ArrayList<>();
        obligations.add(typeArr[0] == '0' ? 'N' : 'Y');
        obligations.add(typeArr[1] == '0' ? 'N' : 'Y');
    }
}
