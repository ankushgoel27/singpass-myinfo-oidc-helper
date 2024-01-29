import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "S4991727I";
const name = ProfileArchetype.MR_CCK_RESIDENT_4;

export const mrCckResident4: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "1949-01-11",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "891";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "10";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "441A";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "BUKIT BATOK WEST AVENUE 8";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "651441";

		return profile;
	},
};
