const trackLink = 'https://play.instruqt.com/embed/instruqt/tracks/3rd-party-gating?token=em_a3X2Wt6t5nmAA4ep'; // Invite or embed url

module.exports = {
    process_form_submission: async function (req, res) {
        userdata = {
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            email:req.body.email
        };
        console.log(userdata);

        var labURL = new URL(trackLink);

        console.log("Lab url: " + labURL.toString());
        return labURL.toString();
    }
};