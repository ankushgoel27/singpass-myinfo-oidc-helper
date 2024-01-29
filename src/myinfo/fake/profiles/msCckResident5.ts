import * as _ from "lodash";
import { MyInfoComponents, MyInfoSexCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { BaseProfile } from "./sponsored-children/BaseProfile";

const id = "T0742993I";
const name = ProfileArchetype.MS_CCK_RESIDENT_5;

export const msCckResident5: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;
		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);

		profile.sex.code = MyInfoSexCode.FEMALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE);

		profile.dob = {
			lastupdated: "2024-01-24",
			source: "1",
			classification: "C",
			value: "2007-12-31",
		};

		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).unit.value = "1041";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).floor.value = "08";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).block.value = "438B";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).street.value = "BUKIT BATOK WEST AVENUE 8";
		(profile.regadd as MyInfoComponents.Schemas.DataitemAddressSg).postal.value = "652438";

		return profile;
	},
};
