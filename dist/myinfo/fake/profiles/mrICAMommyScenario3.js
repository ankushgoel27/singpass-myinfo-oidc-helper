"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrsICAMommyScenario3 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const domain_1 = require("../../domain");
const id = "S9005005B";
const name = fake_profile_1.ProfileArchetype.MRS_ICA_PR_MOMMY_SPOUSE_SCENARIO_3;
exports.mrsICAMommyScenario3 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.race = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoRaceCode.INDIAN,
            "desc": domain_1.MyInfoRaceCode.fn.toEnumDesc(domain_1.MyInfoRaceCode.INDIAN),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        },
            profile.secondaryrace = {
                "code": null,
                "desc": null,
                "source": "1",
                "lastupdated": "2022-02-25",
                "unavailable": false,
                "classification": "C"
            },
            profile.dob = {
                "lastupdated": "2022-02-25",
                "source": "1",
                "classification": "C",
                "value": "1990-01-03",
                "unavailable": false,
            };
        profile.residentialstatus = {
            "lastupdated": "2018-06-01",
            "code": domain_1.MyInfoResidentialCode.PR,
            "desc": domain_1.MyInfoResidentialCode.fn.toEnumDesc(domain_1.MyInfoResidentialCode.PR),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        },
            profile.nationality.code = domain_1.MyInfoNationalityCode.MALAYSIAN;
        profile.marriagecertno = {
            "lastupdated": "2022-02-25",
            "source": "1",
            "classification": "C",
            "value": "M45678",
            "unavailable": false,
        };
        profile.marriagedate = {
            "lastupdated": "2020-09-10",
            "source": "2",
            "classification": "C",
            "value": "",
            "unavailable": false,
        };
        profile.countryofmarriage = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoCountryCode.SINGAPORE,
            "desc": domain_1.MyInfoCountryCode.fn.toEnumDesc(domain_1.MyInfoCountryCode.SINGAPORE),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        };
        profile.marital = {
            "lastupdated": "2022-02-25",
            "code": domain_1.MyInfoMaritialStatusCode.MARRIED,
            "desc": domain_1.MyInfoMaritialStatusCode.fn.toEnumDesc(domain_1.MyInfoMaritialStatusCode.MARRIED),
            "source": "1",
            "classification": "C",
            "unavailable": false,
        };
        return profile;
    }
};
//# sourceMappingURL=mrICAMommyScenario3.js.map