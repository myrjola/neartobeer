# Utility functions. Inspired by https://github.com/Originate/guide/blob/master/android/guide/Continuous%20Integration.md

function waitForAVD {
    local bootanim=""
    until [[ "$bootanim" =~ "stopped" ]]; do
        sleep 5
        bootanim=$(adb -e shell getprop init.svc.bootanim 2>&1)
        echo "emulator status=$bootanim"
    done
}

function retry3 {
    local n=1
    local max=3
    local delay=1
    while true; do
        "$@" && break || {
                if [[ $n -lt $max ]]; then
                    adb shell screencap -p | \
                        perl -pe 's/\x0D\x0A/\x0A/g' > \
                             artifacts/screen-$(date -I)-failed-integration-test-${n}.png
                    sleep $delay;
                    ((n++))
                    echo "Command failed. Attempt $n/$max:"
                else
                    echo "The command has failed after $n attempts." >&2
                    return 1
                fi
            }
    done
}
