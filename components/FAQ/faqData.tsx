import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is a TPA?",
    ans: "'TPA' means a Third Party Administrator who is licensed by the IRDAI, for the purpose of providing services to the “Health Insurance – Policyholders” under an agreement with an insurance company.",
  },
  {
    id: 2,
    quest: "Is HERITAGE HEALTH INSURANCE TPA PVT. LTD. - a Licensed TPA?",
    ans: "HERITAGE HEALTH INSURANCE TPA PVT. LTD. is an IRDAI - Licensed TPA. Our License Number is 008.",
  },
  {
    id: 3,
    quest: "What are the services offered by Heritage?",
    ans: "Services offered by Heritage may be broadly grouped as : Issuance of Cards & Guidebook.Cash Less Access Service.Settlement of Reimbursement Claim.Call Centre Services.",
  },
  {
    id: 4,
    quest: "Why Cards & Guidebook are issued?",
    ans: "One of the main features of TPA is extending Cash Less Access Benefit. If Cash Less facility is availed by an Insured, he/she needs not to pay any Deposit money at the time of Admission into a Network Hospital. The Insured gets quality treatment without paying for the treatment expenditure from his pocket. The Cash Less benefit reduces this financial burden and helps you recover with peace of mind. The Cash less service is granted subject to the Policy terms & conditions.",
  },
  {
    id: 5,
    quest: "What is Cash Less Access Benefit?",
    ans: "One of the main features of TPA is extending Cash Less Access Benefit. If Cash Less facility is availed by an Insured, he/she needs not to pay any Deposit money at the time of Admission into a Network Hospital. The Insured gets quality treatment without paying for the treatment expenditure from his pocket. The Cash Less benefit reduces this financial burden and helps you recover with peace of mind. The Cash less service is granted subject to the Policy terms & conditions.",
  },
//   {
//     id: 6,
//     quest: "What is a Network Hospital?",
//     ans: "The Cash less benefit is extended to only those hospitals, which are in the Network of Heritage for the purpose. Heritage enters into an agreement with the Hospital for the purpose. Network Hospital follows certain guidelines such as providing quality treatment to our valued Insured on a priority basis. We have got around 3500 strong Network of Hospitals across the country. Cash Less facility cannot be extended to non Network Hospitals. Please, refer to Network Hospital Section of the Website for updated List.",
//   },
//   {
//     id: 7,
//     quest: "What is the Procedure for Cash Less Sanction?",
//     ans: "At the time of admission the Insured needs to show the Heritage-Card to the Network hospital. A request for Cash Less is made by the Insured through the Network Hospital in the format prescribed for the purpose, called Pre-Authorization Form. After due verification of the request and subject to Policy terms, conditions & exceptions, Heritage issues an Authorization Letter to the Network Hospital, thereby guaranteeing payment. After discharge the concerned hospital submits all the required documents in original. The payment is released to the hospital directly by Heritage.",
//   },
//   {
//     id: 8,
//     quest: "Is the Heritage-Card a Credit Card?",
//     ans: "Please, note that the Heritage-Card is only for the purpose of Identification of the Insured at the Network Hospital while availing Cash Less facility. It shall not be misunderstood with as a Credit Card. Cash Less facility is approved after due verification of Policy papers & Medical documents and is granted only when Authorization letter is issued to the Hospital. Mere acceptance of the Card at the Hospital does not entitle an Insured of an automatic Cash Less Access.",
//   },
//   {
//     id: 9,
//     quest: "What are the Documents to be submitted with the Pre- Authorization form?",
//     ans: `The duly filled in Pre-authorization Form should be accompanied by:
//           The photocopy of the Heritage-Card
//           Policy Copy
//           First Prescription/Advice for Admission
//           Any other relevant Investigation reports & documents as required, by Heritage.`,
//   },
//   {
//     id: 10,
//     quest: "What is the Procedure for Pre and / or Post Hospitalization Expenses?",
//     ans: "To claim for relevant Medical Expenses before and/or after Hospitalization, in relation to the same Illness for which Cash Less facility is availed in the Network Hospital, the insured need to submit all the relevant documents along with the Claim Form. The payment will be made to the Insured by Heritage after settlement of the claim as per the Policy terms & conditions.",
//   },
//   {
//     id: 11,
//     quest: "When can a request for Cash less be rejected?",
//     ans: "Cash less may be denied if found non-payable as per the Policy Terms, conditions & exclusions. Further, It is worth noting that Cash Less facility is extended either, before or during the course of treatment. Decisions for claim payment is made on the basis of only few available documents. Given the nature of a particular case, the Cash Less may also be rejected in the absence of relevant information required for arriving at clear decision. Also, the cash less request may be rejected in doubtful cases. Please, note that the denial of Cash Less access does not mean denial of treatment and does not in any way prevent the patient from seeking necessary medical attention or hospitalization. It also does not prevent the patient to submit his claim for Reimbursement.",
//   },
//   {
//     id: 12,
//     quest: "What is a Claim Form?",
//     ans: "It is a prescribed form, which is required to be submitted when Claim is lodged with Heritage for payment. It is designed to elicit all the relevant information about the claim. It is a compulsory document and should be placed on the top of claim documents. A Claim Form can be downloaded from our Website.",
//   },
//   {
//     id: 13,
//     quest: "What is a Reimbursement Claim?",
//     ans: "Reimbursement of Claim takes place when, after incurring the treatment expenditure from his pocket, the Insured claims payment under the Policy.",
//   },
//   {
//     id: 14,
//     quest: "What is the procedure for applying for Reimbursement Claim?",
//     ans: "Intimation to Heritage regarding hospitalization is required to be made immediately. Subsequently, the policyholder has to submit the relevant treatment papers & bills as prescribed by Heritage to claim the treatment expenses incurred, within 7 days from discharge from the Hospital.",
//   },
//   {
//     id: 15,
//     quest: "What are the Documents to be submitted under the Reimbursement Claim?",
//     ans: ` In support of the claim, please, enclose the following original documents
// Duly Filled in Claim Form.
// Bills/ Receipts and Discharge certificate/card from the Hospital.
// Cash Memos from the Hospitals (s) / Chemists (s), supported by proper prescriptions.
// Receipt and Pathological test reports from Pathologist supported by the note from the attending Medical Practitioner/ Surgeon recommending such Pathological tests.
// Surgeons certificate stating nature of operation performed and Surgeons' bill and receipt.
// Attending Doctor's/ Consultant's/ Specialist's/ Anesthetist's bill and receipt, and certificate regarding diagnosis.
// Certificate from attending Medical Practitioner / Surgeon that the patient is fully cured.
// Copy of Heritage Card
// Copy of the Policy Schedule`,
//   },
//   {
//     id: 16,
//     quest: "When can a Claim be rejected?",
//     ans: "The claims are processed as per the Policy Terms, Conditions & Exclusions. The claims may be rejected in case of discrepancy in documents, due to non- compliance with the policy conditions and as per the Exclusion clause of the Policy.",
//   },
//   {
//     id: 17,
//     quest: " Grievance Redressal:",
//     ans: " Heritage makes all the efforts to ensure that the policyholders are given the utmost priority. Processing and settlement of claims with other allied activities are done at the earliest. However, even after putting in enough efforts to satisfy our valued Insured, the possibility of a grievance cannot be avoided. We have established a dedicated cell to redress such grievances. You may mailto:tpa-grievance@bajoria.in to report any grievances.",
//   },
//   {
//     id: 18,
//     quest: "Customer care Services:",
//     ans: "We have got a dedicated 24 X 7 Call Centre for assistance to all Policy Holders through our All India Toll Free Number 1800 345 3477.",
//   },
];

export default faqData;
